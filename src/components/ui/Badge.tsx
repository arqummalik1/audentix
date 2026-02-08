import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    const variants = {
        default: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
        outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
