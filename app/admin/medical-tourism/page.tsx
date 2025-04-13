'use client';

import { useEffect, useState } from 'react';

interface MedicalRequest {
  id: string;
  name: string;
  email: string;
  country: string;
  message: string;
  reportUrl: string;
  createdAt: string;
}

export default function AdminMedicalTourismPage() {
  const [requests, setRequests] = useState<MedicalRequest[]>([]);

  useEffect(() => {
    // مؤقتًا - بيانات وهمية
    setRequests([
      {
        id: '1',
        name: 'أحمد علي',
        email: 'ahmed@example.com',
        country: 'تركيا',
        message: 'أحتاج لعلاج في تخصص القلب.',
        reportUrl: '/files/report1.pdf',
        createdAt: '2025-04-11',
      },
      {
        id: '2',
        name: 'سارة محمد',
        email: 'sara@example.com',
        country: 'الهند',
        message: 'أحتاج لتشخيص شامل.',
        reportUrl: '/files/report2.pdf',
        createdAt: '2025-04-12',
      },
    ]);
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-pink-700">طلبات السياحة العلاجية</h1>
      {requests.length === 0 ? (
        <p className="text-gray-600">لا توجد طلبات حالياً.</p>
      ) : (
        <div className="space-y-6">
          {requests.map((req) => (
            <div key={req.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <div className="mb-2">
                <strong>الاسم:</strong> {req.name}
              </div>
              <div className="mb-2">
                <strong>البريد:</strong> {req.email}
              </div>
              <div className="mb-2">
                <strong>الدولة المطلوبة:</strong> {req.country}
              </div>
              <div className="mb-2">
                <strong>الرسالة:</strong> {req.message}
              </div>
              <div className="mb-2">
                <strong>التاريخ:</strong> {req.createdAt}
              </div>
              <a
                href={req.reportUrl}
                download
                className="inline-block mt-2 px-4 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
              >
                تحميل التقرير الطبي
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
