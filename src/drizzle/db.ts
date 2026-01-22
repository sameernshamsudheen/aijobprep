import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { serverEnv } from "@/data/env/server";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: serverEnv.DATABSE_URL,
});

export const db = drizzle(pool, { schema });
