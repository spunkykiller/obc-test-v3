'use client';
import { useState } from 'react';
import { ShieldCheckIcon, ClockIcon, WifiIcon } from '@heroicons/react/24/outline'; // Using exact matched valid icons

export default function GoogleAdsVariant() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API delay for CRM Google sheets
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1200);
    };

    return (
        <div className="w-full">
            {/* Hero Section (Split Layout for high desktop conversion) */}
            <section className="w-full min-h-[85vh] flex flex-col lg:flex-row bg-background-pearl">

                {/* Left Side - Trust & Imagery */}
                <div className="lg:w-[55%] relative p-8 md:p-16 flex flex-col justify-center">
                    <div className="relative z-10 max-w-xl">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6 rounded-sm">
                            Premium Private Offices
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-text-black leading-tight mb-6">
                            Skip the cafe noise. <br /><span className="italic text-primary">Get a real desk.</span>
                        </h1>
                        <p className="text-lg text-text-charcoal mb-8 max-w-lg leading-relaxed">
                            Fully furnished, private cubes and high-speed co-working spaces in the heart of Visakhapatnam. Access 24/7.
                        </p>

                        {/* Social Proof / Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border-light">
                            <div className="flex items-center gap-3">
                                <ClockIcon className="h-6 w-6 text-primary flex-shrink-0" />
                                <span className="text-sm font-semibold text-text-black">24/7 Secure<br />Access</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <WifiIcon className="h-6 w-6 text-primary flex-shrink-0" />
                                <span className="text-sm font-semibold text-text-black">Enterprise<br />Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheckIcon className="h-6 w-6 text-primary flex-shrink-0" />
                                <span className="text-sm font-semibold text-text-black">Biometric<br />Security</span>
                            </div>
                        </div>
                    </div>

                    {/* Faint Background image pattern */}
                    <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                </div>

                {/* Right Side - Aggressive Form */}
                <div className="lg:w-[45%] bg-background-white flex flex-col justify-center items-center p-8 md:p-16 shadow-[-10px_0_30px_rgba(0,0,0,0.03)] z-10 relative">
                    <div className="w-full max-w-md">

                        {submitted ? (
                            <div className="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
                                <h3 className="text-2xl font-bold text-green-800 mb-2">Tour Request Sent!</h3>
                                <p className="text-green-700">Our team will call you at {formData.phone} shortly to confirm your booking.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="font-serif text-3xl font-bold text-text-black mb-2">Book Your Visit Today</h2>
                                <p className="text-sm text-text-muted mb-8">Enter your details below and reserve your space.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex">
                                            <div className="border border-r-0 border-border-light bg-background-slate px-4 py-4 flex items-center justify-center text-text-charcoal font-medium">
                                                +91
                                            </div>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Mobile Number"
                                                className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email Address"
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-background-white px-8 py-5 font-semibold text-lg transition shadow-lg mt-4 uppercase tracking-wide"
                                    >
                                        {isSubmitting ? 'Securing...' : 'Claim Your Space'}
                                    </button>
                                    <p className="text-xs text-center text-text-muted mt-4">
                                        No credit card required. Lock in your trial access now.
                                    </p>
                                </form>
                            </>
                        )}

                    </div>
                </div>

            </section>
        </div>
    );
}
