import './globals.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفاء هوليدي - Safaa Holiday",
  description: "خدمات السفر والسياحة والتأشيرات والحج والعمرة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="google-site-verification" content="googled7f9e7070bfbb89b.html" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
