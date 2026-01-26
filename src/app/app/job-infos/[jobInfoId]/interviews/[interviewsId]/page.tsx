import { BackLink } from "@/components/BackLInk"
import { db } from "@/drizzle/db"
import { InterviewsTable, JobInfoTable } from "@/drizzle/schema"
import { getInterviewIdTag } from "@/features/interviews/dbCache"
import { getJobInfoIdTag } from "@/features/jobinfos/dbCache"
import { formatDateTime } from "@/lib/formatters"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { and, eq } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { Suspense } from "react"
import { CondensedMessages } from "@/services/hume/components/CondensedMessages"
import { condenseChatMessages } from "@/services/hume/lib/condensedChat"
import { fetchChatMessages } from "@/services/hume/lib/api"
import { Skeleton } from "@/components/ui/skeleton"
import { FeedbackActions } from "./FeedbackActions"
import { SuspendedItem } from "@/components/SuspendedItem"
import { SkeletonButton } from "@/components/Skeleton"
import { ActionButton } from "@/components/ui/action-button"
import { generateInterviewFeedback } from "@/features/interviews/action"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ jobInfoId: string; interviewsId: string }>
}) {
  const { jobInfoId, interviewsId } = await params

  const { userId, user, redirectToSignIn } = await getCurrentUser({
    allData: true,
  })
  if (userId == null || user == null) return redirectToSignIn()

  const interviewIds = await getInterviewIdsForJobInfo(jobInfoId, userId)
  console.log("Interview IDs for jobInfo:", jobInfoId, interviewIds)

  const interview = await getInterview(interviewsId, userId)
  if (interview == null) {
    return (
      <div className="container my-4 space-y-4">
        <BackLink href={`/app/job-infos/${jobInfoId}/interviews`}>
          All Interviews
        </BackLink>
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Interview not found or access denied.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-4 space-y-4">
      <BackLink href={`/app/job-infos/${jobInfoId}/interviews`}>
        All Interviews
      </BackLink>
      <div className="space-y-6">
        <div className="flex gap-2 justify-between">
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl md:text-4xl">
              Interview: {formatDateTime(interview.createdAt)}
            </h1>
            <p className="text-muted-foreground">
              {interview.duration}
            </p>
          </div>
              <SuspendedItem
            item={interview}
            fallback={<SkeletonButton className="w-32" />}
            result={i =>
              i.feedback == null ? (
                <ActionButton
                  action={generateInterviewFeedback.bind(null, i.id)}
                >
                  Generate Feedback
                </ActionButton>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>View Feedback</Button>
                  </DialogTrigger>
                  <DialogContent className="md:max-w-3xl lg:max-w-4xl max-h-[calc(100%-2rem)] overflow-y-auto flex flex-col">
                    <DialogTitle>Feedback</DialogTitle>
                    <MarkdownRenderer>{i.feedback}</MarkdownRenderer>
                  </DialogContent>
                </Dialog>
              )
            }
          />
        </div>
        <Suspense fallback={<MessagesSkeleton />}>
          <Messages interview={interview} user={user} />
        </Suspense>
      </div>
    </div>
  )
}

function MessagesSkeleton() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-[70%]" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[75%]" />
      </div>
    </div>
  )
}

async function Messages({
  interview,
  user,
}: {
  interview: { humeChatId: string | null }
  user: { name: string; imageUrl: string }
}) {
  const { humeChatId } = interview

  if (!humeChatId) {
    return (
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground">
          Interview not completed yet. Once the call finishes, the transcript
          will appear here.
        </p>
      </div>
    )
  }

  const condensedMessages = condenseChatMessages(
    await fetchChatMessages(humeChatId)
  )

  return (
    <CondensedMessages
      messages={condensedMessages}
      user={user}
      className="max-w-5xl mx-auto"
    />
  )
}

async function getInterview(id: string, userId: string) {
  "use cache"
  cacheTag(getInterviewIdTag(id))

  const interview = await db.query.InterviewsTable.findFirst({
    where: eq(InterviewsTable.id, id),
    with: {
      jobInfo: {
        columns: {
          id: true,
          userId: true,
        },
      },
    },
  })

  if (interview == null) return null

  cacheTag(getJobInfoIdTag(interview.jobInfo.id))
  if (interview.jobInfo.userId !== userId) return null

  return interview
}

async function getInterviewIdsForJobInfo(jobInfoId: string, userId: string) {
  const interviews = await db
    .select({ id: InterviewsTable.id })
    .from(InterviewsTable)
    .innerJoin(JobInfoTable, eq(InterviewsTable.jobInfoId, JobInfoTable.id))
    .where(
      and(eq(InterviewsTable.jobInfoId, jobInfoId), eq(JobInfoTable.userId, userId))
    )

  return interviews.map(interview => interview.id)
}
