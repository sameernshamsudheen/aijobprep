import Link from "next/link"
import { redirect } from "next/navigation"
import { desc, eq } from "drizzle-orm"

import { Button } from "@/components/ui/button"
import { db } from "@/drizzle/db"
import { ScheduledInterviewsTable } from "@/drizzle/schema"
import { JobInfoBackLink } from "@/features/jobinfos/components/JobinfoBackLink"
import { getJobInfoIdTag } from "@/features/jobinfos/dbCache"
import { getScheduledInterviewJobInfoTag } from "@/features/scheduled-interviews/dbCache"
import { ScheduledInterviewRow } from "@/features/scheduled-interviews/components/ScheduledInterviewRow"
import { getCurrentUser } from "@/services/lib/getcurrentUser"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"

export default async function ScheduledInterviewsPage({
  params,
}: {
  params: Promise<{ jobInfoId: string }>
}) {
  const { jobInfoId } = await params
  const { userId, redirectToSignIn } = await getCurrentUser()
  if (userId == null) return redirectToSignIn()

  const scheduledInterviews = await getScheduledInterviews(jobInfoId, userId)

  return (
    <div className="container py-6 space-y-6">
      <JobInfoBackLink jobInfoId={jobInfoId} />
      <div className="flex gap-2 items-center justify-between">
        <h1 className="text-3xl md:text-4xl">Scheduled Interviews</h1>
        <Button asChild>
          <Link href={`/app/job-infos/${jobInfoId}/interviews/schedule`}>
            Schedule Interview
          </Link>
        </Button>
      </div>

      {scheduledInterviews.length === 0 ? (
        <div className="text-muted-foreground">
          No scheduled interviews yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scheduledInterviews.map(item => (
            <ScheduledInterviewRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

async function getScheduledInterviews(jobInfoId: string, userId: string) {
  "use cache"
  cacheTag(getScheduledInterviewJobInfoTag(jobInfoId))
  cacheTag(getJobInfoIdTag(jobInfoId))

  const data = await db.query.ScheduledInterviewsTable.findMany({
    where: eq(ScheduledInterviewsTable.jobInfoId, jobInfoId),
    with: {
      jobInfo: { columns: { userId: true } },
    },
    orderBy: desc(ScheduledInterviewsTable.scheduledAt),
  })

  return data.filter(item => item.jobInfo.userId === userId)
}
