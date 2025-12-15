export default function SocialProof() {
    const stats = [
        { number: '50,000+', label: 'Projects Completed' },
        { number: '4.9/5', label: 'Average Rating' },
        { number: '24hr', label: 'Average Response' },
        { number: '100%', label: 'Satisfaction Guarantee' },
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
