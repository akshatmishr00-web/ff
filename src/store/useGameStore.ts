import { create } from 'zustand';

export type ScreenType = 'login' | 'lobby' | 'luck_royale' | 'weapons' | 'room';

interface User {
    id: string;
    name: string;
}

interface GameState {
    user: User | null;
    diamonds: number;
    gold: number;
    currentScreen: ScreenType;
    loginAsGuest: () => void;
    logout: () => void;
    setScreen: (screen: ScreenType) => void;
}

export const useGameStore = create<GameState>((set) => ({
    user: null,
    diamonds: 999999,
    gold: 999999,
    currentScreen: 'login',
    loginAsGuest: () => {
        const randomId = Math.floor(100000000 + Math.random() * 900000000).toString();
        set({
            user: { id: randomId, name: 'Guest_' + randomId.substring(0, 4) },
            currentScreen: 'lobby'
        });
    },
    logout: () => set({ user: null, currentScreen: 'login' }),
    setScreen: (screen) => set({ currentScreen: screen }),
}));
