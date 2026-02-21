import React, { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import { ArrowLeft, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LuckRoyaleScreen: React.FC = () => {
    const setScreen = useGameStore((state) => state.setScreen);
    const [spinning, setSpinning] = useState(false);
    const [reward, setReward] = useState<string | null>(null);

    const handleSpin = () => {
        if (spinning) return;
        setSpinning(true);
        setReward(null);

        // Fake spin delay
        setTimeout(() => {
            setSpinning(false);
            setReward("HIP HOP BUNDLE");
        }, 2000);
    };

    return (
        <div className="absolute inset-0 bg-ffdark z-40 flex overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-pink-900/80"></div>
            </div>

            {/* Back button */}
            <button
                onClick={() => setScreen('lobby')}
                className="absolute top-6 left-6 z-50 w-12 h-12 bg-black/50 backdrop-blur rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
                <ArrowLeft className="text-white" />
            </button>

            {/* Title */}
            <div className="absolute top-6 left-24 z-50 flex items-center h-12">
                <h1 className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_10px_rgba(216,180,254,0.8)] uppercase">
                    Diamond Royale
                </h1>
            </div>

            {/* Showcase */}
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-96 h-[32rem] z-10"
                >
                    {/* Glowing aura */}
                    <div className={`absolute inset-0 bg-fuchsia-500 rounded-full blur-[100px] opacity-30 transition-opacity duration-500 ${spinning ? 'animate-pulse opacity-70' : ''}`}></div>

                    <img
                        src="https://api.dicebear.com/7.x/adventurer/svg?seed=HipHop&size=400&backgroundColor=transparent&baseColor=8b5cf6&hair=short16&clothing=hoodie&accessories=sunglasses"
                        alt="Hip Hop Bundle"
                        className={`w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(217,70,239,0.5)] transition-transform duration-500 ${spinning ? 'scale-110' : ''}`}
                    />

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 border border-fuchsia-500 px-6 py-2 rounded-lg backdrop-blur text-center w-64 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                        <h2 className="text-2xl font-black italic text-fuchsia-400 uppercase tracking-wider">Hip Hop</h2>
                        <p className="text-xs text-fuchsia-200">Mythic Outfit Bundle</p>
                    </div>
                </motion.div>
            </div>

            {/* Spin Controls */}
            <div className="absolute right-12 bottom-12 z-20 flex flex-col items-center gap-4">
                <button
                    onClick={handleSpin}
                    disabled={spinning}
                    className={`relative overflow-hidden w-64 h-20 bg-gradient-to-r from-fuchsia-600 to-pink-500 rounded-xl shadow-[0_0_30px_rgba(217,70,239,0.6)] flex items-center justify-center group transition-all ${spinning ? 'opacity-80 scale-95' : 'hover:scale-105 active:scale-95'}`}
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                    <div className="flex flex-col items-center relative z-10">
                        <span className="text-2xl font-black italic text-white uppercase tracking-widest drop-shadow-md">
                            {spinning ? 'SPINNING...' : 'SPIN X10'}
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-200 font-bold text-sm">600</span>
                            <Gem size={12} className="text-cyan-300 fill-cyan-300" />
                        </div>
                    </div>
                </button>
            </div>

            {/* Reward Popup */}
            <AnimatePresence>
                {reward && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center">
                            <h2 className="text-5xl font-black italic text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,1)] uppercase mb-8">
                                CONGRATULATIONS!
                            </h2>
                            <div className="w-64 h-64 bg-fuchsia-900/50 border-2 border-fuchsia-400 rounded-2xl flex items-center justify-center p-4 shadow-[0_0_50px_rgba(217,70,239,0.5)]">
                                <img
                                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=HipHop&size=200&backgroundColor=transparent&baseColor=8b5cf6"
                                    alt="Hip Hop Bundle"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-3xl font-bold mt-6 text-fuchsia-200">{reward}</h3>
                            <button
                                onClick={() => setReward(null)}
                                className="mt-8 px-12 py-3 bg-white text-black font-bold uppercase rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                EQUIP
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
