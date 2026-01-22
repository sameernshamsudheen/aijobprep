import { relations } from "drizzle-orm";

import { pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

import { timestamps, uuidId } from "../schema-helpers";
import { UserTable } from "./user";
import { InterviewsTable } from "./interviews";
import { QuestionsTable } from "./questions";

export const experienceLevelOptions = [
  "junior",
  "mid-level",
  "senior",
] as const;

export const experienceLevelEnum = pgEnum(
  "experience_level",
  experienceLevelOptions
);

export const JobInfoTable = pgTable("job_infos", {
  ...uuidId,
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => UserTable.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
   description: varchar().notNull(),
  experienceLevel: experienceLevelEnum("experience_level").notNull(),
  ...timestamps,
});

export const jobInfoRelations = relations(JobInfoTable, ({ one, many }) => ({
  user: one(UserTable, {
    fields: [JobInfoTable.userId],
    references: [UserTable.id],
  }),
  questions:many(QuestionsTable),
  interviews: many(InterviewsTable),
}));
