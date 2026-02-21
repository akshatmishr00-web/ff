import React from 'react';
import { useGameStore } from '../store/useGameStore';
import type { ScreenType } from '../store/useGameStore';
import { Store, Crosshair, Users, Gift, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const LobbyScreen: React.FC = () => {
    const setScreen = useGameStore((state) => state.setScreen);

    const leftMenu = [
        { icon: Store, label: 'STORE', action: () => { } },
        { icon: Gift, label: 'LUCK ROYALE', action: () => setScreen('luck_royale') },
        { icon: Crosshair, label: 'WEAPONS', action: () => setScreen('weapons') },
        { icon: Users, label: 'ROOM', action: () => setScreen('room') },
    ];

    return (
        <div className="relative w-full h-screen bg-ffdark overflow-hidden selection:bg-none flex items-center justify-center">
            {/* Background Environment */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform opacity-70"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-transparent to-[#0f172a]/80"></div>
            </div>

            {/* Main Character Display */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="z-10 flex flex-col items-center justify-end h-full pb-20 pointer-events-none"
            >
                {/* Fake 3D Character standing */}
                <div className="relative w-64 h-96 flex items-end justify-center">
                    <div className="absolute w-40 h-8 bg-black/60 rounded-[100%] blur-md bottom-[-10px]"></div>

                    <img
                        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Akshat&size=300&backgroundColor=transparent&baseColor=f9c9b6&hair=short02&eyes=variant04&mouth=variant02"
                        alt="Character"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10"
                    />
                    {/* Character Nameplate */}
                    <div className="absolute -bottom-6 bg-gradient-to-r from-orange-600 to-red-600 px-6 py-1 rounded-full border-2 border-yellow-400 shadow-[0_0_15px_rgba(234,88,12,0.6)] font-black italic tracking-widest text-lg z-20 pointer-events-auto hover:scale-105 transition-transform cursor-pointer">
                        AKSHAT
                    </div>
                </div>
            </motion.div>

            {/* Left Navigation Panels */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20"
            >
                {leftMenu.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={i}
                            onClick={item.action}
                            className="group relative w-16 h-[4.5rem] bg-black/40 backdrop-blur hover:bg-white/10 border border-white/5 rounded-r-xl flex flex-col items-center justify-center gap-1 transition-all active:scale-95"
                        >
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-yellow-400 transition-all group-hover:h-full rounded-r"></div>
                            <Icon size={24} className="text-gray-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-all" />
                            <span className="text-[9px] font-bold text-gray-400 group-hover:text-white uppercase tracking-tighter text-center">
                                {item.label}
                            </span>
                        </button>
                    )
                })}
            </motion.div>

            {/* Right Side Mode Panel & Start */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="absolute right-8 bottom-12 flex flex-col items-end gap-6 z-20"
            >
                {/* Mode Selector */}
                <div className="bg-black/60 backdrop-blur-md border border-yellow-500/30 rounded-xl p-4 w-72 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-black/70 transition-colors group">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Ranked</span>
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-white" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-900 rounded-lg overflow-hidden border-2 border-yellow-400">
                            <img src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Map" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black italic text-white drop-shadow-md">CLASH ROYAL</span>
                            <span className="text-sm text-gray-400">Bermuda</span>
                        </div>
                    </div>
                </div>

                {/* Start Button */}
                <button className="relative overflow-hidden w-64 h-20 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.4)] flex items-center justify-center group active:scale-95 transition-transform">
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                    <span className="text-4xl font-black italic text-yellow-950 uppercase tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] relative z-10">
                        START
                    </span>
                    <div className="absolute right-4 bottom-2 text-yellow-800 font-bold text-xs opacity-80">
                        +20% EXP
                    </div>
                </button>
            </motion.div>

        </div>
    );
};
