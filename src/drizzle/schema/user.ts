import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";

import { timestamps } from "../schema-helpers";
import { JobInfoTable } from "./job-info";

export const UserTable = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 2048 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  ...timestamps,
});

export const userRelations = relations(UserTable, ({ many }) => ({
  jobInfos: many(JobInfoTable),
}));
