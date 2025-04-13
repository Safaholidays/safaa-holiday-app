'use client';

import { useState } from 'react';
import axios from 'axios';

export default function MedicalApplyForm() {
  const [form, setForm] = useState({
    patientName: '',
    companionName: '',
    country: '',
    phone: '',
    file: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      await axios.post('/api/send-medical', formData);
      setSuccess(true);
      setForm({ patientName: '', companionName: '', country: '', phone: '', file: null });
    } catch (err: any) {
      setError('حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى.');
    }

    setLoading(false);
  };

  return (
    <div className="pt-48 max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-pink-700 text-center">نموذج التقديم للسياحة العلاجية</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">اسم المريض</label>
          <input
            type="text"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">اسم المرافق (اختياري)</label>
          <input
            type="text"
            name="companionName"
            value={form.companionName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">الدولة المطلوبة للعلاج</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">رقم التواصل</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">رفع التقرير الطبي (PDF أو صورة)</label>
          <input
            type="file"
            name="file"
            accept=".pdf,image/*"
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">تم إرسال النموذج بنجاح!</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition w-full"
        >
          {loading ? 'جارٍ الإرسال...' : 'إرسال النموذج'}
        </button>
      </form>
    </div>
  );
}
