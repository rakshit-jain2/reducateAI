import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "EduVerse University | Shape Your Future with World-Class Education",
  description:
    "EduVerse University offers world-class education with 50+ programs, expert faculty, and 95% placement rate. Join 20,000+ students shaping their futures.",
  keywords: [
    "university",
    "education",
    "online learning",
    "university admissions",
    "higher education",
  ],
  openGraph: {
    title: "EduVerse University",
    description:
      "Shape Your Future with World-Class Education at EduVerse University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
