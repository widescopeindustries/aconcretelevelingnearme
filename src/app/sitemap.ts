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

    // Blog posts
    routes.push({
        url: `${baseUrl}/blog/how-much-does-concrete-leveling-cost`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    });

    // City pages - all 170+ of them!
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
