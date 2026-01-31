import { NextResponse } from "next/server"

export async function POST(request: Request) {
  void request
  return NextResponse.json(
    { error: "Scheduled interviews are disabled" },
    { status: 410 }
  )
}
