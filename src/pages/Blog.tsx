import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { client, isSanityConfigured, BlogPost } from '@/lib/sanity';
import { BlogCard } from '@/components/blog/BlogCard';
import { PageWrapper } from './PageWrapper';
import { Container } from '@/components/layout/Container';

// Fallback dummy data
const dummyPosts: BlogPost[] = [
    {
        _id: '1',
        title: 'The Future of AI in Software Development',
        slug: { current: 'future-of-ai' },
        publishedAt: new Date().toISOString(),
        author: { name: 'Arqum Malik', image: null },
        categories: [{ title: 'Technology' }],
        excerpt: 'How Artificial Intelligence is transforming the way we build and deploy software applications.',
        mainImage: null,
        body: []
    },
    {
        _id: '2',
        title: 'Building Scalable SaaS Applications',
        slug: { current: 'scalable-saas' },
        publishedAt: new Date().toISOString(),
        author: { name: 'Arqum Malik', image: null },
        categories: [{ title: 'Development' }],
        excerpt: 'Key strategies and patterns for creating robust, enterprise-grade SaaS platforms.',
        mainImage: null,
        body: []
    },
    {
        _id: '3',
        title: 'Modern UI/UX Trends for 2024',
        slug: { current: 'ui-ux-trends-2024' },
        publishedAt: new Date().toISOString(),
        author: { name: 'Audentix Team', image: null },
        categories: [{ title: 'Design' }],
        excerpt: 'Explore the latest design trends that are shaping the digital landscape this year.',
        mainImage: null,
        body: []
    }
];

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>(dummyPosts);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isSanityConfigured() || !client) {
            return;
        }

        setLoading(true);
        const query = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            publishedAt,
            mainImage,
            excerpt,
            author->{
                name,
                image
            },
            categories[]->{
                title
            }
        }`;

        client.fetch(query)
            .then((data: BlogPost[]) => {
                setPosts(data.length > 0 ? data : dummyPosts);
                setLoading(false);
            })
            .catch((err: Error) => {
                console.error('Sanity fetch error:', err);
                setPosts(dummyPosts);
                setLoading(false);
            });
    }, []);

    return (
        <PageWrapper
            title="Audentix Blog - Latest Insights"
            description="Read our latest articles on software development, AI, design, and technology trends."
            keywords="tech blog, software insights, coding tutorials"
        >
            <section className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
                <Container>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Our <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Deep dives into technology, design, and the future of software.
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <motion.div
                                    key={post._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    <BlogCard post={post} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </PageWrapper>
    );
}
