import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={
        'flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ' +
        className
      }
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
