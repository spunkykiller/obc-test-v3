export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background-white font-sans text-text-charcoal relative selection:bg-primary/30">
            {/* 
        This specialized layout completely removes the global Header, Footer, and Floating Actions.
        It traps the user in a high-conversion environment (Zero distraction architecture).
      */}
            <main className="w-full flex-grow flex flex-col items-center">
                {/* Simple Top Bar just to show trustworthiness, NOT navigation */}
                <div className="w-full py-6 border-b border-border-light bg-background-white flex justify-center sticky top-0 z-50 shadow-sm">
                    <div className="font-serif text-3xl font-bold tracking-tight text-text-black">
                        <span className="text-primary">Orange</span> <span className="hidden sm:inline">Business Centre</span>
                    </div>
                </div>

                {children}
            </main>
        </div>
    );
}
