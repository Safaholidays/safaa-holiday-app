'use client';

import Link from 'next/link';

const honeymoonDestinations = [
  { name: 'المالديف', slug: 'maldives', image: '/images/maldives.jpg' },
  { name: 'سيشل', slug: 'seychelles', image: '/images/seychelles.jpg' },
  { name: 'زنجبار', slug: 'zanzibar', image: '/images/zanzibar.jpg' },
  { name: 'إندونيسيا (بالي)', slug: 'indonesia', image: '/images/indonesia.jpg' },
  { name: 'الإمارات', slug: 'uae', image: '/images/uae.jpg' },
  { name: 'السعودية', slug: 'saudi', image: '/images/saudi.jpg' },
  { name: 'إثيوبيا', slug: 'ethiopia', image: '/images/ethiopia.jpg' },
  { name: 'كينيا', slug: 'kenya', image: '/images/kenya.jpg' },
];

export default function HoneymoonPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
       
        المتصفح لا يدعم تشغيل الفيديو.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/40 z-10" />

      {/* Content */}
      <main className="relative z-20 pt-40 px-4 text-black">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          باقات شهر العسل
        </h1>
        <p className="text-center text-black mb-8">
          وجهات رومانسية مختارة خصيصاً لتخلي بداية حياتكم الزوجية مليانة بالذكريات الساحرة.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {honeymoonDestinations.map((dest, index) => (
            <div key={index} className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-md overflow-hidden">
              <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-pink-700 mb-2">{dest.name}</h2>
                <Link href={`/honeymoon/${dest.slug}`}>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">
                    لمزيد من التفاصيل
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
