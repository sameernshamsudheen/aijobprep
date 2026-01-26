import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    ARCJET_KEY: z.string().min(1),
    POSTGRES_DB: z.string().min(1),
    POSTGRES_USER: z.string().min(1),
    POSTGRES_PASSWORD: z.string().min(1),
    POSTGRES_PORT: z.string().min(1),
    POSTGRES_HOST: z.string().min(1),
    POSTGRES_HOSTNAME: z.string().min(1),
    HUME_API_KEY: z.string().min(1),
    HUME_SECRET_KEY: z.string().min(1),
    GEMINI_API_KEY: z.string().min(1),
  },

  createFinalSchema:env=>{
    return z.object(env).transform(val=>{
      const {POSTGRES_HOST,POSTGRES_DB,POSTGRES_PASSWORD,POSTGRES_PORT,POSTGRES_USER,...rest} =val
      return{
        ...rest,
         DATABSE_URL:`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`
      }
    })
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
