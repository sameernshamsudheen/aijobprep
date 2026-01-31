"use server"

import z from "zod"
import { scheduledInterviewSchema } from "./schema"

export async function createScheduledInterview(
  jobInfoId: string,
  unsafeData: z.infer<typeof scheduledInterviewSchema>
): Promise<{ error: true; message: string } | { error: false; id: string }> {
  void jobInfoId
  void unsafeData
  return { error: true, message: "Scheduled interviews are disabled" }
}

export async function cancelScheduledInterview(
  scheduledInterviewId: string
): Promise<{ error: true; message: string } | { error: false }> {
  void scheduledInterviewId
  return { error: true, message: "Scheduled interviews are disabled" }
}
