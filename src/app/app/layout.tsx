import { redirect } from "next/navigation";

import { getCurrentUser } from "@/services/lib/getcurrentUser";
import AppNavbar from "@/components/app-navbar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, user } = await getCurrentUser({ allData: true });
  if (userId == null) {
    redirect("/");
  }

  if (user == null) {
    redirect("/onboarding");
  }

  return (
    <>
      <AppNavbar user={user} />
      {children}
    </>
  );
}
