import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engr. Muhammad Akram Ansari | Process & Operations Manager",
  description:
    "Process & Operations Manager and PEC-registered Chemical Engineer (CHEM/02752) with 30+ years in petrochemicals, resins, fertilizers and pharma/API, including 20+ years managing phthalic anhydride plants. Plant operations, process engineering, process safety (HAZOP, SIL, ESD), DCS and commissioning.",
  keywords: [
    "Process & Operations Manager",
    "Chemical Engineer",
    "Process Engineer",
    "PEC Registered",
    "Pakistan",
    "Plant Operations",
    "Phthalic Anhydride",
    "Process Safety",
    "HAZOP",
    "SIL",
    "ESD",
    "DCS",
    "Yokogawa Centum 3000",
    "SUPCON",
    "Commissioning",
    "Process Design",
    "Utilities Management",
  ],
  authors: [{ name: "Muhammad Akram Ansari" }],
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Engr. Muhammad Akram Ansari | Process & Operations Manager",
    description:
      "Process & Operations Manager with 30+ years in petrochemical, resin, fertilizer and pharma/API plants. PEC Registered (CHEM/02752).",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 500,
        height: 500,
        alt: "Engr. Muhammad Akram Ansari - Professional Chemical Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Muhammad Akram Ansari | Process & Operations Manager",
    description:
      "Process & Operations Manager with 30+ years in petrochemical, resin, fertilizer and pharma/API plants. PEC Registered (CHEM/02752).",
    images: ["/og-image.png"],
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
