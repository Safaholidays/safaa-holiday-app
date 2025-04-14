import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const patientName = formData.get('patientName') as string;
    const companionName = formData.get('companionName') as string;
    const country = formData.get('country') as string;
    const phone = formData.get('phone') as string;
    const file = formData.get('file') as File;

    if (!patientName || !country || !phone || !file) {
      return NextResponse.json({ error: 'البيانات غير مكتملة' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString('base64');

    const response = await resend.emails.send({
      from: 'medical@resend.dev',
      to: 'safaholidays0@gmail.com',
      subject: `طلب جديد للسياحة العلاجية - ${patientName}`,
      html: `
        <p><strong>اسم المريض:</strong> ${patientName}</p>
        <p><strong>اسم المرافق:</strong> ${companionName || 'لا يوجد'}</p>
        <p><strong>الدولة المطلوبة:</strong> ${country}</p>
        <p><strong>رقم التواصل:</strong> ${phone}</p>
        <p>تم إرفاق التقرير الطبي.</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: base64,
          contentType: file.type,
        },
      ],
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('[Resend API Error]:', error);
    return NextResponse.json({ error: 'فشل إرسال البريد' }, { status: 500 });
  }
}
