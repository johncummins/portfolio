import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "John Cummins - Frontend Developer",
  description:
    "Frontend Developer from the UK specializing in React, UI Design, and Performance optimization.",
  openGraph: {
    title: "John Cummins - Frontend Developer",
    description:
      "Frontend Developer from the UK specializing in React, UI Design, and Performance optimization.",
    url: "https://johncummins.dev",
    siteName: "John Cummins Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body
        className="font-sans antialiased bg-slate-50"
        style={{
          fontFamily:
            "var(--font-work-sans), ui-sans-serif, system-ui, sans-serif",
        }}>
        {children}
      </body>
    </html>
  );
}
