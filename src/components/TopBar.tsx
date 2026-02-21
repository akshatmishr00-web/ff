import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { Coins, Gem, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export const TopBar: React.FC = () => {
    const { user, diamonds, gold, logout } = useGameStore();

    if (!user) return null;

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none"
        >
            {/* Left side: Profile */}
            <div className="flex bg-black/50 backdrop-blur-md rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-white/10 pointer-events-auto overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border-r border-white/10">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}&backgroundColor=b6e3f4`}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center px-4 pr-6">
                    <span className="text-white font-bold text-lg drop-shadow-md tracking-wide">{user.name}</span>
                    <span className="text-yellow-400 text-xs font-mono">UID: {user.id}</span>
                </div>
            </div>

            {/* Right side: Resources & Controls */}
            <div className="flex gap-4 pointer-events-auto">
                {/* Currencies */}
                <div className="flex gap-3 bg-black/40 backdrop-blur border border-white/10 p-2 rounded-full shadow-lg items-center px-4">
                    <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                        <Coins className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" size={20} />
                        <span className="text-white font-bold font-mono tracking-wider">{gold.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                        <Gem className="text-cyan-400 fill-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" size={20} />
                        <span className="text-white font-bold font-mono tracking-wider">{diamonds.toLocaleString()}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <button className="w-12 h-12 bg-black/50 backdrop-blur rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors active:scale-95 shadow-lg">
                        <Settings size={22} className="text-gray-300" />
                    </button>
                    <button
                        onClick={logout}
                        className="w-12 h-12 bg-red-600/80 backdrop-blur rounded-lg border border-red-400/30 flex items-center justify-center hover:bg-red-500 transition-colors active:scale-95 shadow-[0_0_10px_rgba(220,38,38,0.4)]"
                    >
                        <LogOut size={22} className="text-white translate-x-0.5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
