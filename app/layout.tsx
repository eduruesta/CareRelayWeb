import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://familycarerelay.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CareRelay — Family caregiving, coordinated",
  description:
    "CareRelay helps the whole family know what happened, what's left to do, and who's in charge. A shared timeline, care plan, and handoff summary for coordinating the care of a loved one.",
  openGraph: {
    title: "CareRelay — Family caregiving, coordinated",
    description:
      "CareRelay helps the whole family know what happened, what's left to do, and who's in charge.",
    url: SITE_URL,
    siteName: "CareRelay",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
