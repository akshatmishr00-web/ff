import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const guns = [
    { id: 1, name: 'AK-47', skin: 'Blue Flame Draco', tier: 'evo', color: 'from-blue-600 to-cyan-400', image: 'https://images.unsplash.com/photo-1595590424283-b8f1784cb2c8?w=300&h=150&fit=crop' },
    { id: 2, name: 'M1887', skin: 'Rapper Underworld', tier: 'mythic', color: 'from-purple-600 to-fuchsia-400', image: 'https://images.unsplash.com/photo-1588783948938-1647895e542d?w=300&h=150&fit=crop' },
    { id: 3, name: 'MP40', skin: 'Predatory Cobra', tier: 'evo', color: 'from-red-600 to-orange-400', image: 'https://images.unsplash.com/photo-1542614392-7100b46ebf7b?w=300&h=150&fit=crop' },
    { id: 4, name: 'SCAR', skin: 'Megalodon Alpha', tier: 'evo', color: 'from-red-800 to-red-500', image: 'https://images.unsplash.com/photo-1601618287841-3dc19adbc56b?w=300&h=150&fit=crop' },
    { id: 5, name: 'AWM', skin: 'Duke Swallowtail', tier: 'legendary', color: 'from-yellow-600 to-amber-300', image: 'https://images.unsplash.com/photo-1599383824388-72535a3f28cf?w=300&h=150&fit=crop' },
    { id: 6, name: 'M1014', skin: 'Green Flame Draco', tier: 'evo', color: 'from-green-600 to-emerald-400', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=300&h=150&fit=crop' },
];

export const WeaponsScreen: React.FC = () => {
    const setScreen = useGameStore((state) => state.setScreen);

    return (
        <div className="absolute inset-0 bg-gray-900 z-40 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="w-full h-20 bg-black/50 border-b border-white/10 flex items-center px-6 gap-6 relative z-10">
                <button
                    onClick={() => setScreen('lobby')}
                    className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="text-white" />
                </button>
                <div>
                    <h1 className="text-3xl font-black italic text-white uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        Weapons Vault
                    </h1>
                    <p className="text-green-400 text-sm font-bold">ALL SKINS UNLOCKED</p>
                </div>
            </div>

            {/* Grid */}
            <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {guns.map((gun) => (
                        <div
                            key={gun.id}
                            className={`relative h-48 rounded-xl overflow-hidden border-2 border-white/20 bg-gradient-to-br ${gun.color} p-1 shadow-xl hover:scale-105 transition-transform cursor-pointer group`}
                        >
                            <div className="absolute top-2 left-2 z-20 bg-black/60 backdrop-blur px-2 py-1 flex items-center gap-1 rounded text-xs text-white border border-white/20 uppercase tracking-wider">
                                <CheckCircle2 size={12} className="text-green-400" /> Unlocked
                            </div>
                            <div className="absolute top-2 right-2 z-20 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-yellow-400 uppercase border border-yellow-500/50">
                                {gun.tier}
                            </div>

                            <div className="w-full h-full bg-black/80 rounded-lg relative overflow-hidden flex flex-col p-4 justify-between">
                                {/* Gun Image placeholder - Using stock photos creatively masked to look like gun silhouettes */}
                                <div className="absolute inset-x-0 top-10 bottom-6 flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-500">
                                    <div className="w-[80%] h-16 bg-gradient-to-r from-gray-500 to-gray-300 rounded-sm custom-clip-gun shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
                                    {/* Fake gun shape effect using image masking */}
                                    <img src={gun.image} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" alt="texture" />
                                </div>

                                <div className="mt-auto relative z-10 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl font-black italic text-white uppercase drop-shadow-md">{gun.name}</h3>
                                        <p className="text-gray-300 text-xs tracking-widest uppercase">{gun.skin}</p>
                                    </div>
                                    <button className="bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded uppercase hover:bg-yellow-400 transition-colors">
                                        Equip
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
