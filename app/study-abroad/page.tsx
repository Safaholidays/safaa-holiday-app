'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const countries = [
  { name: 'تركيا', image: '/images/flags/turkey.png', slug: 'turkey' },
  { name: 'ماليزيا', image: '/images/flags/malaysia.png', slug: 'malaysia' },
  { name: 'مصر', image: '/images/flags/egypt.png', slug: 'egypt' },
  { name: 'الهند', image: '/images/flags/india.png', slug: 'india' },
];

export default function StudyAbroadPage() {
  return (
   <main className="bg-white text-gray-800 pt-40">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-6">
        الدراسة بالخارج
      </h1>

      <p className="text-lg text-gray-700 text-center mb-8">
        فرص مميزة للدراسة في جامعات عالمية معترف بها — في دول متقدمة من حيث التعليم والتقنية، تساعدك على بناء مستقبل مهني واعد.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-6">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/study-abroad/${country.slug}`}
            className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-md transition block"
          >
            <div className="relative w-full h-40">
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="py-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{country.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center max-w-xl mx-auto mb-10">
        برامج جامعية، ماجستير، ودورات تخصصية بمصاريف ميسّرة وفرص منحة تشمل دولًا متعددة.
      </p>

      <div className="text-center">
        <Link
          href="https://wa.me/249127525334?text=مرحبًا، أريد الاستفسار عن الدراسة بالخارج"
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
          target="_blank"
        >
          تواصل معنا عبر واتساب
        </Link>
      </div>
    </main>
  );
}