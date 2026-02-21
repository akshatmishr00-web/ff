import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const LoginScreen: React.FC = () => {
    const loginAsGuest = useGameStore((state) => state.loginAsGuest);

    return (
        <div className="relative w-full h-screen bg-ffdark flex flex-col items-center justify-center overflow-hidden">
            {/* Background with simple generic game aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-ffdark/90 z-0"></div>

            {/* Cool background particles / shapes */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 flex flex-col items-center"
            >
                <h1 className="text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)] mb-2 uppercase tracking-tighter">
                    Free Fire
                </h1>
                <h2 className="text-xl font-bold tracking-[0.2em] text-gray-400 mb-12 uppercase">
                    Simulator
                </h2>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl flex flex-col items-center w-80">
                    <UserCircle size={64} className="text-gray-400 mb-6" />
                    <button
                        onClick={loginAsGuest}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-bold py-3 px-6 rounded-lg transition-all active:scale-95 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                    >
                        <UserCircle size={20} />
                        GUEST LOGIN
                    </button>

                    <div className="mt-6 flex items-center justify-center gap-4 w-full">
                        <div className="h-px bg-white/20 flex-1"></div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Other Options</span>
                        <div className="h-px bg-white/20 flex-1"></div>
                    </div>

                    <div className="flex gap-4 mt-6 opacity-50 cursor-not-allowed">
                        {/* Fake disabled buttons */}
                        <div className="w-10 h-10 rounded bg-blue-800 flex items-center justify-center font-bold">f</div>
                        <div className="w-10 h-10 rounded bg-red-600 flex items-center justify-center font-bold">G</div>
                    </div>
                </div>

                <p className="mt-8 text-xs text-gray-500">
                    Version 1.0.0 • React Simulator
                </p>
            </motion.div>
        </div>
    );
};
