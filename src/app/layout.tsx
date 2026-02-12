import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engr. Muhammad Akram Ansari | Professional Chemical Engineer",
  description:
    "Professional Chemical Engineer with 30+ years of experience in petrochemical, resin, fertilizer, and pharmaceutical industries. PEC Registered (CHEM/02752). Expert in plant operations, utilities management, commissioning, and process engineering.",
  keywords: [
    "Chemical Engineer",
    "Process Engineer",
    "PEC Registered",
    "Pakistan",
    "Utilities Management",
    "Plant Operations",
    "Commissioning",
    "HAZOP",
    "Process Design",
  ],
  authors: [{ name: "Muhammad Akram Ansari" }],
  openGraph: {
    title: "Engr. Muhammad Akram Ansari | Professional Chemical Engineer",
    description:
      "Professional Chemical Engineer with 30+ years of experience. PEC Registered (CHEM/02752).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
