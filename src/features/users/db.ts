import { db } from "@/drizzle/db"
import { UserTable } from "@/drizzle/schema"
import { eq } from "drizzle-orm"
import { revalidateUserCache } from "../users/dbCache"

export async function upsertUser(
  user: typeof UserTable.$inferInsert,
  { revalidate = true }: { revalidate?: boolean } = {}
) {
  await db
    .insert(UserTable)
    .values(user)
    .onConflictDoUpdate({
      target: [UserTable.id],
      set: user,
    })

  if (revalidate) {
    revalidateUserCache(user.id)
  }
}

export async function deleteUser(id: string) {
  await db.delete(UserTable).where(eq(UserTable.id, id))

  revalidateUserCache(id)
}
