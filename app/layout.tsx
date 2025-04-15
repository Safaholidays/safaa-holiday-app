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
        <<meta name="google-site-verification" content="42kU1SCC-NPYJfTv_kbhf7FcQH5Wb8Jg6lPkC4tCSc4" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
