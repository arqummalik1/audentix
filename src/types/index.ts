export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    features: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'SaaS' | 'AI/ML' | 'E-commerce' | 'Fintech';
    image: string;
    gradient: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
}

export interface Feature {
    icon: string;
    title: string;
    desc: string;
}
