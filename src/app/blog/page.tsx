import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Concrete Leveling Blog | Tips, Guides & Cost Information',
    description: 'Learn about concrete leveling, mudjacking, costs, and how to fix sunken concrete. Expert tips and guides for homeowners.',
};

const blogPosts = [
    {
        slug: 'how-much-does-concrete-leveling-cost',
        title: 'How Much Does Concrete Leveling Cost in 2025?',
        excerpt: 'Complete breakdown of concrete leveling costs, including mudjacking vs foam injection pricing.',
        category: 'Cost Guides',
    },
    {
        slug: 'mudjacking-vs-foam-injection',
        title: 'Mudjacking vs Foam Injection: Which is Better in 2025?',
        excerpt: 'Compare the two main concrete leveling methods to find the best solution for your project.',
        category: 'Guides',
    },
    {
        slug: 'how-long-does-polyjacking-last',
        title: 'How Long Does Polyjacking Last? 2025 Durability Guide',
        excerpt: 'Learn the real lifespan of polyurethane foam concrete leveling and what affects its durability.',
        category: 'Guides',
    },
    {
        slug: 'is-concrete-leveling-diy',
        title: 'Can You DIY Concrete Leveling? Why Pros Say No',
        excerpt: 'Learn why concrete leveling is one home repair you should never attempt yourself.',
        category: 'Guides',
    },
    {
        slug: 'signs-you-need-concrete-leveling',
        title: '7 Warning Signs You Need Concrete Leveling',
        excerpt: 'Learn the critical warning signs that indicate your concrete needs professional leveling services.',
        category: 'Tips',
    },
];

export default function BlogPage() {
    return (
        <main className="section bg-gray-50 min-h-screen">
            <div className="container max-w-6xl">
                <div className="section-header">
                    <h1 className="section-title">Concrete Leveling Blog</h1>
                    <p className="section-subtitle">
                        Expert tips, guides, and cost information for concrete leveling projects
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article key={index} className="card card-hover">
                            <div className="mb-4">
                                <span className="badge">{post.category}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">
                                <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                            >
                                Read More
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* SEO Content */}
                <div className="mt-16 prose prose-lg max-w-none">
                    <h2>Why Read Our Concrete Leveling Blog?</h2>
                    <p>
                        Our blog provides comprehensive information about concrete leveling, mudjacking, and foam injection
                        services. Whether you're researching costs, comparing methods, or looking for DIY tips, we've got
                        you covered with expert insights and practical advice.
                    </p>
                </div>
            </div>
        </main>
    );
}
