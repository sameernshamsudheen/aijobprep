import { experienceLevelEnum } from "@/drizzle/schema"

type ExperienceLevel = "junior" | "mid-level" | "senior"

export function formatExperienceLevel(level: ExperienceLevel) {
  switch (level) {
    case "junior":
      return "Junior"
    case "mid-level":
      return "Mid-Level"
    case "senior":
      return "Senior"
    default:
      throw new Error(`Unknown experience level: ${level satisfies never}`)
  }
}