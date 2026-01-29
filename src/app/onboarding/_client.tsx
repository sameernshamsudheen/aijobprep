"use client"

import { getUser } from "@/features/users/actions"
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export function OnboardingClient({ userId }: { userId: string }) {
  const router = useRouter()
  const attemptsRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    async function poll() {
      attemptsRef.current += 1
      const user = await getUser(userId)
      if (user != null) {
        router.replace("/app")
        return
      }

      if (attemptsRef.current >= 20) {
        setTimedOut(true)
        return
      }

      timeoutRef.current = setTimeout(poll, 1500)
    }

    poll()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [userId, router])

  return (
    <div className="flex flex-col items-center gap-4">
      <Loader2Icon className="animate-spin size-24" />
      {timedOut ? (
        <p className="text-sm text-muted-foreground">
          Still setting up your account. Please refresh in a moment.
        </p>
      ) : null}
    </div>
  )
}
