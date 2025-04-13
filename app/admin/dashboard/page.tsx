

import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pt-32 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-pink-700">لوحة تحكم المدير</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Link href="/admin/study-abroad">
          <div className="rounded-xl border border-blue-200 p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition-all">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">طلبات الدراسة بالخارج</h2>
            <p className="text-sm text-gray-600">استعرض وقم بإدارة طلبات الطلاب للبرامج الدراسية.</p>
          </div>
        </Link>

        <Link href="/admin/medical-tourism">
          <div className="rounded-xl border border-pink-200 p-6 bg-white shadow-sm hover:shadow-md hover:border-pink-400 cursor-pointer transition-all">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">طلبات السياحة العلاجية</h2>
            <p className="text-sm text-gray-600">استعرض الطلبات المرسلة من العملاء وتابع حالتها.</p>
          </div>
        </Link>

        <Link href="/admin/settings">
          <div className="rounded-xl border border-gray-300 p-6 bg-white shadow-sm hover:shadow-md hover:border-gray-400 cursor-pointer transition-all col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">إعدادات الموقع</h2>
            <p className="text-sm text-gray-600">تحكم في إعدادات الموقع العامة والمحتوى المعروض.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
