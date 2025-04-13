'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = {
  maldives: {
    title: 'المالديف',
    description: 'المالديف يا زول، دي حتة بتجنن! مويه صافية وفلل فوق البحر، رومانسية عديل كده.',
    highlights: ['جزيرة باروس', 'جزيرة ماليه', 'الغطس مع السلاحف']
  },
  seychelles: {
    title: 'سيشل',
    description: 'سيشل دي جزر فيها هدوء وجمال، مناسبة شديد للراحة والونس.',
    highlights: ['شاطئ أنسي لاتسيو', 'جزيرة براسلين', 'منتزه فالي دي ماي']
  },
  zanzibar: {
    title: 'زنجبار',
    description: 'زنجبار فيها شواطئ رملها أبيض، وأكل بحري يجنن، وكمان فيها تاريخ وأماكن تقليدية.',
    highlights: ['مدينة ستون تاون', 'شاطئ نونجوي', 'جزيرة السلاحف']
  },
  indonesia: {
    title: 'إندونيسيا (بالي)',
    description: 'بالي دي طبيعة خضرة وشلالات وجو استوائي يرد الروح، تنفع للمحبين.',
    highlights: ['أوبود', 'شلال تجينونغان', 'شاطئ كوتا']
  },
  uae: {
    title: 'الإمارات',
    description: 'دبي فيها برج خليفة والأسواق، وأبوظبي فيها الهدوء والثقافة.',
    highlights: ['برج خليفة', 'مول دبي', 'جامع الشيخ زايد']
  },
  saudi: {
    title: 'السعودية',
    description: 'السعودية فيها مكة والمدينة، وكمان أماكن جديدة للسياحة زي العلا والرياض.',
    highlights: ['جدة التاريخية', 'العلا', 'بوليفارد الرياض']
  },
  ethiopia: {
    title: 'إثيوبيا',
    description: 'بلد الجبال الخضرة والتقاليد القديمة، فيها مناظر طبيعية تخليك تقول سبحان الله.',
    highlights: ['لالبيلا', 'بحيرة تانا', 'شلالات النيل الأزرق']
  },
  kenya: {
    title: 'كينيا',
    description: 'السفاري والمغامرات في كينيا ما بتتفوت، تشوف الزراف والأسود قدامك.',
    highlights: ['ماساي مارا', 'نيروبي ناشونال بارك', 'بحيرة ناكورو']
  }
};

const galleryImages = {
  maldives: [
    '/images/maldives/mal1.jpg',
    '/images/maldives/mal2.jpg',
    '/images/maldives/mal3.jpg',
    '/images/maldives/mal4.jpg',
    '/images/maldives/mal5.jpg',
    '/images/maldives/mal6.jpg',
    '/images/maldives/mal7.jpg',
    '/images/maldives/mal8.jpg'
  ],
  seychelles: [
    '/images/seychelles/sey1.jpg',
    '/images/seychelles/sey2.jpg',
    '/images/seychelles/sey3.jpg',
    '/images/seychelles/sey4.jpg',
    '/images/seychelles/sey5.jpg',
    '/images/seychelles/sey6.jpg',
    '/images/seychelles/sey7.jpg',
    '/images/seychelles/sey8.jpg',
    '/images/seychelles/sey9.jpg',
    '/images/seychelles/sey10.jpg',
    '/images/seychelles/sey11.jpg',
  ],
  zanzibar: [
    '/images/zanzibar/znz1.jpg',
    '/images/zanzibar/znz2.jpg',
    '/images/zanzibar/znz3.jpg',
    '/images/zanzibar/znz4.jpg',
    '/images/zanzibar/znz5.jpg',
    '/images/zanzibar/znz6.jpg',
    '/images/zanzibar/znz7.jpg',
    '/images/zanzibar/znz8.jpg',
    '/images/zanzibar/znz9.jpg',
    '/images/zanzibar/znz10.jpg',
    '/images/zanzibar/znz11.jpg',
    '/images/zanzibar/znz12.jpg',
  ],
  indonesia: [
    '/images/indonesia/ind1.jpg',
    '/images/indonesia/ind2.jpg',
    '/images/indonesia/ind3.jpg',
    '/images/indonesia/ind4.jpg',
    '/images/indonesia/ind5.jpg',
    '/images/indonesia/ind6.jpg',
  ],
  uae: [
    '/images/unaited arab emarite/em1.jpg',
    '/images/unaited arab emarite/em2.jpg',
    '/images/unaited arab emarite/em3.jpg',
    '/images/unaited arab emarite/em4.jpg',
    '/images/unaited arab emarite/em5.jpg',
    '/images/unaited arab emarite/em6.jpg',
    '/images/unaited arab emarite/em7.jpg',
    '/images/unaited arab emarite/em8.jpg',
  ],
  saudi: [
    '/images/saudi/sa1.jpg',
    '/images/saudi/sa2.jpg',
    '/images/saudi/sa3.jpg',
    '/images/saudi/sa4.jpg',
    '/images/saudi/sa5.jpg',
    '/images/saudi/sa6.jpg',
    '/images/saudi/sa7.jpg',
    '/images/saudi/sa8.jpg',
    '/images/saudi/sa9.jpg',
  ],
  ethiopia: [
    '/images/ethiopia/et1.jpg',
    '/images/ethiopia/et2.jpg',
    '/images/ethiopia/et3.jpg',
    '/images/ethiopia/et4.jpg',
    '/images/ethiopia/et5.jpg',
    '/images/ethiopia/et6.jpg',
    '/images/ethiopia/et7.jpg',
    '/images/ethiopia/et8.jpg',
  ],
  kenya: [
    '/images/keynia/ke1.jpg',
    '/images/keynia/ke2.jpg',
    '/images/keynia/ke3.jpg',
    '/images/keynia/ke4.jpg',
    '/images/keynia/ke5.jpg',
    '/images/keynia/ke6.jpg',
    '/images/keynia/ke7.jpg',
    '/images/keynia/ke8.jpg',
    '/images/keynia/ke9.jpg',
  ],
};

export default function DestinationDetails({ params }) {
  const data = destinations[params.slug];
  const images = galleryImages[params.slug] || [];
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images]);

  if (!data) return <div className="p-6">الوجهة غير موجودة</div>;

  return (
    <main className="bg-white text-gray-800 pt-40 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-pink-600 drop-shadow">
          {data.title}
        </h1>

        {images.length > 0 && (
          <div className="relative w-full max-h-[450px] flex items-center justify-center mb-6">
            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow"
            >
              ‹
            </button>
            <motion.img
              key={images[currentImage]}
              src={images[currentImage]}
              alt={data.title}
              onClick={() => setLightboxOpen(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-h-[400px] object-contain rounded-xl cursor-pointer shadow-lg"
            />
            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow"
            >
              ›
            </button>
          </div>
        )}

        {lightboxOpen && (
          <div
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          >
            <img
              src={images[currentImage]}
              alt="صورة مكبرة"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{data.description}</p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">أشهر المناطق:</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {data.highlights.map((item, index) => (
            <li key={index} className="transition-transform hover:translate-x-1">
              {item}
            </li>
          ))}
        </ul>

        <Link href="https://wa.me/249127525334" target="_blank">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all shadow hover:shadow-lg">
            استفسر عبر واتساب
          </button>
        </Link>
      </div>
    </main>
  );
}
