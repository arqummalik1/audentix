import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/services';
import { features } from '@/data/features';
import { Check } from 'lucide-react';

const iconMap: Record<string, any> = {
    Globe: Icons.Globe,
    Smartphone: Icons.Smartphone,
    Layers: Icons.Layers,
    Bot: Icons.Bot,
    Palette: Icons.Palette,
    Rocket: Icons.Rocket,
    Cpu: Icons.Cpu,
    Layers3: Icons.Layers3,
    Gauge: Icons.Gauge,
    ShieldCheck: Icons.ShieldCheck
};

const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/10 text-blue-500',
    purple: 'bg-purple-500/10 text-purple-500',
    cyan: 'bg-cyan-500/10 text-cyan-500',
    green: 'bg-green-500/10 text-green-500',
    orange: 'bg-orange-500/10 text-orange-500',
    pink: 'bg-pink-500/10 text-pink-500'
};

export function Services() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                        Our <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive software development services tailored to your business needs
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                            >
                                <Card hover gradient className="h-full">
                                    <div className={`w-14 h-14 rounded-xl ${colorMap[service.color]} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                        {IconComponent && <IconComponent className="w-7 h-7" />}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Features Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-display font-bold text-center mb-12">
                        Why Choose <span className="gradient-text">Qubitt</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className={`w-12 h-12 mx-auto mb-3 ${feature.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                                        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                                    </div>
                                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
