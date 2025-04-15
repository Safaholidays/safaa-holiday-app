import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const patientName = formData.get('patientName');
    const companionName = formData.get('companionName');
    const country = formData.get('country');
    const phone = formData.get('phone');
    const file = formData.get('file');

    console.log("🔹 بيانات المريض:", { patientName, companionName, country, phone, file });

    // تجاوز الإرسال، والرد بنجاح وهمي
    return NextResponse.json({ success: true, message: 'تم استلام الطلب بنجاح (وهمي)' });
  } catch (error) {
    return NextResponse.json({ error: 'فشل داخلي مؤقت' }, { status: 500 });
  }
}
