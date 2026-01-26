import ReactMarkdown from "react-markdown"

import { cn } from "@/lib/utils"

type MarkdownRendererProps = {
  children: string
  className?: string
}

export function MarkdownRenderer({
  children,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={cn("prose max-w-none text-foreground", className)}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
