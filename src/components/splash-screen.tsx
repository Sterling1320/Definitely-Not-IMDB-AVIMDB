'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsAnimating(true), 100);
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      onAnimationComplete();
    }, 2000); // Total duration of the splash screen

    return () => {
      clearTimeout(startTimer);
      clearTimeout(finishTimer);
    };
  }, [onAnimationComplete]);

  if (isFinished) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500',
        isAnimating && 'animate-[splash-fade-out_2s_ease-in-out_forwards]'
      )}
    >
        <div className="relative w-64 md:w-80">
            <div
                className={cn(
                    'w-full h-10 bg-white origin-bottom-left',
                    isAnimating && 'animate-[clapper-top-open_1s_ease-in-out_forwards]'
                )}
            >
                <div className="h-full w-full bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
                    <div className="flex items-center h-full">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex h-full w-[calc(100%/6)]">
                                <div className="w-1/2 h-full bg-white" />
                                <div className="w-1/2 h-full bg-black" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-40 md:h-52 bg-black border-4 border-white text-white p-4 flex flex-col justify-between">
                <div 
                    className={cn(
                        'text-center transition-opacity duration-500',
                        isAnimating && 'animate-[text-fade-in-out_2s_ease-in-out_forwards]'
                    )}
                >
                    <h1 className="text-3xl md:text-4xl font-bold font-headline">AVIMDB</h1>
                    <p className="text-lg md:text-xl">PRODUCTIONS</p>
                </div>
                <div className="flex justify-between text-sm">
                    <div>
                        <p>SCENE</p>
                        <p>1</p>
                    </div>
                    <div>
                        <p>TAKE</p>
                        <p>1</p>
                    </div>
                    <div>
                        <p>DIRECTOR</p>
                        <p>AVINASH</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
