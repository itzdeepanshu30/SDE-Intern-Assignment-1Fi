import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'purple' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className
}) => {
  const variantStyles = {
    primary: 'bg-rose-50 text-rose-700 border-rose-200',
    secondary: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-rose-50 text-rose-700 border-rose-200 font-bold',
    warning: 'bg-amber-50 text-amber-800 border-amber-200',
    purple: 'bg-pink-50 text-pink-700 border-pink-200',
    outline: 'bg-transparent text-slate-600 border-rose-200'
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-bold',
    md: 'text-xs px-2.5 py-1 font-bold'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border tracking-wide uppercase',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
