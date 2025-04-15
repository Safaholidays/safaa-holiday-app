import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const studentName = formData.get('studentName') as string;
    const studyField = formData.get('studyField') as string;
    const country = formData.get('country') as string;
    const phone = formData.get('phone') as string;
    const file = formData.get('file') as File;

    if (!studentName || !studyField || !country || !phone || !file) {
      return NextResponse.json({ error: 'البيانات غير مكتملة' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString('base64');

    await resend.emails.send({
      from: 'study@resend.dev',
      to: 'safaholidays0@gmail.com',
      subject: `طلب جديد للسياحة العلاجية   - ${patientName}`,
      html: `
        <p><strong>اسم المريض:</strong> ${${patientName}}</p>
        <p><strong>اسم المرافق  :</strong> ${companionName}</p>
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend API Error:', error);
    return NextResponse.json({ error: 'فشل إرسال البريد' }, { status: 500 });
  }
}
