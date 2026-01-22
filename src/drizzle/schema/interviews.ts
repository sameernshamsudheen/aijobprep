import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

import { timestamps, uuidId } from "../schema-helpers";
import { JobInfoTable } from "./job-info";

export const InterviewsTable = pgTable("interviews", {
  ...uuidId,
  jobInfoId: uuid("job_info_id")
    .notNull()
    .references(() => JobInfoTable.id, { onDelete: "cascade" }),
  duration: varchar("duration", { length: 255 }).notNull(),
  humeChatId: varchar("hume_chat_id", { length: 255 }).notNull(),
  feedback: varchar("feedback", { length: 2000 }),
  ...timestamps,
});

export const interviewRelations = relations(InterviewsTable, ({ one }) => ({
  jobInfo: one(JobInfoTable, {
    fields: [InterviewsTable.jobInfoId],
    references: [JobInfoTable.id],
  }),
}));
