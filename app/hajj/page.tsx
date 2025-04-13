'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HajjUmrahPage() {
  return (
<main className="bg-white text-gray-800 pt-40">
     

      {/* Hero Banner */}
      <div className="relative w-full h-96">
        <Image
          src="/images/hajj-banner.jpg"
          alt="الحج والعمرة"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">رحلات الحج والعمرة مع صفاء هوليدي</h1>
        </div>
      </div>

      {/* تعريف بالخدمة */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">خدمة مميزة لرحلة إيمانية</h2>
        <p className="text-lg text-center text-gray-700 mb-10">
          نُقدّم برامج متكاملة للحج والعمرة تشمل كافة الترتيبات من حجز التذاكر، والإقامة المريحة، وخدمات النقل والمرافقة، مع فريق ذو خبرة طويلة لضمان تجربة روحانية سلسة ومريحة.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">إقامة مريحة</h3>
            <p className="text-gray-600">فنادق قريبة من الحرم في مكة والمدينة مع جميع وسائل الراحة.</p>
          </div>
          <div className="p-6 border rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">نقل حديث وآمن</h3>
            <p className="text-gray-600">مركبات مكيفة وحديثة للتنقل بين المشاعر المقدسة.</p>
          </div>
          <div className="p-6 border rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">مرافقة وإشراف</h3>
            <p className="text-gray-600">مرشدون ذوو كفاءة عالية لمساعدتك في أداء المناسك بكل يسر.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="https://wa.me/249127525334?text=السلام عليكم، أود الاستفسار عن باقات الحج والعمرة"
            target="_blank"
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
          >
            استفسر عبر واتساب
          </Link>

          
        </div>
      </section>

      
    </main>
  );
}
