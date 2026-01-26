import { db } from "@/drizzle/db"
import { InterviewsTable } from "@/drizzle/schema"
import { revalidateInterviewCache } from "./dbCache"
import { eq } from "drizzle-orm"

export async function insertInterview(
  interview: typeof InterviewsTable.$inferInsert
) {
  const [newInterview] = await db
    .insert(InterviewsTable)
    .values(interview)
    .returning({ id: InterviewsTable.id, jobInfoId: InterviewsTable.jobInfoId })

  revalidateInterviewCache(newInterview)

  return newInterview
}

export async function updateInterview(
  id: string,
  interview: Partial<typeof InterviewsTable.$inferInsert>
) {
  const [newInterview] = await db
    .update(InterviewsTable)
    .set(interview)
    .where(eq(InterviewsTable.id, id))
    .returning({ id: InterviewsTable.id, jobInfoId: InterviewsTable.jobInfoId })

  revalidateInterviewCache(newInterview)

  return newInterview
}