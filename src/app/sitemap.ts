import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aconcretelevelingnearme.vercel.app';

    // Homepage
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];

    // Blog index
    routes.push({
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    });

    // Blog posts - High-value "Money" articles
    const blogPosts = [
        'how-much-does-concrete-leveling-cost',
        'mudjacking-vs-foam-injection',
        'how-long-does-polyjacking-last',
        'is-concrete-leveling-diy',
        'signs-you-need-concrete-leveling',
    ];

    blogPosts.forEach((slug) => {
        routes.push({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        });
    });

    // City pages - all 255+ of them!
    cities.forEach((city) => {
        routes.push({
            url: `${baseUrl}/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        });
    });

    return routes;
}
