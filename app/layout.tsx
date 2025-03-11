import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local";
import "./globals.css"

const berserker = localFont({
  src: "../public/fonts/Berserker.otf",
  variable: "--font-berserker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HackMol 6.0 - Punjab's Biggest Hackathon",
  description:
    "HackMol 6.0 is Punjab's premier 36-hour hackathon, bringing together top developers, innovators, and tech enthusiasts to solve real-world challenges in AI, Web3, IoT, and more. Compete for ₹2L+ in prizes, network with industry experts, and showcase your skills in a high-energy, hybrid-format competition.",
  keywords: [
    "HackMol 6.0",
    "Hackathon",
    "AI",
    "Web3",
    "IoT",
    "Coding Competition",
    "Developers",
    "Punjab Tech Event",
    "NIT Jalandhar",
    "Software Innovation",
  ],
  authors: [{ name: "DSC NIT Jalandhar", url: "https://hackmol.com" }],
  openGraph: {
    title: "HackMol 6.0 - Punjab's Biggest Hackathon",
    description:
      "HackMol 6.0 is Punjab's premier 36-hour hackathon, bringing together top developers, innovators, and tech enthusiasts to solve real-world challenges in AI, Web3, IoT, and more. Compete for ₹2L+ in prizes, network with industry experts, and showcase your skills in a high-energy, hybrid-format competition.",
    url: "https://hackmol.com",
    siteName: "HackMol 6.0",
    images: [{ url: "https://hackmol.com/banner.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackMol 6.0 - Punjab's Biggest Hackathon",
    description:
      "Join HackMol 6.0, Punjab's leading hackathon, to tackle AI, Web3, and IoT challenges. Win ₹2L+ in prizes and connect with top mentors!",
    images: ["https://hackmol.com/banner.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={berserker.variable}>
        {children}
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}



import './globals.css'