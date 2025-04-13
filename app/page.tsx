'use client';

import Link from 'next/link';

export default function Home() {
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
        <source src="/videos/zanzibar-beach.mp4" type="video/mp4" />
        المتصفح لا يدعم تشغيل الفيديو.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 py-40 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">مرحباً بك في صفاء هوليدي</h1>
          <p className="text-lg max-w-xl mx-auto">
            خدمات متكاملة للسفر والسياحة، التأشيرات، السياحة العلاجية، الدراسة بالخارج، الحج والعمرة والمزيد.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="/hajj">
              <button className="w-full bg-white/80 text-pink-700 px-6 py-4 rounded-xl shadow hover:bg-white transition text-lg font-semibold">
                خدمات الحج والعمرة
              </button>
            </Link>

            <Link href="/visa">
              <button className="w-full bg-pink-600 text-white px-6 py-4 rounded-xl shadow hover:bg-pink-700 transition text-lg font-semibold">
                التأشيرات السياحية
              </button>
            </Link>

            <Link href="/medical-tourism">
              <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-4 rounded-xl shadow-lg hover:opacity-90 transition text-lg font-semibold">
                السياحة العلاجية
              </button>
            </Link>

            <Link href="/study-abroad">
              <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl shadow hover:bg-blue-700 transition text-lg font-semibold">
                الدراسة بالخارج
              </button>
            </Link>

            <Link href="/honeymoon">
              <button className="w-full bg-purple-600 text-white px-6 py-4 rounded-xl shadow hover:bg-purple-700 transition text-lg font-semibold">
                باقات شهر العسل
              </button>
            </Link>

            <Link href="/about">
              <button className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl shadow hover:bg-gray-900 transition text-lg font-semibold">
                من نحن
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tawk.to Chat Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/9735168fb761df7339ecc585b3c10dc393b06ec8/1hs31jlt5';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      ></script>
    </div>
  );
}
