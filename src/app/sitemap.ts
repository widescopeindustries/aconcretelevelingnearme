import { MetadataRoute } from 'next';

const cities = [
    'austin', 'houston', 'dallas', 'san-antonio', 'fort-worth',
    'phoenix', 'los-angeles', 'chicago', 'miami', 'atlanta',
];

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

    // City pages
    cities.forEach((city) => {
        routes.push({
            url: `${baseUrl}/${city}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    });

    return routes;
}
