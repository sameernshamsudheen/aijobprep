import { db } from "@/drizzle/db"
import { InterviewsTable } from "@/drizzle/schema"
import { updateInterview } from "@/features/interviews/db"
import { generateAiInterviewFeedback } from "@/services/ai/interviews"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ interviewId: string }> }
) {
  const { interviewId } = await params
  const { userId, user } = await getCurrentUser({ allData: true })
  if (userId == null || user == null) {
    return NextResponse.json(
      { error: true, message: "You don't have permission to do this" },
      { status: 401 }
    )
  }

  const interview = await db.query.InterviewsTable.findFirst({
    where: eq(InterviewsTable.id, interviewId),
    with: {
      jobInfo: {
        columns: {
          userId: true,
          title: true,
          description: true,
          experienceLevel: true,
        },
      },
    },
  })

  if (interview == null || interview.jobInfo.userId !== userId) {
    return NextResponse.json(
      { error: true, message: "You don't have permission to do this" },
      { status: 403 }
    )
  }

  if (!interview.humeChatId) {
    return NextResponse.json(
      { error: true, message: "Interview has not been completed yet" },
      { status: 400 }
    )
  }

  const feedback = await generateAiInterviewFeedback({
    humeChatId: interview.humeChatId,
    jobInfo: interview.jobInfo,
    userName: user.name,
  })

  if (!feedback) {
    return NextResponse.json(
      { error: true, message: "Failed to generate feedback" },
      { status: 500 }
    )
  }

  await updateInterview(interview.id, { feedback })

  return NextResponse.json({ error: false, feedback })
}
