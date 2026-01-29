import { db } from "@/drizzle/db"
import { ScheduledInterviewsTable } from "@/drizzle/schema"
import { eq } from "drizzle-orm"
import { revalidateScheduledInterviewCache } from "./dbCache"

export async function insertScheduledInterview(
  scheduledInterview: typeof ScheduledInterviewsTable.$inferInsert
) {
  const [newScheduledInterview] = await db
    .insert(ScheduledInterviewsTable)
    .values(scheduledInterview)
    .returning({
      id: ScheduledInterviewsTable.id,
      jobInfoId: ScheduledInterviewsTable.jobInfoId,
    })

  revalidateScheduledInterviewCache(newScheduledInterview)

  return newScheduledInterview
}

export async function updateScheduledInterview(
  id: string,
  scheduledInterview: Partial<typeof ScheduledInterviewsTable.$inferInsert>
) {
  const [updated] = await db
    .update(ScheduledInterviewsTable)
    .set(scheduledInterview)
    .where(eq(ScheduledInterviewsTable.id, id))
    .returning({
      id: ScheduledInterviewsTable.id,
      jobInfoId: ScheduledInterviewsTable.jobInfoId,
    })

  revalidateScheduledInterviewCache(updated)

  return updated
}
