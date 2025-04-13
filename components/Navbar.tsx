'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AdminLoginModal from './AdminLoginModal';

const links = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/about' },
  { name: 'الحج والعمرة', href: '/hajj' },
  { name: 'التأشيرات', href: '/visa' },
  { name: 'السياحة العلاجية', href: '/medical-tourism' },
  { name: 'الدراسة بالخارج', href: '/study-abroad' },
  { name: 'بكجات شهر العسل', href: '/honeymoon' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-40 bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* شعار الشركة */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="صفاء هوليدي"
            width={100}
            height={40}
            priority
          />
        </Link>

        {/* روابط التنقل */}
        <nav className="flex flex-wrap gap-2 items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="px-4 py-2 text-sm md:text-base rounded-full bg-pink-100 text-pink-800 hover:bg-pink-600 hover:text-white transition font-medium cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}

          {/* زر دخول المدير */}
          <div className="ml-4">
            <AdminLoginModal />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
