import { PageWrapper } from './PageWrapper';
import { Services } from '@/components/sections/Services';

export default function ServicesPage() {
    return (
        <PageWrapper
            title="Our Services - Audentix"
            description="Explore our premium software development services including AI solutions, SaaS development, and enterprise applications."
            keywords="software services, AI development, web development, mobile apps"
        >
            <Services />
        </PageWrapper>
    );
}
