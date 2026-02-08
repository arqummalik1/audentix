import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    gradient?: boolean;
}

export function Card({ children, className, hover = true, gradient = false }: CardProps) {
    return (
        <div
            className={cn(
                'glass rounded-2xl p-6',
                hover && 'transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl',
                gradient && 'relative overflow-hidden group',
                className
            )}
        >
            {gradient && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
