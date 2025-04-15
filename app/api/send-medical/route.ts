import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { patientName, companionName, country, phone } = body;

    if (!patientName || !country || !phone) {
      return NextResponse.json({ error: 'البيانات غير مكتملة' }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: 'medical@resend.dev',
      to: 'safaholidays0@gmail.com',
      subject: `طلب جديد للسياحة العلاجية - ${patientName}`,
      html: `
        <p><strong>اسم المريض:</strong> ${patientName}</p>
        <p><strong>اسم المرافق:</strong> ${companionName || 'لا يوجد'}</p>
        <p><strong>الدولة المطلوبة:</strong> ${country}</p>
        <p><strong>رقم التواصل:</strong> ${phone}</p>
        <p><strong>ملاحظة:</strong> لم يتم إرفاق ملف في هذا الطلب.</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('[Resend API Error]:', error);
    return NextResponse.json({ error: 'فشل إرسال البريد' }, { status: 500 });
  }
}
