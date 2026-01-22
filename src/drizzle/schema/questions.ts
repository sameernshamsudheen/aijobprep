import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { timestamps, uuidId } from "../schema-helpers";
import { JobInfoTable } from "./job-info";

export const questionDifficultyOptions = [
  "easy",
  "medium",
  "hard",
] as const;

export const questionDifficultyEnum = pgEnum(
  "question_difficulty",
  questionDifficultyOptions
);

export const QuestionsTable = pgTable("questions", {
  ...uuidId,
  jobInfoId: uuid("job_info_id")
    .notNull()
    .references(() => JobInfoTable.id, { onDelete: "cascade" }),
  text: varchar("text", { length: 2000 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  difficulty: questionDifficultyEnum("difficulty").notNull(),
  ...timestamps,
});
export const questionsRelations = relations(QuestionsTable, ({ one }) => ({
  JobInfo: one(JobInfoTable, {
    fields: [QuestionsTable.jobInfoId],
    references: [JobInfoTable.id],
  }),
}));