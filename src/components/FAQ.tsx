'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'How much does concrete leveling cost?',
            answer: 'Concrete leveling typically costs $3-$6 per square foot, which is 50-70% less than replacement. The exact cost depends on the size of the area, severity of settling, and your location. Get a free quote to see exact pricing for your project.',
        },
        {
            question: 'How long does concrete leveling last?',
            answer: 'Professional concrete leveling typically lasts 5-10 years or more, depending on soil conditions and maintenance. Polyurethane foam injection often lasts longer than traditional mudjacking. Most contractors offer warranties ranging from 1-5 years.',
        },
        {
            question: "What's the difference between mudjacking and foam injection?",
            answer: 'Mudjacking uses a cement-based slurry, while foam injection uses lightweight polyurethane foam. Foam is lighter, cures faster, and lasts longer, but costs slightly more. Both methods are effective - your contractor can recommend the best option for your situation.',
        },
        {
            question: 'How long does the leveling process take?',
            answer: 'Most concrete leveling projects are completed in 1-4 hours. You can typically use the concrete immediately after foam injection, or within 24 hours for mudjacking. The process is much faster than replacement, which can take several days.',
        },
        {
            question: 'Is concrete leveling permanent?',
            answer: "While concrete leveling is long-lasting, it's not always permanent. If the underlying soil issues aren't addressed, settling can recur. However, professional contractors will assess and address root causes to maximize longevity. Many homeowners get 10+ years from quality leveling work.",
        },
        {
            question: 'Can all sunken concrete be leveled?',
            answer: 'Most sunken concrete can be leveled, but severely cracked or damaged slabs may need replacement. A professional contractor will assess your concrete\'s condition and recommend the best solution. Generally, if the concrete is structurally sound, it can be leveled.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section bg-gray-50">
            <div className="container max-w-4xl">
                <div className="section-header">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="card">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between text-left"
                            >
                                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 animate-fade-in-up">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
