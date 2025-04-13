'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const visaDetails = {
  kenya: {
    name: 'كينيا',
    description: 'نُقدّم خدمات تأشيرة كينيا بشكل سريع وموثوق مع أقل المتطلبات.',
    image: '/images/flags/kenya.png',
  },
  uganda: {
    name: 'يوغندا',
    description: 'احصل على تأشيرة يوغندا بسهولة عبر صفاء هوليدي.',
    image: '/images/flags/uganda.png',
  },
  tanzania: {
    name: 'تنزانيا',
    description: 'استكشف الحياة البرية في تنزانيا من خلال تأشيرتك معنا.',
    image: '/images/flags/tanzania.png',
  },
  rwanda: {
    name: 'رواندا',
    description: 'رحلات ساحرة تنتظرك في رواندا بعد الحصول على تأشيرتك معنا.',
    image: '/images/flags/rwanda.png',
  },
  'south-sudan': {
    name: 'جنوب السودان',
    description: 'خدمات التأشيرة لجنوب السودان بطريقة موثوقة وسريعة.',
    image: '/images/flags/south-sudan.png',
  },
  ethiopia: {
    name: 'إثيوبيا',
    description: 'سافر إلى إثيوبيا بتأشيرة مضمونة عبر صفاء هوليدي.',
    image: '/images/flags/ethiopia.png',
  },
  cameroon: {
    name: 'الكاميرون',
    description: 'نساعدك في استخراج تأشيرة الكاميرون بكل سهولة.',
    image: '/images/flags/cameroon.png',
  },
  nigeria: {
    name: 'نيجيريا',
    description: 'خدمة موثوقة لاستخراج تأشيرة نيجيريا.',
    image: '/images/flags/nigeria.png',
  },
  mauritania: {
    name: 'موريتانيا',
    description: 'وفر وقتك واستخرج تأشيرتك إلى موريتانيا معنا.',
    image: '/images/flags/mauritania.png',
  },
};

export default function VisaCountryPage() {
  const params = useParams();
  const { slug } = params;
  const country = visaDetails[slug];

  if (!country) {
    return <div className="p-6 text-center">لم يتم العثور على معلومات هذه الدولة.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 pt-40">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
        تأشيرة {country.name}
      </h1>

      <div className="text-center mb-6">
        <Image
          src={country.image}
          alt={country.name}
          width={150}
          height={100}
          className="mx-auto"
        />
      </div>

      <p className="text-gray-700 text-lg text-center mb-8">
        {country.description}
      </p>

      <div className="text-center">
        <Link
          href="https://wa.me/249127525334?text=مرحبًا، أود التقديم لتأشيرة"
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          تواصل معنا عبر واتساب
        </Link>
      </div>
    </main>
  );
}
