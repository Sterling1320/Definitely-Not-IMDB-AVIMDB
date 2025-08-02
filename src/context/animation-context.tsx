'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode } from 'react';

type AnimationType = 'movie' | 'tv' | 'anime' | 'star' | '';

interface AnimationContextProps {
  isNavigating: boolean;
  animationType: AnimationType;
  handleNavigation: (e: React.MouseEvent<HTMLElement>, path: string, type: AnimationType) => void;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [animationType, setAnimationType] = useState<AnimationType>('');
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, path: string, type: AnimationType) => {
    e.preventDefault();
    if (path === window.location.pathname) return;
    setAnimationType(type);
    setIsNavigating(true);
    setTimeout(() => {
      router.push(path);
      // Reset state after navigation to be ready for the next one
      setTimeout(() => {
        setIsNavigating(false);
        setAnimationType('');
      }, 50); // A small delay to allow the new page to render before resetting
    }, 800); // Match animation duration
  };

  return (
    <AnimationContext.Provider value={{ isNavigating, animationType, handleNavigation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
