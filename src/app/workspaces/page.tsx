import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const WORKSPACES = [
    {
        title: 'Independent Business Cubes',
        id: 'cubes',
        desc: 'Fully furnished, private cubes designed for focus. Ideal for solopreneurs, remote executives, and startups looking to scale without infrastructure burdens.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
    },
    {
        title: 'Co-Working Space',
        id: 'coworking',
        desc: 'Dynamic desks in our premium lounge areas. Plug-and-play environments with enterprise Wi-Fi and access to the cafeteria, juice bar, and community events.',
        image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80'
    },
    {
        title: 'Conference Rooms',
        id: 'conference',
        desc: 'State-of-the-art meeting halls equipped with LED TVs, projectors, and premium seating to host your most important client presentations.',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80'
    }
];

export const metadata = {
    title: 'Workspaces | Orange Business Centre',
};

export default function WorkspacesIndex() {
    return (
        <div className="w-full bg-background-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-black leading-tight mb-4">
                        Curated Spaces for <span className="text-primary italic">Every Need</span>
                    </h1>
                    <p className="text-lg text-text-charcoal leading-relaxed">
                        Whether you need the quiet of an independent cube or the energy of an open co-working desk, we have the perfect plug-and-play solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {WORKSPACES.map((space, index) => (
                        <div key={space.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 h-[400px] bg-background-slate rounded-sm overflow-hidden relative shadow-lg">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                                    style={{ backgroundImage: `url('${space.image}')` }}
                                ></div>
                            </div>

                            <div className="w-full md:w-1/2 md:p-12">
                                <h2 className="font-serif text-3xl font-bold text-text-black mb-4">{space.title}</h2>
                                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                                    {space.desc}
                                </p>
                                <Link href={`/workspaces/${space.id}`} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition group">
                                    EXPLORE {space.title.toUpperCase()}
                                    <ArrowLongRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
