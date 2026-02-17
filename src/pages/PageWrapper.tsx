import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEO, SEOProps } from '@/components/SEO/SEO';

interface PageWrapperProps extends SEOProps {
    children: ReactNode;
}

export function PageWrapper({ children, ...seoProps }: PageWrapperProps) {
    return (
        <>
            <SEO {...seoProps} />
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </>
    );
}
