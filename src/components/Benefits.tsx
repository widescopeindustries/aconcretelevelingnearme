export default function Benefits() {
    const benefits = [
        {
            icon: '💰',
            title: 'Save 50-70%',
            description: 'Leveling costs a fraction of concrete replacement while delivering the same results.',
        },
        {
            icon: '⚡',
            title: 'Fast Completion',
            description: 'Most jobs completed in 1 day. Use your concrete immediately after service.',
        },
        {
            icon: '🌱',
            title: 'Eco-Friendly',
            description: 'No demolition or waste. Keep your existing concrete and reduce environmental impact.',
        },
        {
            icon: '🛡️',
            title: 'Long-Lasting',
            description: 'Professional leveling lasts 5-10+ years with proper maintenance and warranty coverage.',
        },
        {
            icon: '🏠',
            title: 'Boost Home Value',
            description: 'Eliminate tripping hazards and improve curb appeal for better resale value.',
        },
        {
            icon: '✅',
            title: 'Prevent Damage',
            description: 'Stop water pooling and foundation issues before they become expensive problems.',
        },
    ];

    return (
        <section id="benefits" className="section bg-white">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Concrete Leveling?</h2>
                    <p className="section-subtitle">Save time, money, and hassle compared to replacement</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="card card-hover">
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
