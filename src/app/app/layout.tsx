import { redirect } from "next/navigation";

import { getCurrentUser } from "@/services/lib/getcurrentUser";
import AppNavbar from "@/components/app-navbar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, user } = await getCurrentUser({ allData: true });
  if (userId ===null) {
    redirect("/sign-in");
  }

  if (!user) {
    redirect("/onboarding");
  }

  return (
    <>
      <AppNavbar user={user} />
      {children}
    </>
  );
}
