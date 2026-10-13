import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franklyn Ngurukwem | Data Analyst & Python Developer",
  description: "Explore Franklyn Ngurukwem's projects, data analytics experience, Python development work, and technical skills.",
  openGraph: {
    title: "Franklyn Ngurukwem | Portfolio",
    description: "Data analytics, Python development, and practical technology projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
