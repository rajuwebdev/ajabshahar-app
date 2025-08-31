import type React from "react";
import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Ajab Shahar - A Wondrous City of Songs, Poems and Conversations",
  description:
    "Explore the rich oral traditions of Bhakti, Sufi and Baul from India and beyond through songs, poems, reflections, people and films.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
