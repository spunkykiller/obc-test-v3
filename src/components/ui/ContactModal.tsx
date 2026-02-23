'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ContactModal() {
    const { isOpen, closeModal } = useModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        city: 'Visakhapatnam',
        workspace: '',
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    closeModal();
                    setFormData({ fullName: '', company: '', email: '', phone: '', city: 'Visakhapatnam', workspace: '' });
                }, 3000);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background-charcoal/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-background-white w-full max-w-3xl rounded-none shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="flex justify-between items-center p-6 md:p-10 border-b border-border-light sticky top-0 bg-background-white z-10">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-black">
                        Got questions? <br /><span className="italic text-primary">We've got answers.</span>
                    </h2>
                    <button
                        onClick={closeModal}
                        className="p-2 hover:bg-background-slate rounded-full transition absolute top-6 right-6"
                    >
                        <XMarkIcon className="h-8 w-8 text-text-charcoal hover:text-primary transition" />
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-10">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-12">
                            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-text-black mb-2">Thank you!</h3>
                            <p className="text-text-muted">Our team will be in touch shortly.</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-base text-text-charcoal mb-8">
                                Get in touch with us for more information on any of the products or services we offer.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                            placeholder="Full name*"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                            placeholder="Company name"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                            placeholder="Work e-mail address*"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="border border-r-0 border-border-light bg-background-slate px-4 py-4 flex items-center justify-center text-text-charcoal font-medium">
                                            +91
                                        </div>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition"
                                            placeholder="Phone number*"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <select
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition appearance-none"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        >
                                            <option value="Visakhapatnam">Visakhapatnam</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            required
                                            className="w-full border border-border-light bg-background-pearl p-4 text-text-black focus:outline-none focus:border-primary transition appearance-none"
                                            value={formData.workspace}
                                            onChange={(e) => setFormData({ ...formData, workspace: e.target.value })}
                                        >
                                            <option value="" disabled>Workspace type*</option>
                                            <option value="Independent Cubes">Independent Cubes</option>
                                            <option value="Co-working Desk">Co-working Desk</option>
                                            <option value="Conference Room">Conference Room</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border-light flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto bg-primary hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed text-background-white px-10 py-4 font-semibold text-lg transition shadow-md"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}
