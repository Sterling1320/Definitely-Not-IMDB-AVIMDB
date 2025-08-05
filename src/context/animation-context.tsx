'use client';

import { useRouter, usePathname } from 'next/navigation';
import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';

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
  const pathname = usePathname();

  const handleNavigation = useCallback((e: React.MouseEvent<HTMLElement>, path: string, type: AnimationType) => {
    e.preventDefault();
    if (path === pathname) return;

    setAnimationType(type);
    setIsNavigating(true);

    setTimeout(() => {
      router.push(path);
    }, 800); 
  }, [router, pathname]);

  useEffect(() => {
    // Reset navigation state after the new page is loaded
    setIsNavigating(false);
    setAnimationType('');
  }, [pathname]);


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
