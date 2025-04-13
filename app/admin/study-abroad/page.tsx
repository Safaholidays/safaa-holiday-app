'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type StudyRequest = {
  id: number;
  name: string;
  email: string;
  country: string;
  interest: string;
  status: string;
};

export default function StudyAbroadAdmin() {
  const [requests, setRequests] = useState<StudyRequest[]>([]);
  const [selected, setSelected] = useState<StudyRequest | null>(null);
  const [reply, setReply] = useState('');

  useEffect(() => {
    setRequests([
      { id: 1, name: 'محمد أحمد', email: 'mohamed@example.com', country: 'تركيا', interest: 'طب بشري', status: 'جديد' },
      { id: 2, name: 'سارة علي', email: 'sara@example.com', country: 'ماليزيا', interest: 'هندسة برمجيات', status: 'قيد المعالجة' },
    ]);
  }, []);

  const updateStatus = (id: number, status: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const deleteRequest = (id: number) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const sendReply = () => {
    alert(`تم إرسال الرد إلى: ${selected?.email}\n\n${reply}`);
    setReply('');
    setSelected(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">طلبات الدراسة بالخارج</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
        <table className="w-full table-auto text-right border-collapse">
          <thead>
            <tr className="bg-pink-100 text-pink-800">
              <th className="p-3 border">#</th>
              <th className="p-3 border">الاسم</th>
              <th className="p-3 border">البريد الإلكتروني</th>
              <th className="p-3 border">الدولة</th>
              <th className="p-3 border">الرغبة الدراسية</th>
              <th className="p-3 border">الحالة</th>
              <th className="p-3 border">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="p-3 border">{req.id}</td>
                <td className="p-3 border">{req.name}</td>
                <td className="p-3 border">{req.email}</td>
                <td className="p-3 border">{req.country}</td>
                <td className="p-3 border">{req.interest}</td>
                <td className="p-3 border">
                  <select
                    className="text-sm border rounded px-2 py-1"
                    value={req.status}
                    onChange={(e) => updateStatus(req.id, e.target.value)}
                  >
                    <option>جديد</option>
                    <option>قيد المعالجة</option>
                    <option>تم الرد</option>
                  </select>
                </td>
                <td className="p-3 border space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button onClick={() => setSelected(req)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">رد</button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>الرد على الطلب</DialogTitle>
                      </DialogHeader>
                      <Input
                        placeholder="اكتب الرد هنا..."
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        className="mb-4"
                      />
                      <Button onClick={sendReply}>إرسال</Button>
                    </DialogContent>
                  </Dialog>
                  <button onClick={() => deleteRequest(req.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
