import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost';
};

// دالة دمج الكلاسات (بديلة لـ clsx أو cn)
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function Button({
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  const baseStyle = 'px-4 py-2 rounded font-medium transition';
  const variants: Record<typeof variant, string> = {
    default: 'bg-pink-600 text-white hover:bg-pink-700',
    ghost: 'bg-transparent text-gray-700 hover:text-pink-600',
  };

  return (
    <button
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    />
  );
}
