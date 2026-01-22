import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import ThemeToggle from "@/components/theme-toggle";
import type { UserTable } from "@/drizzle/schema/user";

type AppNavbarProps = {
  user: typeof UserTable.$inferSelect;
};

export default function AppNavbar({ user }: AppNavbarProps) {
  return (
    <header className="border-b h-header">
      <div className="container flex h-full flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-6">
          <Link href="/app" className="text-lg font-semibold">
            AI Job Prep
          </Link>
          <nav className="flex gap-4 text-sm text-slate-600">
            <Link href="/app">Dashboard</Link>
            <Link href="/onboarding">Onboarding</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {user ? (
            <>
              <span className="text-sm font-medium">{user.name}</span>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
