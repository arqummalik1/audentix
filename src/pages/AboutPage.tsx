import { PageWrapper } from './PageWrapper';
import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
import { Container } from '@/components/layout/Container';

export default function AboutPage() {
    return (
        <PageWrapper
            title="About Audentix - Premium Software Development"
            description="Learn about Audentix, a team of expert developers building the future of software with AI and modern web technologies."
            keywords="about audentix, software company, tech team"
        >
            <Hero />
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl font-bold font-display">Who We Are</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Audentix is a premium software development agency dedicated to crafting exceptional digital experiences.
                            We combine cutting-edge technology with stunning design to build scalable, secure, and beautiful applications.
                        </p>
                    </div>
                </Container>
            </section>
            <TechStack />
        </PageWrapper>
    );
}
