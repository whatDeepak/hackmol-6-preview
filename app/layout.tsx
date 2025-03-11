import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css"

const berserker = localFont({
  src: "../public/fonts/Berserker.otf",
  variable: "--font-berserker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HackMol 6.0 - Hack the Realms",
  description: "Join HackMol 6.0 and hack the realms",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={berserker.variable}>
        {children}
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}



import './globals.css'