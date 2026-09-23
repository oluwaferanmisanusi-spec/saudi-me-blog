import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "./component/SiteShell";
import ScrollToTopButton from "./component/ScrollToTopButton";
import Footer from "./component/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Saudi Arabia e-Visa",
    template: "%s | Saudi Arabia e-Visa", // child pages can just set a short title, this appends the site name
  },
  description: "The easiest way to get your Saudi Arabia e-Visa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-full flex flex-col ">
        <SiteShell footer={<Footer />}>{children}</SiteShell>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
