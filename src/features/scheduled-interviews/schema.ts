import { z } from "zod"

export const scheduledInterviewSchema = z.object({
  candidateName: z.string().min(1, "Candidate name is required"),
  candidateEmail: z.string().email("Enter a valid email"),
  scheduledAt: z.string().min(1, "Scheduled time is required"),
  timezone: z.string().min(1, "Timezone is required"),
  durationMinutes: z.coerce.number().int().min(1),
  location: z.string().trim().optional().nullable(),
})
