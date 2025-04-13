'use client';

import React from 'react';
import Link from 'next/link';

const countries = [
  { name: 'تركيا', slug: 'turkey' },
  { name: 'تونس', slug: 'tunisia' },
  { name: 'تايلند', slug: 'thailand' },
  { name: 'الهند', slug: 'india' },
];

export default function MedicalTourismPage() {
  return (
    <main className="pt-40 max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-6">
        السياحة العلاجية
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        خدمات طبية متقدمة مع رعاية متكاملة تشمل السفر، الإقامة، والمتابعة، في أفضل الدول المتخصصة.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/medical-tourism/${country.slug}`}
            className="border rounded-xl shadow p-6 text-center hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-pink-700">{country.name}</h2>
            <p className="text-sm text-gray-600 mt-2">
              تخصصات متنوعة وخدمات طبية متقدمة
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
