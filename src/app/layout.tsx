"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/components/Layout/Curve/style.scss"

import { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'SBU KCF',
//   description: 'Announcements',
// }

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#222428]"}>
          {children}
      </body>
    </html>
  );
}

