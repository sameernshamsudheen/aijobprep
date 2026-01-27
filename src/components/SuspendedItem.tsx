import { ReactNode, Suspense } from "react"

export function SuspendedItem<T>({
  item,
  fallback,
  result,
}: {
  item: T | Promise<T>
  fallback: ReactNode
  result: (item: T) => ReactNode
}) {
  return (
    <Suspense fallback={fallback}>
      <InnerComponent item={item} result={result} />
    </Suspense>
  )
}

async function InnerComponent<T>({
  item,
  result,
}: {
  item: T | Promise<T>
  result: (item: T) => ReactNode
}) {
  return result(await item)
}
