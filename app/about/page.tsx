'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
<main className="bg-white text-gray-800 pt-40">
      {/* Navbar */}
  

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-pink-700 text-center mb-4">من نحن</h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            اكتشف الوكالة المثالية لتحقيق أحلامك السفرية
          </p>
          <div className="relative w-full mb-6 rounded-lg overflow-hidden">
  <Image
    src="/images/about.png"
    alt="صفاء هوليدي"
    width={800}
    height={400}
    objectFit="contain"
    className="w-full h-full object-contain"
  />
</div>
        </div>

        {/* About Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">وكالة صفاء هوليدي للسفر والسياحة</h2>
          <p className="text-lg text-gray-700 mb-4">
            تعتبر وكالة صفاء هوليدي للسفر والسياحة شريكك المثالي لتحقيق تجربة سفر لا تُنسى، حيث نقدم لك
            خدمات متميزة تتناسب مع احتياجاتك.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            سواء كنت تبحث عن رحلة استرخاء في وجهات استوائية، أو مغامرة ثقافية في مدن تاريخية، فمن خلال
            موقعنا الإلكتروني، يمكنك استكشاف مجموعة متنوعة من البرامج السياحية المصممة خصيصًا لك.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="border rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-pink-700 mb-4">حجوزات الفنادق</h3>
            <p className="text-gray-600">نقدم لك خيارات متعددة من فنادق فاخرة إلى أماكن إقامة مريحة تناسب جميع الميزانيات.</p>
          </div>
          <div className="border rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-pink-700 mb-4">تنظيم الرحلات</h3>
            <p className="text-gray-600">نساعدك في تصميم برنامج سياحي مخصص وفق اهتماماتك ويشمل معالم سياحية وتجارب ثقافية.</p>
          </div>
          <div className="border rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-pink-700 mb-4">تأشيرات السفر</h3>
            <p className="text-gray-600">نقدم خدمات مساعدة في الحصول على التأشيرات اللازمة للسفر إلى وجهتك المفضلة.</p>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="fixed right-4 bottom-4">
          <Link href="https://wa.me/249127525334?text=مرحبًا، أود الاستفسار عن السياحة العلاجية">
            <div className="flex items-center justify-center p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition">
              <FaWhatsapp size={28} />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
     
    </main>
  );
}
