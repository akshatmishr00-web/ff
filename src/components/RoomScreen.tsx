import React, { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import { ArrowLeft, Users, Lock, Unlock, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const RoomScreen: React.FC = () => {
    const setScreen = useGameStore((state) => state.setScreen);
    const user = useGameStore((state) => state.user);

    const [created, setCreated] = useState(false);
    const [password, setPassword] = useState('');
    const [roomId] = useState(() => Math.floor(1000000 + Math.random() * 9000000).toString());

    return (
        <div className="absolute inset-0 bg-[#0a0a0a] z-40 flex flex-col overflow-hidden text-gray-200">
            {/* Header */}
            <div className="w-full h-20 bg-blue-900/20 border-b border-blue-500/20 flex items-center px-6 gap-6 relative z-10">
                <button
                    onClick={() => setScreen('lobby')}
                    className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="text-white" />
                </button>
                <h1 className="text-3xl font-black italic text-white uppercase tracking-wider">
                    Custom Room
                </h1>
            </div>

            <div className="flex-1 flex max-w-6xl w-full mx-auto p-4 md:p-8 gap-8">
                {/* Left Side: Room Setup or Info */}
                <div className="w-[400px] flex flex-col gap-6">
                    {!created ? (
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="bg-black/40 border border-white/10 rounded-xl p-6"
                        >
                            <h2 className="text-xl font-bold text-yellow-400 mb-6 uppercase">Create Room</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs text-gray-400 font-bold uppercase mb-2">Room Name</label>
                                    <input type="text" value={`${user?.name}'s Room`} disabled className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none" />
                                </div>

                                <div>
                                    <label className="block text-xs text-gray-400 font-bold uppercase mb-2">Password (Optional)</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter password..."
                                            className="w-full bg-white/5 border border-white/10 rounded p-3 pl-10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                        <Lock className="absolute left-3 top-3.5 text-gray-500" size={16} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-gray-400 font-bold uppercase mb-2">Game Mode</label>
                                    <div className="w-full bg-blue-900/30 border border-blue-500/50 rounded p-3 text-white font-bold flex justify-between items-center cursor-not-allowed">
                                        <span>Clash Royal</span>
                                        <Lock size={14} className="text-blue-400" />
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-1">* Mode locked to Clash Royal for this simulator.</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setCreated(true)}
                                className="w-full mt-8 bg-yellow-500 text-yellow-950 font-black italic uppercase py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(234,179,8,0.3)] active:scale-95 text-lg tracking-wider"
                            >
                                Confirm
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-black/40 border border-blue-500/30 rounded-xl p-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] -z-10"></div>
                            <h2 className="text-2xl font-black italic text-white mb-2 uppercase break-words">{user?.name}'s Room</h2>
                            <div className="flex gap-4 mb-6 text-sm">
                                <span className="flex items-center gap-1 text-gray-400 border border-white/10 rounded px-2 py-1 bg-white/5">
                                    ID: <span className="text-yellow-400 font-mono">{roomId}</span>
                                </span>
                                <span className="flex items-center gap-1 text-gray-400 border border-white/10 rounded px-2 py-1 bg-white/5">
                                    {password ? <Lock size={14} /> : <Unlock size={14} />}
                                    {password || 'No Pass'}
                                </span>
                            </div>

                            <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 mb-6">
                                <p className="text-sm font-bold text-blue-400 uppercase mb-1">Clash Royal</p>
                                <p className="text-xs text-gray-400">Map: Bermuda • Drop: Normal</p>
                            </div>

                            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black italic uppercase py-4 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(249,115,22,0.4)] flex justify-center items-center gap-2 text-xl tracking-widest">
                                <Play fill="black" size={20} /> START GAME
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Right Side: Player List */}
                {created && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-1 bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold uppercase flex items-center gap-2">
                                <Users className="text-blue-400" /> Players
                            </h3>
                            <span className="text-gray-400 font-mono text-sm">(1/8)</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-1 content-start">
                            {/* Slot 1: You */}
                            <div className="border border-yellow-500/50 bg-yellow-900/10 rounded-lg p-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-gray-800 border border-yellow-500">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}&backgroundColor=b6e3f4`} alt="Avatar" className="w-full h-full rounded" />
                                </div>
                                <div>
                                    <p className="font-bold text-yellow-400 text-sm overflow-hidden text-ellipsis whitespace-nowrap">{user?.name}</p>
                                    <p className="text-[10px] text-gray-500 uppercase">Host</p>
                                </div>
                            </div>

                            {/* Empty Slots */}
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="border border-white/5 bg-white/5 rounded-lg p-3 flex justify-center items-center h-[66px] border-dashed">
                                    <p className="text-xs text-gray-600 font-black uppercase tracking-widest italic">Wait</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
