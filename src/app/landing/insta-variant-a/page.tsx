'use client';
import { useState, useRef } from 'react';
import { ArrowDownIcon, PlayCircleIcon } from '@heroicons/react/24/outline'; // exact valid icons

export default function InstaVariantA() {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1200);
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-background-white min-h-screen pb-24 shadow-2xl overflow-hidden relative">

            {/* Mobile-first Hero Image/Video Placeholder */}
            <div className="relative w-full h-[60vh] bg-background-slate">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Fake Play Button to simulate video ad landing */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircleIcon className="w-20 h-20 text-white/80" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h1 className="font-serif text-3xl font-bold text-background-white leading-tight mb-2 shadow-sm">
                        Workspaces designed for <span className="text-primary italic">impact.</span>
                    </h1>
                    <p className="text-border-light text-sm shadow-sm">
                        Premium amenities, secure access, and enterprise Wi-Fi in Visakhapatnam.
                    </p>
                </div>
            </div>

            {/* Social Proof Bar */}
            <div className="flex justify-between items-center py-4 px-6 bg-text-charcoal text-white text-xs font-bold uppercase tracking-widest">
                <span>24/7 Access</span>
                <span className="text-primary">•</span>
                <span>Secure</span>
                <span className="text-primary">•</span>
                <span>Premium</span>
            </div>

            {/* The Scroll Hook */}
            <div className="px-6 py-10 bg-background-pearl text-center">
                <h2 className="text-xl font-bold text-text-black mb-4">Claim Your Free Day Pass</h2>
                <p className="text-text-charcoal mb-6">Experience the luxury standard of co-working. Enter your details to book a tour or get a free trial pass from our team.</p>
                <button onClick={scrollToForm} className="w-12 h-12 mx-auto bg-background-white border-2 border-primary rounded-full flex items-center justify-center animate-bounce">
                    <ArrowDownIcon className="w-6 h-6 text-primary" />
                </button>
            </div>

            {/* The 2-Field Form Section */}
            <div ref={formRef} className="px-6 py-10">
                {submitted ? (
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center shadow-inner">
                        <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
                        <p className="text-sm text-green-700">A dedicated manager will SMS/Call {formData.phone} shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className="w-full border-b-2 border-border-light bg-transparent p-4 text-text-black focus:outline-none focus:border-primary transition text-lg"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="flex items-end">
                            <div className="p-4 text-text-muted font-medium text-lg border-b-2 border-border-light">
                                +91
                            </div>
                            <input
                                type="tel"
                                required
                                placeholder="Mobile Number"
                                className="w-full border-b-2 border-border-light bg-transparent p-4 text-text-black focus:outline-none focus:border-primary transition text-lg"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-background-white px-8 py-5 font-bold text-lg transition shadow-xl mt-6 rounded-sm uppercase tracking-wider"
                        >
                            {isSubmitting ? 'Securing...' : 'Claim Free Pass'}
                        </button>
                        <p className="text-xs text-center text-text-muted mt-4 font-medium">By submitting, you agree to our privacy terms.</p>
                    </form>
                )}
            </div>

            {/* Sticky Mobile CTA (Only visible when form might be out of view, simplified logic here: always stick to bottom) */}
            {!submitted && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-white/90 backdrop-blur-md border-t border-border-light z-50 flex justify-center lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                    <button onClick={scrollToForm} className="w-full max-w-sm bg-text-charcoal text-white font-bold py-4 rounded-sm shadow-lg text-sm uppercase tracking-widest">
                        Get Started Now
                    </button>
                </div>
            )}

        </div>
    );
}
