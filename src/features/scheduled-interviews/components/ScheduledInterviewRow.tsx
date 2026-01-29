"use client"

import { useRouter } from "next/navigation"
import { ActionButton } from "@/components/ui/action-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cancelScheduledInterview } from "@/features/scheduled-interviews/action"
import { formatDateTime } from "@/lib/formatters"

export type ScheduledInterviewRowItem = {
  id: string
  candidateName: string
  candidateEmail: string
  scheduledAt: Date
  timezone: string
  durationMinutes: number
  location: string | null
  status: string
  emailSentAt: Date | null
}

export function ScheduledInterviewRow({ item }: { item: ScheduledInterviewRowItem }) {
  const router = useRouter()

  async function handleCancel() {
    const res = await cancelScheduledInterview(item.id)
    if (!res.error) router.refresh()
    return res
  }

  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">{item.candidateName}</CardTitle>
        <div className="text-sm text-muted-foreground">{item.candidateEmail}</div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div>
          {formatDateTime(item.scheduledAt)} ({item.timezone})
        </div>
        <div>Duration: {item.durationMinutes} min</div>
        {item.location ? <div>Location: {item.location}</div> : null}
        <div>Status: {item.status}</div>
        {item.emailSentAt ? (
          <div>Invite sent: {formatDateTime(item.emailSentAt)}</div>
        ) : null}
        {(item.status === "scheduled" || item.status === "sent") && (
          <ActionButton
            variant="outline"
            requireAreYouSure
            areYouSureDescription="This will cancel the scheduled interview."
            action={handleCancel}
          >
            Cancel interview
          </ActionButton>
        )}
      </CardContent>
    </Card>
  )
}
