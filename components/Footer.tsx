'use client';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
        <div className="text-sm">© 2025 صفاء هوليدي. جميع الحقوق محفوظة.</div>

        <div className="flex items-center gap-4 text-2xl">
          <a href="https://wa.me/249127525334" target="_blank" title="واتساب" className="hover:text-green-400 transition">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" title="فيسبوك" className="hover:text-blue-400 transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" title="انستغرام" className="hover:text-pink-200 transition">
            <FaInstagram />
          </a>
          <a href="https://x.com/SafaHolidays" target="_blank" title="تويتر" className="hover:text-sky-300 transition">
            <FaTwitter />
          </a>
        </div>

        <a
          href="https://wa.me/249127525334?text=مرحبًا، أحتاج دعم فني"
          className="text-sm text-pink-100 hover:underline hover:text-white transition"
          target="_blank"
        >
          الدعم الفني - تواصل معنا
        </a>
      </div>
    </footer>
  );
}
