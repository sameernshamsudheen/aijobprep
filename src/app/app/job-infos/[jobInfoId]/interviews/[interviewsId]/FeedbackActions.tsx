"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ActionButton } from "@/components/ui/action-button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MarkdownRenderer } from "@/components/MarkdownRenderer"

export function FeedbackActions({
  interviewId,
  feedback,
}: {
  interviewId: string
  feedback: string | null
}) {
  const router = useRouter()
  const [currentFeedback, setCurrentFeedback] = useState(feedback)

  async function generateFeedback() {
    const res = await fetch(`/api/interviews/${interviewId}/feedback`, {
      method: "POST",
    })

    if (!res.ok) {
      let message = "Failed to generate feedback"
      try {
        const data = await res.json()
        if (typeof data?.message === "string") message = data.message
      } catch {
        // ignore parse errors
      }
      return { error: true, message }
    }

    try {
      const data = await res.json()
      if (typeof data?.feedback === "string") {
        setCurrentFeedback(data.feedback)
      }
    } catch {
      // ignore parse errors
    }

    router.refresh()
    return { error: false }
  }

  if (currentFeedback == null) {
    return <ActionButton action={generateFeedback}>Generate Feedback</ActionButton>
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Feedback</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-3xl lg:max-w-4xl max-h-[calc(100%-2rem)] overflow-y-auto flex flex-col">
        <DialogTitle>Feedback</DialogTitle>
        <MarkdownRenderer>{currentFeedback}</MarkdownRenderer>
      </DialogContent>
    </Dialog>
  )
}
