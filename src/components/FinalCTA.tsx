export default function FinalCTA() {
    return (
        <section className="section bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Fix Your Sunken Concrete?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Get matched with top-rated contractors in your area. Free quote in 60 seconds.
                    </p>
                    <a href="#quote-form" className="btn btn-primary btn-large inline-flex">
                        Get Free Quote Now
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </a>
                    <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 1L6 7H1L5 11L3 18L10 14L17 18L15 11L19 7H14L10 1Z" fill="currentColor" />
                        </svg>
                        <span>Join 50,000+ satisfied homeowners</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
