'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

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

  const handleNavigation = useCallback((e: React.MouseEvent<HTMLElement>, path: string, type: AnimationType) => {
    e.preventDefault();
    if (path === window.location.pathname) return;

    setAnimationType(type);
    setIsNavigating(true);

    setTimeout(() => {
      router.push(path);
      // We'll reset the navigating state on the new page load
    }, 800); // This duration should match your longest page-out animation
  }, [router]);

  // This effect will reset the navigation state after the new page has loaded
  // and the fade-in animation has begun.
  if (isNavigating) {
    setTimeout(() => {
      setIsNavigating(false);
      setAnimationType('');
    }, 1000); // A bit longer than the navigation timeout
  }


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
