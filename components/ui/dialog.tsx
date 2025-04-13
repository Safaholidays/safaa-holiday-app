'use client';

import * as React from 'react';
import {
  Dialog as RadixDialog,
  DialogContent as RadixDialogContent,
  DialogTrigger as RadixDialogTrigger
} from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

const Dialog = RadixDialog;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDialogTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixDialogTrigger>
>(({ className, ...props }, ref) => (
  <RadixDialogTrigger ref={ref} className={cn(className)} {...props} />
));
DialogTrigger.displayName = 'DialogTrigger';

const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialogContent>,
  React.ComponentPropsWithoutRef<typeof RadixDialogContent>
>(({ className, children, ...props }, ref) => (
  <RadixDialogContent
    ref={ref}
    className={cn(
      'fixed top-[80px] left-1/2 -translate-x-1/2 z-[99] w-full max-w-md rounded-lg bg-white shadow-xl p-6',
      className
    )}
    {...props}
  >
    {children}
  </RadixDialogContent>
));
DialogContent.displayName = 'DialogContent';

const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => <div className={cn('mb-4', className)}>{children}</div>;

const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <h2 className={cn('text-xl font-semibold text-gray-800', className)}>
    {children}
  </h2>
);

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle };
