'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold">
                            ConcreteLeveling<span className="gradient-text">NearMe</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#how-it-works" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            How It Works
                        </Link>
                        <Link href="#benefits" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Benefits
                        </Link>
                        <Link href="#faq" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            FAQ
                        </Link>
                        <Link href="#quote-form" className="btn btn-primary-outline">
                            Get Free Quote
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-gray-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-gray-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="#how-it-works"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                How It Works
                            </Link>
                            <Link
                                href="#benefits"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Benefits
                            </Link>
                            <Link
                                href="#faq"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link
                                href="#quote-form"
                                className="btn btn-primary mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Free Quote
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
