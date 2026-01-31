import { notFound } from "next/navigation"

export default async function ScheduleInterviewPage({
  params,
}: {
  params: Promise<{ jobInfoId: string }>
}) {
  void params
  return notFound()
}
