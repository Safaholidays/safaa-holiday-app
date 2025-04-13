'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function MedicalTourismCountryPage({ params }: { params: { slug: string } }) {
  const countryNameMap: Record<string, string> = {
    turkey: 'تركيا',
    tunisia: 'تونس',
    thailand: 'تايلند',
    india: 'الهند',
  };

  const country = countryNameMap[params.slug] || 'الدولة';

  return (
    <main className="pt-48 max-w-4xl mx-auto px-4 pb-16">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-4">
        العلاج في {country}
      </h1>
      <p className="text-center text-gray-600 mb-6">
        بيئة طبية متطورة تشمل أحدث تقنيات التشخيص والعلاج تحت إشراف متخصصين.
      </p>

      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow">
        <Image
          src="/images/medical.png"
          alt="السياحة العلاجية"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <section className="bg-gray-50 p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">الوضع الصحي العام</h2>
        <p className="text-gray-700">تتميز {country} ببنية صحية قوية ومراكز متخصصة في مختلف المجالات الطبية.</p>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">التخصصات المتوفرة</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>علاج الأورام</li>
          <li>جراحات القلب</li>
          <li>العمليات التجميلية</li>
          <li>العلاج الطبيعي وإعادة التأهيل</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">المتطلبات</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>تقرير طبي من مستشفى محلي</li>
          <li>تحديد الدولة المطلوبة للعلاج</li>
        </ul>
      </section>

      <div className="flex justify-center gap-4">
        <Link
          href="https://wa.me/249127525334?text=مرحبًا، أريد الاستفسار عن السياحة العلاجية"
          target="_blank"
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
        >
          تواصل معنا
        </Link>
        <Link
          href="/medical-tourism/apply"
          className="bg-white border border-pink-600 text-pink-600 px-6 py-2 rounded-full hover:bg-pink-50 transition"
        >
          التقديم الآن
        </Link>
      </div>
    </main>
  );
}
