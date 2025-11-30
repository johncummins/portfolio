import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { JOB_TITLE } from "./data/constants";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const description = `${JOB_TITLE} based in Cambridge, UK. I’m passionate about creating intuitive, performant user interfaces and exploring new frontend technologies.`;

export const metadata: Metadata = {
  title: `John Cummins - ${JOB_TITLE}`,
  description: description,
  openGraph: {
    title: `John Cummins - ${JOB_TITLE}`,
    description: description,
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
