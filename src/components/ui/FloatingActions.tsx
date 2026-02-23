'use client';

import { ChatBubbleLeftRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'; // Will use generic calendar icon for now

export default function FloatingActions() {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
            {/* Book a Tour Button */}
            <button
                className="group relative flex items-center justify-center w-12 h-16 bg-text-charcoal text-white hover:bg-primary transition-all duration-300 shadow-lg rounded-l-md overflow-hidden"
                title="Book a Tour"
            >
                <CalendarDaysIcon className="h-6 w-6 z-10" />
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-12 bg-primary text-white font-semibold text-sm px-4 py-5 whitespace-nowrap rounded-l-md transition-all duration-300">
                    Book a Tour
                </span>
            </button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-16 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 shadow-lg rounded-l-md overflow-hidden"
                title="Chat on WhatsApp"
            >
                <ChatBubbleLeftRightIcon className="h-6 w-6 z-10" />
                <span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-12 bg-[#25D366] text-white font-semibold text-sm px-4 py-5 whitespace-nowrap rounded-l-md transition-all duration-300">
                    Chat on WhatsApp
                </span>
            </a>
        </div>
    );
}
