"use server"

import z from "zod"
import { scheduledInterviewSchema } from "./schema"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { insertScheduledInterview, updateScheduledInterview } from "./db"
import { db } from "@/drizzle/db"
import { and, eq } from "drizzle-orm"
import { JobInfoTable, ScheduledInterviewsTable } from "@/drizzle/schema"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { getJobInfoIdTag } from "../jobinfos/dbCache"
import { getScheduledInterviewIdTag } from "./dbCache"
import { sendInterviewInvite } from "@/services/email/sendInterviewInvite"

export async function createScheduledInterview(
  jobInfoId: string,
  unsafeData: z.infer<typeof scheduledInterviewSchema>
): Promise<{ error: true; message: string } | { error: false; id: string }> {
  const { userId } = await getCurrentUser()
  if (userId == null) {
    return { error: true, message: "You don't have permission to do this" }
  }

  const { success, data } = scheduledInterviewSchema.safeParse(unsafeData)
  if (!success) {
    return { error: true, message: "Invalid interview data" }
  }

  const jobInfo = await getJobInfo(jobInfoId, userId)
  if (jobInfo == null) {
    return { error: true, message: "You don't have permission to do this" }
  }

  const scheduledAt = new Date(data.scheduledAt)
  if (Number.isNaN(scheduledAt.getTime())) {
    return { error: true, message: "Invalid scheduled time" }
  }

  const scheduledInterview = await insertScheduledInterview({
    jobInfoId,
    candidateName: data.candidateName,
    candidateEmail: data.candidateEmail,
    scheduledAt,
    timezone: data.timezone,
    durationMinutes: data.durationMinutes,
    location: data.location || null,
    status: "scheduled",
  })

  try {
    await sendInterviewInvite({
      candidateName: data.candidateName,
      candidateEmail: data.candidateEmail,
      scheduledAt,
      timezone: data.timezone,
      durationMinutes: data.durationMinutes,
      location: data.location || null,
      jobTitle: jobInfo.title,
      hostName: jobInfo.user?.name ?? null,
    })

    await updateScheduledInterview(scheduledInterview.id, {
      status: "sent",
      emailSentAt: new Date(),
    })
  } catch (error) {
    return {
      error: true,
      message:
        error instanceof Error ? error.message : "Failed to send invite email",
    }
  }

  return { error: false, id: scheduledInterview.id }
}

export async function cancelScheduledInterview(
  scheduledInterviewId: string
): Promise<{ error: true; message: string } | { error: false }> {
  const { userId } = await getCurrentUser()
  if (userId == null) {
    return { error: true, message: "You don't have permission to do this" }
  }

  const scheduledInterview = await getScheduledInterview(
    scheduledInterviewId,
    userId
  )
  if (scheduledInterview == null) {
    return { error: true, message: "You don't have permission to do this" }
  }

  await updateScheduledInterview(scheduledInterviewId, {
    status: "cancelled",
  })

  return { error: false }
}

async function getJobInfo(id: string, userId: string) {
  "use cache"
  cacheTag(getJobInfoIdTag(id))

  return db.query.JobInfoTable.findFirst({
    where: and(eq(JobInfoTable.id, id), eq(JobInfoTable.userId, userId)),
    with: {
      user: {
        columns: {
          name: true,
        },
      },
    },
  })
}

async function getScheduledInterview(id: string, userId: string) {
  "use cache"
  cacheTag(getScheduledInterviewIdTag(id))

  const scheduledInterview = await db.query.ScheduledInterviewsTable.findFirst({
    where: eq(ScheduledInterviewsTable.id, id),
    with: {
      jobInfo: {
        columns: {
          id: true,
          userId: true,
        },
      },
    },
  })

  if (scheduledInterview == null) return null
  cacheTag(getJobInfoIdTag(scheduledInterview.jobInfo.id))
  if (scheduledInterview.jobInfo.userId !== userId) return null

  return scheduledInterview
}
