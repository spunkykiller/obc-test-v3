'use client';
import { useModal } from '@/context/ModalContext';

interface StickyTourFormProps {
    locationName?: string;
}

export default function StickyTourForm({ locationName }: StickyTourFormProps) {
    const { openModal } = useModal();

    return (
        <div className="bg-white border border-border-light shadow-2xl p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-bold text-text-black mb-2">
                Interested in {locationName || 'this location'}?
            </h3>
            <p className="text-text-muted text-sm mb-6">
                Fill out the form below and our team will get back to you with pricing and availability within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); openModal(); }}>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-border-light bg-transparent py-3 text-text-black focus:outline-none focus:border-primary transition"
                    readOnly
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-border-light bg-transparent py-3 text-text-black focus:outline-none focus:border-primary transition"
                    readOnly
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-b border-border-light bg-transparent py-3 text-text-black focus:outline-none focus:border-primary transition"
                    readOnly
                />

                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-background-white px-8 py-4 font-bold transition shadow-lg mt-6 uppercase tracking-wider text-sm"
                >
                    Book a Tour
                </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border-light text-center">
                <p className="text-sm text-text-muted mb-2">Need immediate assistance?</p>
                <a href="tel:+919999999999" className="text-text-charcoal font-bold hover:text-primary transition flex items-center justify-center">
                    📞 +91 999 999 9999
                </a>
            </div>
        </div>
    );
}
