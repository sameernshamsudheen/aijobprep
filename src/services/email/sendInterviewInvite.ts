import { serverEnv } from "@/data/env/server"
import { Resend } from "resend"

type SendInterviewInviteInput = {
  candidateName: string
  candidateEmail: string
  scheduledAt: Date
  timezone: string
  durationMinutes: number
  location?: string | null
  jobTitle?: string | null
  hostName?: string | null
}

export async function sendInterviewInvite({
  candidateName,
  candidateEmail,
  scheduledAt,
  timezone,
  durationMinutes,
  location,
  jobTitle,
  hostName,
}: SendInterviewInviteInput) {
  if (!serverEnv.RESEND_API_KEY || !serverEnv.EMAIL_FROM) {
    throw new Error("Missing email configuration")
  }

  const resend = new Resend(serverEnv.RESEND_API_KEY)
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: timezone,
  }).format(scheduledAt)

  const subject = jobTitle
    ? `Interview scheduled: ${jobTitle}`
    : "Interview scheduled"

  const locationLine = location ? `Location: ${location}` : "Location: TBD"
  const hostLine = hostName ? `Host: ${hostName}` : ""

  const text = [
    `Hi ${candidateName},`,
    "",
    "Your interview is scheduled.",
    `Time: ${formattedDate} (${timezone})`,
    `Duration: ${durationMinutes} minutes`,
    locationLine,
    hostLine,
    "",
    "If you need to reschedule, please reply to this email.",
  ]
    .filter(Boolean)
    .join("\n")

  return resend.emails.send({
    from: serverEnv.EMAIL_FROM,
    to: candidateEmail,
    subject,
    text,
  })
}
