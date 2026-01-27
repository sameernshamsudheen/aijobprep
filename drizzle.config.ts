import type { Config } from "drizzle-kit";
import { serverEnv } from "./src/data/env/server";

export default {
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: serverEnv.DATABASE_URL ?? "",
  },
} satisfies Config;
