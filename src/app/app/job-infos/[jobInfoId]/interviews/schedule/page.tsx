import { JobInfoBackLink } from "@/features/jobinfos/components/JobinfoBackLink"
import { ScheduledInterviewForm } from "@/features/scheduled-interviews/components/ScheduledInterviewForm"
import { getCurrentUser } from "@/services/lib/getcurrentUser"

export default async function ScheduleInterviewPage({
  params,
}: {
  params: Promise<{ jobInfoId: string }>
}) {
  const { jobInfoId } = await params
  const { userId, redirectToSignIn } = await getCurrentUser()
  if (userId == null) return redirectToSignIn()

  return (
    <div className="container py-6 space-y-6">
      <JobInfoBackLink jobInfoId={jobInfoId} />
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl">Schedule Interview</h1>
        <p className="text-muted-foreground">
          Send an interview invite email with the scheduled details.
        </p>
      </div>
      <ScheduledInterviewForm jobInfoId={jobInfoId} />
    </div>
  )
}
