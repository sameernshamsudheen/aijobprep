import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { PricingTable } from "@/services/clerk/components/PricingTable";

export default function HomePage() {
  return (
    <>
      <main className="flex items-center gap-4 p-6">
        <SignInButton />
        <UserButton />
        <ThemeToggle />
      </main>
      <div>
        <PricingTable />
      </div>
    </>
  );
}
