'use client';
import { useState } from 'react';

export default function MedicalApplyForm({ serviceType }: { serviceType: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      {submitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ تم استلام طلبك!
          </h2>
          <p className="text-gray-700 mb-6">
            سيتم الاطلاع على طلبك، وسيقوم فريقنا بالتواصل معك قريبًا.
          </p>
          <a
            href="/"
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
          >
            العودة للصفحة الرئيسية
          </a>
        </div>
      ) : (
        <form
          action="https://formspree.io/f/xyzenroy"
          method="POST"
          encType="multipart/form-data"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_subject"
            value={`طلب ${serviceType}`}
          />

          <div>
            <label className="block mb-1 font-medium">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">حدد الرغبة الدراسية</label>
            <input
              type="text"
              name="study_interest"
              placeholder="مثلاً: طب - هندسة - إدارة أعمال"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              ارفق صورة من الشهادة الجامعية
            </label>
            <input
              type="file"
              name="attachment"
              accept=".pdf,.jpg,.png"
              required
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
          >
            إرسال الطلب
          </button>
        </form>
      )}
    </div>
  );
}
