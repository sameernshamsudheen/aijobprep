"use server"

import z from "zod"
import { jobInfoSchema } from "../jobinfos/schema"
import { experienceLevelOptions } from "@/drizzle/schema"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { insertJobInfo, updateJobInfo as updateJobInfoDb } from "./db"
import { redirect } from "next/navigation"
import { db } from "@/drizzle/db"
import { and, eq } from "drizzle-orm"
import { JobInfoTable } from "@/drizzle/schema"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { getJobInfoIdTag } from "./dbCache"

export async function createJobInfo(unsafeData: z.infer<typeof jobInfoSchema>) {
  const { userId } = await getCurrentUser()
  if (userId == null) {
    return {
      error: true,
      message: "You don't have permission to do this",
    }
  }

  const { success, data } = jobInfoSchema.safeParse(unsafeData)
  if (!success) {
    return {
      error: true,
      message: "Invalid job data",
    }
  }

  // Derive the literal union type for experience level from the schema options
  type ExperienceLevel = (typeof experienceLevelOptions)[number]

  // Normalize nullable fields so DB insert matches non-null columns
  const insertPayload = {
    ...data,
    title: data.title ?? "",
    // safe to cast here because options are the single source of truth
    experienceLevel: data.experienceLevel as ExperienceLevel,
    userId,
  }

  const jobInfo = await insertJobInfo(insertPayload)

  redirect(`/app/job-infos/${jobInfo.id}`)
}

export async function updateJobInfo(
  id: string,
  unsafeData: z.infer<typeof jobInfoSchema>
) {
  const { userId } = await getCurrentUser()
  if (userId == null) {
    return {
      error: true,
      message: "You don't have permission to do this",
    }
  }

  const { success, data } = jobInfoSchema.safeParse(unsafeData)
  if (!success) {
    return {
      error: true,
      message: "Invalid job data",
    }
  }

  const existingJobInfo = await getJobInfo(id, userId)
  if (existingJobInfo == null) {
    return {
      error: true,
      message: "You don't have permission to do this",
    }
  }

  type ExperienceLevel = (typeof experienceLevelOptions)[number]

  // Normalize nullable fields so DB update matches non-null columns
  const updatePayload = {
    ...data,
    title: data.title ?? "",
    experienceLevel: data.experienceLevel as ExperienceLevel,
  }

  const jobInfo = await updateJobInfoDb(id, updatePayload)

  redirect(`/app/job-infos/${jobInfo.id}`)
}

async function getJobInfo(id: string, userId: string) {
  "use cache"
  cacheTag(getJobInfoIdTag(id))

  return db.query.JobInfoTable.findFirst({
    where: and(eq(JobInfoTable.id, id), eq(JobInfoTable.userId, userId)),
  })
}