'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const countryData: Record<string, any> = {
  egypt: {
    title: 'مصر',
    description:
      'توفر مصر بيئة دراسية بتكاليف مناسبة، وفيها جامعات مرموقة معترف بها إقليميًا ودوليًا.',
    currency: 'الجنيه المصري',
    rate: '1 دولار ≈ 30.85 الجنيه المصري',
  },
  turkey: {
    title: 'تركيا',
    description:
      'تركيا بتقدّم تعليم عالي الجودة، خاصة في التخصصات الطبية والهندسية، وفرص منح متعددة.',
    currency: 'الليرة التركية',
    rate: '1 دولار ≈ 32.20 ليرة تركية',
  },
  malaysia: {
    title: 'ماليزيا',
    description:
      'جامعات ماليزيا بتتميز بتنوع التخصصات، وكفاءة التعليم، مع بيئة متعددة الثقافات.',
    currency: 'الرينغيت الماليزي',
    rate: '1 دولار ≈ 4.70 رينغيت',
  },
  india: {
    title: 'الهند',
    description:
      'الهند عندها جامعات قوية خصوصًا في الطب والهندسة، واللغة الإنجليزية لغة أساسية.',
    currency: 'الروبية الهندية',
    rate: '1 دولار ≈ 83.30 روبية هندية',
  },
};

export default function CountryStudyPage() {
  const { slug } = useParams();
  const country = countryData[slug as string];

  if (!country) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">عذرًا</h1>
        <p className="text-gray-600">لم يتم العثور على معلومات لهذه الدولة.</p>
        <Link href="/study-abroad" className="text-pink-600 underline mt-4 block">
          الرجوع لصفحة الدراسة بالخارج
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
        الدراسة في {country.title}
      </h1>

      <p className="text-gray-700 text-lg mb-6">{country.description}</p>

      <div className="bg-gray-50 rounded-xl p-6 shadow mb-6">
        <p className="text-gray-600 text-base">
          العملة المحلية: <strong>{country.currency}</strong>
        </p>
        <p className="text-gray-600 text-base">
          تعادل تقريبًا: <strong>{country.rate}</strong>
        </p>
      </div>

      <div className="text-right mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">متطلبات التقديم:</h2>
        <ul className="text-sm text-gray-700 list-disc list-inside">
          <li>صورة من الشهادة الجامعية</li>
          <li>تحديد الرغبة الدراسية</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="https://wa.me/249127525334?text=مرحبًا، لدي استفسار بخصوص الدراسة في الخارج"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
          target="_blank"
        >
          تواصل معنا عبر واتساب
        </Link>

        {/* ✅ تم استبدال رابط Google Form هنا */}
        <Link
          href="/study-abroad/apply"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition"
        >
          قدم طلبك الآن
        </Link>
      </div>
    </main>
  );
}
