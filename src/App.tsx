import React from 'react';
import { useGameStore } from './store/useGameStore';
import { LoginScreen } from './components/LoginScreen';
import { LobbyScreen } from './components/LobbyScreen';
import { TopBar } from './components/TopBar';
import { LuckRoyaleScreen } from './components/LuckRoyaleScreen';
import { WeaponsScreen } from './components/WeaponsScreen';
import { RoomScreen } from './components/RoomScreen';

function App() {
  const currentScreen = useGameStore((state) => state.currentScreen);

  return (
    <div className="min-h-screen bg-ffdark text-white font-sans overflow-hidden select-none">
      {/* TopBar shown everywhere except login */}
      {currentScreen !== 'login' && <TopBar />}

      {currentScreen === 'login' && <LoginScreen />}
      {currentScreen === 'lobby' && <LobbyScreen />}
      {currentScreen === 'luck_royale' && <LuckRoyaleScreen />}
      {currentScreen === 'weapons' && <WeaponsScreen />}
      {currentScreen === 'room' && <RoomScreen />}
    </div>
  );
}

export default App;
