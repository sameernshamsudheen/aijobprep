import { NextResponse } from "next/server"
import { and, eq, isNull, lte } from "drizzle-orm"

import { db } from "@/drizzle/db"
import { ScheduledInterviewsTable } from "@/drizzle/schema"
import { serverEnv } from "@/data/env/server"
import { sendInterviewInvite } from "@/services/email/sendInterviewInvite"
import { updateScheduledInterview } from "@/features/scheduled-interviews/db"

export async function POST(request: Request) {
  const secret = request.headers.get("x-cron-secret")
  if (secret !== serverEnv.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const now = new Date()
  const tenMinutesFromNow = new Date(now.getTime() + 10 * 60 * 1000)

  const candidates = await db.query.ScheduledInterviewsTable.findMany({
    where: and(
      isNull(ScheduledInterviewsTable.emailSentAt),
      lte(ScheduledInterviewsTable.scheduledAt, tenMinutesFromNow)
    ),
    with: {
      jobInfo: {
        columns: { title: true },
        with: { user: { columns: { name: true } } },
      },
    },
  })
  const eligibleCandidates = candidates.filter(
    item => item.status !== "cancelled"
  )

  let sentCount = 0
  for (const item of eligibleCandidates) {
    await sendInterviewInvite({
      candidateName: item.candidateName,
      candidateEmail: item.candidateEmail,
      scheduledAt: item.scheduledAt,
      timezone: item.timezone,
      durationMinutes: item.durationMinutes,
      location: item.location,
      jobTitle: item.jobInfo?.title ?? null,
      hostName: item.jobInfo?.user?.name ?? null,
    })

    await updateScheduledInterview(item.id, {
      status: "sent",
      emailSentAt: new Date(),
    })
    sentCount += 1
  }

  return NextResponse.json({
    sent: sentCount,
    evaluated: eligibleCandidates.length,
  })
}
