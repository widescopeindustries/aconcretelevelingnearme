import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { cities } from '@/data/cities';

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

    const title = `Concrete Leveling ${city.name}, ${city.state} | Free Quote in 60 Seconds`;
    const description = `Professional concrete leveling in ${city.name}, ${city.state}. Fix sunken driveways, sidewalks & patios. Licensed contractors. Free quotes. Same-day service available.`;

    return {
        title,
        description,
        keywords: `concrete leveling ${city.name}, mudjacking ${city.name}, slab jacking ${city.name}, concrete repair ${city.name}, sunken concrete ${city.name}`,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://aconcretelevelingnearme.com/${city.slug}`,
        },
        alternates: {
            canonical: `https://aconcretelevelingnearme.com/${city.slug}`,
        },
    };
}

export default function CityPage({ params }: { params: { city: string } }) {
    const city = cities.find(c => c.slug === params.city);

    if (!city) {
        notFound();
    }

    // SEO-rich content variations
    const services = [
        'Driveway Leveling',
        'Sidewalk Repair',
        'Patio Leveling',
        'Garage Floor Leveling',
        'Pool Deck Repair',
        'Concrete Slab Jacking',
    ];

    return (
        <main>
            {/* Hero Section */}
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
                                    <path d="M8 2L3 4V8C3 11 5.5 13.5 8 15C10.5 13.5 13 11 13 8V4L8 2Z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                Licensed Contractors in {city.name}, {city.state}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Concrete Leveling in{' '}
                                <span className="gradient-text">{city.name}</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Fix sunken concrete fast with professional leveling services in {city.name}, {city.state}.
                                Get matched with top-rated, licensed contractors. Free quote in 60 seconds.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    `Serving all of ${city.name}`,
                                    'Same-day service available',
                                    'Licensed & insured contractors',
                                    'Free, no-obligation quotes'
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
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SocialProof />

            {/* City-Specific Services Section */}
            <section className="section bg-white">
                <div className="container max-w-6xl">
                    <div className="section-header">
                        <h2 className="section-title">
                            Concrete Leveling Services in {city.name}, {city.state}
                        </h2>
                        <p className="section-subtitle">
                            Professional solutions for all your concrete repair needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {services.map((service, index) => (
                            <div key={index} className="card card-hover">
                                <h3 className="text-xl font-bold mb-3">{service}</h3>
                                <p className="text-gray-600">
                                    Expert {service.toLowerCase()} services in {city.name}. Fast, affordable, and guaranteed.
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* SEO Content */}
                    <div className="prose prose-lg max-w-none">
                        <h2>Why Choose Concrete Leveling in {city.name}?</h2>
                        <p>
                            {city.name} homeowners and businesses trust our network of professional concrete leveling contractors
                            to fix sunken and uneven concrete. Whether you're dealing with a settling driveway, cracked sidewalk,
                            or unlevel patio, our local experts in {city.name}, {city.state} have the experience and equipment
                            to restore your concrete quickly and affordably.
                        </p>

                        <h3>Common Concrete Problems in {city.name}</h3>
                        <p>
                            Due to {city.state}'s soil conditions and weather patterns, concrete settling is a common issue
                            for {city.name} property owners. Signs you need concrete leveling include:
                        </p>
                        <ul>
                            <li>Sunken or uneven concrete slabs</li>
                            <li>Tripping hazards on sidewalks and walkways</li>
                            <li>Water pooling near your foundation</li>
                            <li>Gaps between concrete and your home</li>
                            <li>Cracked or separated concrete sections</li>
                        </ul>

                        <h3>Our {city.name} Concrete Leveling Process</h3>
                        <p>
                            When you request a quote through our platform, we connect you with up to 3 licensed, insured
                            concrete leveling contractors serving {city.name}. They'll assess your concrete, explain your
                            options (mudjacking or polyurethane foam injection), and provide transparent pricing. Most
                            jobs in {city.name} are completed in just one day.
                        </p>

                        <h3>Cost of Concrete Leveling in {city.name}, {city.state}</h3>
                        <p>
                            Concrete leveling in {city.name} typically costs $3-$6 per square foot, which is 50-70% less
                            expensive than concrete replacement. The exact cost depends on the size of the area, severity
                            of settling, and accessibility. Get free quotes from local {city.name} contractors to compare
                            pricing and services.
                        </p>

                        <h3>Serving All Neighborhoods in {city.name}</h3>
                        <p>
                            Our contractor network serves all areas of {city.name}, {city.state}, including residential
                            and commercial properties. Whether you're in downtown {city.name} or the surrounding suburbs,
                            we can connect you with qualified concrete leveling professionals near you.
                        </p>
                    </div>
                </div>
            </section>

            <HowItWorks />
            <Benefits />
            <FAQ />
            <FinalCTA />

            {/* Local Business Schema */}
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
                        "offers": {
                            "@type": "Offer",
                            "description": "Free concrete leveling quotes",
                        },
                    }),
                }}
            />
        </main>
    );
}
