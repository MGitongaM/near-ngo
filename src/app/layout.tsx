import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/general/Footer";
import Navigation from "@/components/general/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url = "/images/Near Open Graph.png";

export const metadata: Metadata = {
  title: "NEAR",
  description:
    "At NEAR, we are dedicated to reimagining and reshaping the global aid system to ensure it truly serves and support local civil society in the Global South.",
  openGraph: {
    images: {
      width: 1200,
      height: 627,
      url,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
