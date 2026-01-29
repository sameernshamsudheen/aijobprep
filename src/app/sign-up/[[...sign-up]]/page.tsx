"use client"
import { SignUp } from "@clerk/nextjs"
import { usePathname } from "next/navigation"

export default function SignUpPage() {
  const path = usePathname();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <SignUp routing="path" path={path ?? undefined} />
    </div>
  )
}
