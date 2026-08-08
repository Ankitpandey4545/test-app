 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CustomCursor from "./components/CustomCursor";
import PerformanceBadge from "./components/PerformanceBadge";
import LiveChat from "./components/LiveChat";
import VisitorCounter from "./components/VisitorCounter";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gigoria Technologies",
  description: "Digital Solutions for Your Business",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Floating Widgets */}
        <CustomCursor />
        <WhatsAppWidget />
        <PerformanceBadge />
        <LiveChat />
        <VisitorCounter />
        
      </body>
    </html>
  );
}