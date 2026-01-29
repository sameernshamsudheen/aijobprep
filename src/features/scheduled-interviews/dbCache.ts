import { getGlobalTag, getIdTag, getJobInfoTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export function getScheduledInterviewGlobalTag() {
  return getGlobalTag("scheduledInterviews")
}

export function getScheduledInterviewJobInfoTag(jobInfoId: string) {
  return getJobInfoTag("scheduledInterviews", jobInfoId)
}

export function getScheduledInterviewIdTag(id: string) {
  return getIdTag("scheduledInterviews", id)
}

export function revalidateScheduledInterviewCache({
  id,
  jobInfoId,
}: {
  id: string
  jobInfoId: string
}) {
  revalidateTag(getScheduledInterviewGlobalTag())
  revalidateTag(getScheduledInterviewJobInfoTag(jobInfoId))
  revalidateTag(getScheduledInterviewIdTag(id))
}
