'use client';

import Link from 'next/link';

const visaCountries = [
  { name: 'كينيا', slug: 'kenya', flag: '/images/flags/kenya.png' },
  { name: 'يوغندا', slug: 'uganda', flag: '/images/flags/uganda.png' },
  { name: 'تنزانيا', slug: 'tanzania', flag: '/images/flags/tanzania.png' },
  { name: 'رواندا', slug: 'rwanda', flag: '/images/flags/rwanda.png' },
  { name: 'جنوب السودان', slug: 'south-sudan', flag: '/images/flags/south-sudan.png' },
  { name: 'إثيوبيا', slug: 'ethiopia', flag: '/images/flags/ethiopia.png' },
  { name: 'الكاميرون', slug: 'cameroon', flag: '/images/flags/cameroon.png' },
  { name: 'نيجيريا', slug: 'nigeria', flag: '/images/flags/nigeria.png' },
  { name: 'موريتانيا', slug: 'mauritania', flag: '/images/flags/mauritania.png' },
];

export default function VisaPage() {
  return (
    <main className="bg-white text-gray-800 pt-40">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">خدمات التأشيرات</h1>
        <p className="text-center text-gray-600 mb-8">اختر الدولة التي ترغب في التقديم لها:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {visaCountries.map((country, index) => (
            <Link key={index} href={`/visa/${country.slug}`}>
              <div className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
                <div className="h-28 bg-gray-200">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center py-3">
                  <h2 className="text-blue-700 font-semibold text-lg">{country.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
