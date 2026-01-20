'use client';

import { useState, FormEvent } from 'react';

interface FormData {
    zipCode: string;
    concreteTypes: string[];
    name: string;
    email: string;
    phone: string;
    timeline: string;
}

export default function LeadForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        zipCode: '',
        concreteTypes: [],
        name: '',
        email: '',
        phone: '',
        timeline: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 5);
        setFormData({ ...formData, zipCode: value });
    };

    const handleConcreteTypeToggle = (type: string) => {
        setFormData(prev => ({
            ...prev,
            concreteTypes: prev.concreteTypes.includes(type)
                ? prev.concreteTypes.filter(t => t !== type)
                : [...prev.concreteTypes, type]
        }));
    };

    const nextStep = () => {
        if (currentStep === 1 && formData.zipCode.length === 5) {
            setCurrentStep(2);
        } else if (currentStep === 2 && formData.concreteTypes.length > 0) {
            setCurrentStep(3);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({
                        zipCode: '',
                        concreteTypes: [],
                        name: '',
                        email: '',
                        phone: '',
                        timeline: '',
                    });
                    setCurrentStep(1);
                    setSubmitSuccess(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const concreteTypeOptions = [
        { value: 'driveway', label: 'Driveway', icon: '🚗' },
        { value: 'sidewalk', label: 'Sidewalk', icon: '🚶' },
        { value: 'patio', label: 'Patio', icon: '🏡' },
        { value: 'garage', label: 'Garage Floor', icon: '🏠' },
        { value: 'pool', label: 'Pool Deck', icon: '🏊' },
        { value: 'other', label: 'Other', icon: '❓' },
    ];

    if (submitSuccess) {
        return (
            <div className="card bg-gradient-to-br from-primary-50 to-white border-primary-200 text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
                <p className="text-gray-600">We'll connect you with top contractors in your area within 24 hours.</p>
            </div>
        );
    }

    return (
        <div className="card shadow-2xl" id="quote-form">
            {/* Form Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Quote</h2>
                <p className="text-gray-600">Takes 60 seconds • No credit card required</p>
            </div>

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
                {[1, 2, 3].map((step) => (
                    <div
                        key={step}
                        className={`h-2 flex-1 rounded-full transition-all ${step <= currentStep ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E]' : 'bg-gray-200'
                            }`}
                    />
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                {/* Step 1: ZIP Code */}
                {currentStep === 1 && (
                    <div className="animate-fade-in-up">
                        <div className="form-group">
                            <label htmlFor="zipCode">What's your ZIP code?</label>
                            <input
                                type="text"
                                id="zipCode"
                                value={formData.zipCode}
                                onChange={handleZipCodeChange}
                                placeholder="Enter ZIP code"
                                required
                                pattern="[0-9]{5}"
                                maxLength={5}
                                className="text-lg"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={nextStep}
                            disabled={formData.zipCode.length !== 5}
                            className="btn btn-primary btn-block"
                        >
                            Continue
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Step 2: Concrete Type */}
                {currentStep === 2 && (
                    <div className="animate-fade-in-up">
                        <div className="form-group">
                            <label>What type of concrete needs leveling?</label>
                            <div className="grid grid-cols-2 gap-3 mt-3">
                                {concreteTypeOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleConcreteTypeToggle(option.value)}
                                        className={`p-4 rounded-lg border-2 transition-all text-left ${formData.concreteTypes.includes(option.value)
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-200'
                                            }`}
                                    >
                                        <div className="text-2xl mb-1">{option.icon}</div>
                                        <div className="font-semibold text-sm">{option.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button type="button" onClick={prevStep} className="btn btn-secondary flex-1">
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={formData.concreteTypes.length === 0}
                                className="btn btn-primary flex-1"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                    <div className="animate-fade-in-up space-y-4">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Smith"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="(555) 123-4567"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="timeline">When do you need this done?</label>
                            <select
                                id="timeline"
                                value={formData.timeline}
                                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                required
                            >
                                <option value="">Select timeline</option>
                                <option value="asap">As soon as possible</option>
                                <option value="week">Within a week</option>
                                <option value="month">Within a month</option>
                                <option value="planning">Just planning ahead</option>
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <button type="button" onClick={prevStep} className="btn btn-secondary flex-1">
                                Back
                            </button>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary flex-1">
                                {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </form>

            {/* Trust Footer */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L3 3V7C3 10.5 5.5 13.5 8 15C10.5 13.5 13 10.5 13 7V3L8 1Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Your information is secure and never shared</span>
            </div>
        </div>
    );
}
