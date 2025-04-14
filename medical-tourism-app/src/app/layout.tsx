

import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-geist-sans", 
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "صفاء هوليدي - Safaa Holiday",
  description: "أفضل العروض السياحية، التأشيرات، السياحة العلاجية والدراسة بالخارج.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
