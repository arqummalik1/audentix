export interface Feature {
    icon: string;
    title: string;
    desc: string;
    gradient: string;
}

export const features: Feature[] = [
    {
        icon: 'Cpu',
        title: 'AI-First',
        desc: 'Chatbots, assistants, automation pipelines',
        gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
        icon: 'Layers3',
        title: 'SaaS Ready',
        desc: 'Auth, payments, dashboards, analytics',
        gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
        icon: 'Gauge',
        title: 'Performance',
        desc: 'Lighthouse 95+, code-splitting, lazy loading',
        gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
        icon: 'Rocket',
        title: 'Fast Delivery',
        desc: 'Modern stack with tight iteration',
        gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
        icon: 'ShieldCheck',
        title: 'Secure',
        desc: 'Best-practice security and reliability',
        gradient: 'bg-gradient-to-br from-cyan-500 to-blue-500'
    }
];
