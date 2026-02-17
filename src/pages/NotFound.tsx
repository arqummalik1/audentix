import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

import { Helmet } from 'react-helmet-async';

export function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
            <Helmet>
                <title>Page Not Found - Audentix</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: mousePosition.x * 30,
                        y: mousePosition.y * 30,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: -mousePosition.x * 30,
                        y: -mousePosition.y * 30,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--cyan)]/10 rounded-full blur-[80px]"
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                                         linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center max-w-2xl mx-auto"
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mb-8"
                    >
                        <span className="text-[200px] md:text-[280px] font-bold leading-none bg-gradient-to-br from-[var(--accent)] via-[var(--cyan)] to-[var(--emerald)] bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            404
                        </span>
                        <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-0 right-[15%] md:right-[20%] text-6xl"
                        >
                            🔍
                        </motion.div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4"
                    >
                        Page Not Found
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-[var(--text-secondary)] mb-8"
                    >
                        Oops! The page you're looking for seems to have wandered off.
                        Let's get you back on track.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            icon={<Home />}
                            onClick={() => window.location.href = '/'}
                        >
                            Go Home
                        </Button>

                        <Button
                            variant="secondary"
                            size="lg"
                            icon={<ArrowLeft />}
                            iconPosition="left"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12 pt-8 border-t border-[var(--border)]"
                    >
                        <p className="text-sm text-[var(--text-muted)] mb-4">
                            Or explore our main pages
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: 'Services', href: '/#services' },
                                { label: 'Portfolio', href: '/#portfolio' },
                                { label: 'Testimonials', href: '/#testimonials' },
                                { label: 'Contact', href: '/#contact' },
                            ].map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                                    className="px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors text-sm"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}

export default NotFound;
