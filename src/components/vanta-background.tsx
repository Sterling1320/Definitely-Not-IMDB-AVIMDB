'use client';

import { useEffect, useRef } from 'react';

// This is a placeholder for the VANTA object that will be attached to the window object by the scripts.
// We declare it here to satisfy TypeScript.
declare global {
  interface Window {
    VANTA: {
      TRUNK: (options: {
        el: HTMLElement | string;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
        backgroundColor: number;
      }) => {
        destroy: () => void;
      };
    };
  }
}

export function VantaBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<ReturnType<typeof window.VANTA.TRUNK> | null>(null);

  useEffect(() => {
    if (window.VANTA && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.TRUNK({
        el: vantaRef.current!,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x7f4598,
        backgroundColor: 0x141414, // Matching the dark theme background
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ zIndex: -1 }} // Ensure it's in the background
    />
  );
}
