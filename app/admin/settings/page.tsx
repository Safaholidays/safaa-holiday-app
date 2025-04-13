'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminSettings() {
  const [username, setUsername] = useState('Mohamed Rafat');
  const [email, setEmail] = useState('admin@safa.com');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSave = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <main className="max-w-2xl mx-auto pt-32 px-4">
      <h1 className="text-2xl font-bold mb-6 text-pink-600">إعدادات المدير</h1>

      <Card className="shadow-xl">
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="block mb-1 font-medium">اسم المستخدم</label>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-medium">البريد الإلكتروني</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div>
            <label className="block mb-1 font-medium">كلمة المرور الجديدة</label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </div>

          <Button onClick={handleSave} className="bg-pink-600 hover:bg-pink-700 text-white w-full">
            حفظ التغييرات
          </Button>

          {success && <p className="text-green-600 text-sm">تم حفظ التغييرات بنجاح</p>}
        </CardContent>
      </Card>
    </main>
  );
}
