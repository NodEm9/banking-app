export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import { IBM_Plex_Serif } from 'next/font/google'
import "./globals.css";


const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Orientis",
  description: "Orientis is a modern banking app for everyone everywhere.",
  icons: '/icons/orientis-2.svg', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
