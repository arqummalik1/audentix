import { PageWrapper } from './PageWrapper';
import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
    return (
        <PageWrapper
            title="Contact Us - Audentix"
            description="Get in touch with Audentix for your next software project. We are ready to bring your ideas to life."
            keywords="contact us, hire developers, software consultation"
        >
            <Contact />
        </PageWrapper>
    );
}
