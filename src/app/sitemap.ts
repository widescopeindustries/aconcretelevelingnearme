import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aconcretelevelingnearme.com';

    // Homepage
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];

    // City pages - all of them!
    cities.forEach((city) => {
        routes.push({
            url: `${baseUrl}/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9, // High priority for city pages
        });
    });

    return routes;
}
