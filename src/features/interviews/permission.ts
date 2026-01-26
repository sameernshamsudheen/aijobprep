import { db } from "@/drizzle/db"
import { InterviewsTable, JobInfoTable } from "@/drizzle/schema"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { hasPermission } from "@/services/lib/hasPermission"
import { and, count, eq, isNotNull } from "drizzle-orm"

export async function canCreateInterview() {
  const [hasUnlimited, hasOneInterview, count] = await Promise.all([
    hasPermission("unlimited_interviews"),
    hasPermission("1_interview"),
    getUserInterviewCount(),
  ])

  if (hasOneInterview) {
    return count < 1
  }

  if (hasUnlimited) {
    return true
  }

  return false
}

async function getUserInterviewCount() {
  const { userId } = await getCurrentUser()
  if (userId == null) return 0

  return getInterviewCount(userId)
}

async function getInterviewCount(userId: string) {
  const [{ count: c }] = await db
    .select({ count: count() })
    .from(InterviewsTable)
    .innerJoin(JobInfoTable, eq(InterviewsTable.jobInfoId, JobInfoTable.id))
    .where(
      and(eq(JobInfoTable.userId, userId), isNotNull(InterviewsTable.humeChatId))
    )

  return c
}
