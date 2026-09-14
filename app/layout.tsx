import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "./component/SiteShell";
import ScrollToTopButton from "./component/ScrollToTopButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saudi Arabia e-Visa",
  description: "The Easiest Way To Get Your Saudi Arabia e-Visa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-full flex flex-col min-w-fit">
        <SiteShell>{children}</SiteShell>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
