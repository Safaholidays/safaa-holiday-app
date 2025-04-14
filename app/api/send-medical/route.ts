import { Resend } from 'resend';

export async function POST(req: Request) {
  const body = await req.json();

  // استدعاء المفتاح هنا داخل الفنكشن فقط
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'info@safaholidays.com',
      to: 'safaholidays0@gmail.com',
      subject: 'طلب جديد للسياحة العلاجية',
      html: `<p>اسم مقدم الطلب: ${body.name}</p><p>البريد: ${body.email}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
