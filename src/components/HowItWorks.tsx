export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: 'Submit Your Info',
            description: 'Tell us about your concrete leveling needs in 60 seconds. No credit card required.',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="3" />
                    <path d="M16 20H32M16 28H24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            number: 2,
            title: 'Get Matched',
            description: 'We connect you with up to 3 licensed, insured contractors in your area within 24 hours.',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="3" />
                    <path d="M18 24L22 28L30 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            number: 3,
            title: 'Get It Fixed',
            description: 'Choose the best quote and get your concrete leveled. Most jobs completed in 1 day.',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M12 24L20 16L28 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="16" y="24" width="16" height="16" stroke="currentColor" strokeWidth="3" />
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="section bg-gray-50">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">Get your concrete leveled in 3 simple steps</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="card card-hover text-center relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                {step.number}
                            </div>
                            <div className="text-primary-600 mb-4 flex justify-center">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
