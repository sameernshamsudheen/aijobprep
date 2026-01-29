import { relations } from "drizzle-orm"
import { integer, pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

import { timestamps, uuidId } from "../schema-helpers"
import { JobInfoTable } from "./job-info"

export const scheduledInterviewStatusOptions = [
  "scheduled",
  "sent",
  "cancelled",
  "completed",
] as const

export const scheduledInterviewStatusEnum = pgEnum(
  "scheduled_interview_status",
  scheduledInterviewStatusOptions
)

export const ScheduledInterviewsTable = pgTable("scheduled_interviews", {
  ...uuidId,
  jobInfoId: uuid("job_info_id")
    .notNull()
    .references(() => JobInfoTable.id, { onDelete: "cascade" }),
  candidateName: varchar("candidate_name", { length: 255 }).notNull(),
  candidateEmail: varchar("candidate_email", { length: 255 }).notNull(),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }).notNull(),
  timezone: varchar("timezone", { length: 64 }).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  location: varchar("location", { length: 1024 }),
  status: scheduledInterviewStatusEnum("status").notNull().default("scheduled"),
  emailSentAt: timestamp("email_sent_at", { withTimezone: true }),
  ...timestamps,
})

export const scheduledInterviewRelations = relations(
  ScheduledInterviewsTable,
  ({ one }) => ({
    jobInfo: one(JobInfoTable, {
      fields: [ScheduledInterviewsTable.jobInfoId],
      references: [JobInfoTable.id],
    }),
  })
)
