"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center text-center px-6 py-16">
      <Image src="/images/logo.png" alt="شعار صفاء هوليدي" width={120} height={120} className="mb-4" />
      <h1 className="text-4xl font-bold text-blue-900 mb-4">مرحبًا بك في صفاء هوليدي</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        نقدم لك أفضل خدمات السفر والسياحة والتأشيرات بكل احترافية وراحة.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/visa">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">خدمات التأشيرات</button>
        </Link>
        <Link href="/about">
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100">تعرف علينا</button>
        </Link>
        <Link href="/services">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">خدماتنا</button>
        </Link>
      </div>
    </main>
  );
}