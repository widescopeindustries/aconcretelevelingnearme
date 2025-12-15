import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-white">
                                ConcreteLeveling<span className="gradient-text">NearMe</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Connecting homeowners with trusted concrete leveling professionals nationwide.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#quote-form" className="hover:text-primary-400 transition-colors">Driveway Leveling</Link></li>
                            <li><Link href="#quote-form" className="hover:text-primary-400 transition-colors">Sidewalk Repair</Link></li>
                            <li><Link href="#quote-form" className="hover:text-primary-400 transition-colors">Patio Leveling</Link></li>
                            <li><Link href="#quote-form" className="hover:text-primary-400 transition-colors">Pool Deck Repair</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</Link></li>
                            <li><Link href="#benefits" className="hover:text-primary-400 transition-colors">Benefits</Link></li>
                            <li><Link href="#faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
                            <li><Link href="#quote-form" className="hover:text-primary-400 transition-colors">Get Quote</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ConcreteLevelingNearMe.com. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
