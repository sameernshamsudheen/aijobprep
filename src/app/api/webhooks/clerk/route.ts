import { deleteUser, upsertUser } from "@/features/users/db"
import { verifyWebhook } from "@clerk/nextjs/webhooks"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const event = await verifyWebhook(request)

    
    console.log("Clerk webhook verified", {
      type: event.type,
      id: event.data?.id,
      svixId: request.headers.get("svix-id"),
      svixTimestamp: request.headers.get("svix-timestamp"),
      svixSignature: request.headers.get("svix-signature"),
    })

    switch (event.type) {
      case "user.created":
      case "user.updated":
        const clerkData = event.data
        const email =
          clerkData.email_addresses.find(
            e => e.id === clerkData.primary_email_address_id
          )?.email_address ?? clerkData.email_addresses[0]?.email_address

        const name =
          [clerkData.first_name, clerkData.last_name]
            .filter(Boolean)
            .join(" ")
            .trim() ||
          clerkData.username ||
          "User"

        if (email == null) {
          return new Response("No primary email found", { status: 400 })
        }

        await upsertUser({
          id: clerkData.id,
          email,
          name,
          imageUrl: clerkData.image_url,
        })

        break
      case "user.deleted":
        if (event.data.id == null) {
          return new Response("No user ID found", { status: 400 })
        }

        await deleteUser(event.data.id)
        break
    }
  } catch (error) {
    console.error("Clerk webhook error", error)
    return new Response("Invalid webhook", { status: 400 })
  }

  return new Response("Webhook received", { status: 200 })
}
