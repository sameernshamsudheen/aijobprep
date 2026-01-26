import { db } from "@/drizzle/db"
import { JobInfoTable, QuestionsTable } from "@/drizzle/schema"
import { generateAiQuestionFeedback } from "@/services/ai/questions"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { createDataStreamResponse } from "ai"
import { eq } from "drizzle-orm"
import z from "zod"

const schema = z.object({
  prompt: z.string().min(1),
  questionId: z.string().min(1),
})

export async function POST(req: Request) {
  const body = await req.json()
  const result = schema.safeParse(body)

  if (!result.success) {
    return new Response("Error generating your feedback", { status: 400 })
  }

  const { prompt: answer, questionId } = result.data
  const { userId } = await getCurrentUser()

  if (userId == null) {
    return new Response("You are not logged in", { status: 401 })
  }

  const question = await getQuestion(questionId)
  if (question == null || question.userId !== userId) {
    return new Response("You do not have permission to do this", {
      status: 403,
    })
  }

  return createDataStreamResponse({
    execute: async dataStream => {
      const res = generateAiQuestionFeedback({
        question: question.text,
        answer,
      })
      res.mergeIntoDataStream(dataStream, { sendUsage: false })
    },
  })
}

async function getQuestion(questionId: string) {
  const [row] = await db
    .select({
      text: QuestionsTable.text,
      userId: JobInfoTable.userId,
    })
    .from(QuestionsTable)
    .innerJoin(JobInfoTable, eq(QuestionsTable.jobInfoId, JobInfoTable.id))
    .where(eq(QuestionsTable.id, questionId))

  return row
}
