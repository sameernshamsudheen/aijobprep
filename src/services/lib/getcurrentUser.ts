import { db } from "@/drizzle/db"
import { UserTable } from "@/drizzle/schema"
import { getUserIdTag } from "@/features/users/dbCache"
import { upsertUser } from "@/features/users/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"

export async function getCurrentUser({ allData = false } = {}) {
  const { userId, redirectToSignIn } = await auth()

  return {
    userId,
    redirectToSignIn,
    user: allData && userId != null ? await getUserWithFallback(userId) : undefined,
  }
}

async function getUser(id: string) {
  "use cache"
  cacheTag(getUserIdTag(id))

  return db.query.UserTable.findFirst({
    where: eq(UserTable.id, id),
  })
}

async function getUserWithFallback(id: string) {
  const existing = await getUser(id)
  if (existing) return existing

  const clerkUser = await currentUser()
  if (!clerkUser) return null

  const email =
    clerkUser.emailAddresses.find(
      e => e.id === clerkUser.primaryEmailAddressId
    )?.emailAddress ?? clerkUser.emailAddresses[0]?.emailAddress

  if (!email) return null

  const name =
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ").trim() ||
    clerkUser.username ||
    "User"

  await upsertUser(
    {
      id: clerkUser.id,
      email,
      name,
      imageUrl: clerkUser.imageUrl || "",
    },
    { revalidate: false }
  )

  return getUser(id)
}
