import { ArrowRight } from "lucide-react";

export const MobileHero = () => {
    return (
        <div className="relative h-svh w-full bg-[#0A0A0A] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1988&auto=format&fit=crop"
                    alt="Fashion Goat Placeholder"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between px-6 py-12 md:px-12">

                {/* Header / Nav Placeholder (Visual only for mobile hero) */}
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold text-xl tracking-tighter">[ O ]</div>
                    {/* Menu Icon Placeholder */}
                    <div className="space-y-1.5 cursor-pointer">
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-4 h-0.5 bg-white ml-auto"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-auto mb-12 space-y-6">
                    {/* Social Proof / Tag */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gray-500 border border-[#0A0A0A]" />
                            <div className="w-6 h-6 rounded-full bg-gray-400 border border-[#0A0A0A]" />
                            <div className="w-6 h-6 rounded-full bg-gray-300 border border-[#0A0A0A]" />
                        </div>
                        <p className="text-xs text-gray-400 font-mono"><span className="text-white">&lt;1,000</span> users have joined</p>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl font-bold leading-[0.9] text-white tracking-tighter font-oswald uppercase">
                        Discover Bold,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Futuristic</span><br />
                        Style
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Enter a realm where fashion fuses with innovation. Our vision combines art, technology, and individuality.
                    </p>

                    {/* Email Input */}
                    <div className="flex flex-col gap-3 mt-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter Email ID"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>
                        <button className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            Join Waitlist <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Footer / Number */}
                    <div className="pt-4">
                        <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">01. THE GOAT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
