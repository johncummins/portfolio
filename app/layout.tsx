import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John Cummins - Frontend Developer",
  description:
    "Frontend Developer from the UK specializing in React, UI Design, and Performance optimization.",
  keywords: [
    "Frontend Developer",
    "React",
    "UI Design",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "John Cummins" }],
  creator: "John Cummins",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johncummins.dev",
    title: "John Cummins - Frontend Developer",
    description:
      "Frontend Developer from the UK specializing in React, UI Design, and Performance optimization.",
    siteName: "John Cummins Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Cummins - Frontend Developer",
    description:
      "Frontend Developer from the UK specializing in React, UI Design, and Performance optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
