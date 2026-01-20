import LeadForm from './LeadForm';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="animate-fade-in-up">
                        {/* Trust Badge */}
                        <div className="badge mb-6 inline-flex">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 1L10 6L15 6L11 9.5L13 15L8 11.5L3 15L5 9.5L1 6H6L8 1Z" fill="currentColor" />
                            </svg>
                            Trusted by 50,000+ Homeowners
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Fix Your Sunken Concrete in{' '}
                            <span className="gradient-text">24 Hours</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Stop tripping hazards and water damage. Get matched with top-rated concrete leveling pros in your area. Free quote in 60 seconds.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-4 mb-8">
                            {[
                                'Licensed & Insured',
                                'Same-Day Service Available',
                                'Lifetime Warranty'
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

                        {/* CTA Button for Mobile */}
                        <div className="lg:hidden mb-8">
                            <a href="#quote-form" className="btn btn-primary btn-large btn-block">
                                Get Free Quote Now
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#F7931E">
                                            <path d="M10 1L12 7L18 7L13 11L15 17L10 13L5 17L7 11L2 7H8L10 1Z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">4.9/5 from 2,847 reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Lead Form */}
                    <div className="animate-slide-in-right lg:pl-8">
                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
