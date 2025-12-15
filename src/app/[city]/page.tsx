import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

// List of cities - you can expand this or pull from a database
const cities = [
    { slug: 'austin', name: 'Austin', state: 'TX' },
    { slug: 'houston', name: 'Houston', state: 'TX' },
    { slug: 'dallas', name: 'Dallas', state: 'TX' },
    { slug: 'san-antonio', name: 'San Antonio', state: 'TX' },
    { slug: 'fort-worth', name: 'Fort Worth', state: 'TX' },
    { slug: 'phoenix', name: 'Phoenix', state: 'AZ' },
    { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
    { slug: 'chicago', name: 'Chicago', state: 'IL' },
    { slug: 'miami', name: 'Miami', state: 'FL' },
    { slug: 'atlanta', name: 'Atlanta', state: 'GA' },
    // Add more cities as needed
];

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const city = cities.find(c => c.slug === params.city);

    if (!city) {
        return {
            title: 'City Not Found',
        };
    }

    return {
        title: `Concrete Leveling ${city.name}, ${city.state} | Free Quote in 60 Seconds`,
        description: `Professional concrete leveling services in ${city.name}, ${city.state}. Get matched with top-rated local contractors. Free quote in 60 seconds. Licensed & insured.`,
        openGraph: {
            title: `Concrete Leveling ${city.name}, ${city.state}`,
            description: `Get your sunken concrete fixed fast in ${city.name}. Professional concrete leveling services near you.`,
        },
    };
}

export default function CityPage({ params }: { params: { city: string } }) {
    const city = cities.find(c => c.slug === params.city);

    if (!city) {
        notFound();
    }

    return (
        <main>
            {/* City-specific Hero */}
            <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="badge mb-6 inline-flex">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Serving {city.name}, {city.state}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Concrete Leveling in{' '}
                                <span className="gradient-text">{city.name}</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Get matched with top-rated concrete leveling contractors in {city.name}.
                                Licensed, insured, and ready to fix your sunken concrete in 24 hours.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    `Licensed contractors in ${city.name}`,
                                    'Same-day service available',
                                    'Free quotes in 60 seconds'
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                                <path d="M6 10L9 13L14 7" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="lg:hidden mb-8">
                                <a href="#quote-form" className="btn btn-primary btn-large btn-block">
                                    Get Free Quote in {city.name}
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#F7931E">
                                                <path d="M10 1L12 7L18 7L13 11L15 17L10 13L5 17L7 11L2 7H8L10 1Z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600">4.9/5 from {city.name} customers</p>
                                </div>
                            </div>
                        </div>

                        <div className="animate-slide-in-right lg:pl-8">
                            <div className="card shadow-2xl" id="quote-form">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold mb-2">Get Your Free Quote</h2>
                                    <p className="text-gray-600">Serving {city.name} and surrounding areas</p>
                                </div>
                                {/* Import and use LeadForm component here */}
                                <div className="text-center py-8">
                                    <a href="/#quote-form" className="btn btn-primary btn-large">
                                        Start Your Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SocialProof />

            {/* City-specific content section */}
            <section className="section bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">
                        Why Choose Concrete Leveling in {city.name}?
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p>
                            {city.name} homeowners trust our network of professional concrete leveling contractors
                            to fix sunken driveways, sidewalks, patios, and more. Our local experts understand
                            the unique soil conditions in {city.state} and use proven methods to deliver
                            long-lasting results.
                        </p>
                        <p>
                            Whether you're dealing with settling concrete around your home or business,
                            our {city.name} contractors can help. Get matched with up to 3 licensed,
                            insured professionals who will provide free quotes and expert recommendations.
                        </p>
                    </div>
                </div>
            </section>

            <HowItWorks />
            <Benefits />
            <FAQ />
            <FinalCTA />

            {/* Schema Markup for Local SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Concrete Leveling",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": `Concrete Leveling Near Me - ${city.name}`,
                            "areaServed": {
                                "@type": "City",
                                "name": city.name,
                                "addressRegion": city.state,
                            },
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": city.name,
                            "addressRegion": city.state,
                        },
                    }),
                }}
            />
        </main>
    );
}
