'use client';

import { Header } from '@/components/header';
import { useAnimation } from '@/context/animation-context';
import { cn } from '@/lib/utils';
import { Clapperboard, Tv, Film, Star } from 'lucide-react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isNavigating, animationType } = useAnimation();

  return (
    <div className="flex min-h-screen flex-col">
      {isNavigating && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 animate-page-fade-in">
            {animationType === 'movie' && <Film className="h-32 w-32 text-primary animate-reel-out" />}
            {animationType === 'tv' && <Tv className="h-32 w-32 text-primary animate-tv-out" />}
            {animationType === 'anime' && (
              <div className="relative flex items-center justify-center">
                <Clapperboard className="h-32 w-32 text-primary animate-comic-pow-out" />
                <span className="absolute -top-8 -left-12 -rotate-12 font-black text-4xl text-yellow-400 stroke-black animate-comic-text" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>POW!</span>
                <span className="absolute -bottom-4 -right-16 rotate-12 font-black text-5xl text-red-500 animate-comic-text" style={{ animationDelay: '50ms', textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>POW!</span>
              </div>
            )}
            {animationType === 'star' && <Star className="h-32 w-32 text-primary animate-rotating-star-out" />}
        </div>
      )}
      <div className={cn(isNavigating && 'animate-page-fade-out')}>
        <Header />
        <main className="flex-1">
          <div className="flex justify-center">
            {children}
          </div>
        </main>
        <footer className="flex items-center justify-center py-6 border-t">
          <p className="text-sm text-muted-foreground">
              AVIMDB - All rights reserved, probably.
          </p>
        </footer>
      </div>
    </div>
  );
}
