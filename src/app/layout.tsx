import "./globals.css";

import type { ReactNode } from "react";
import { Outfit } from "next/font/google";
import ClerkProvider from "../services/clerk/components/ClerkProvider";
import ThemeProvider from "../providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-sans",
});

export const metadata = {
  title: "AI Job Prep",
  description: "AI Job Prep",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.variable}>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
