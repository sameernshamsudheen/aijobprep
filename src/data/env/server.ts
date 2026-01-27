// src/env/server.ts (or wherever yours is)
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    ARCJET_KEY: z.string().min(1),

    DATABASE_URL: z.string().min(1), // Neon

    HUME_API_KEY: z.string().min(1),
    HUME_SECRET_KEY: z.string().min(1),
    GEMINI_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
