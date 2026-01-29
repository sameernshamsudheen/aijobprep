"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { scheduledInterviewSchema } from "@/features/scheduled-interviews/schema"
import { createScheduledInterview } from "@/features/scheduled-interviews/action"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { LoadingSwap } from "@/components/ui/loading-swap"
import { Textarea } from "@/components/ui/textarea"

type ScheduledInterviewFormData = z.infer<typeof scheduledInterviewSchema>

export function ScheduledInterviewForm({ jobInfoId }: { jobInfoId: string }) {
  const router = useRouter()
  const form = useForm<ScheduledInterviewFormData>({
    resolver: zodResolver(scheduledInterviewSchema),
    defaultValues: {
      candidateName: "",
      candidateEmail: "",
      scheduledAt: "",
      timezone: "",
      durationMinutes: 30,
      location: "",
    },
  })

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (timezone) {
      form.setValue("timezone", timezone)
    }
  }, [form])

  async function onSubmit(values: ScheduledInterviewFormData) {
    const scheduledDate = new Date(values.scheduledAt)
    const payload = {
      ...values,
      scheduledAt: Number.isNaN(scheduledDate.getTime())
        ? values.scheduledAt
        : scheduledDate.toISOString(),
    }

    const res = await createScheduledInterview(jobInfoId, payload)
    if (res.error) {
      toast.error(res.message)
      return
    }

    router.push(`/app/job-infos/${jobInfoId}/interviews/scheduled`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="candidateName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Candidate name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="candidateEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Candidate email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          <FormField
            control={form.control}
            name="scheduledAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Scheduled time</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} className="bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timezone</FormLabel>
                <FormControl>
                  <Input placeholder="America/New_York" {...field} className="bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="durationMinutes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (minutes)</FormLabel>
                <FormControl>
                  <Input type="number" min={1} {...field} className="bg-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location / meeting link</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value ?? ""}
                  placeholder="https://meet.google.com/..."
                  className="bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          <LoadingSwap isLoading={form.formState.isSubmitting}>
            Schedule interview
          </LoadingSwap>
        </Button>
      </form>
    </Form>
  )
}
