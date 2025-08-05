
'use client';

import { Header } from '@/components/header';
import { useAnimation } from '@/context/animation-context';
import { cn } from '@/lib/utils';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isNavigating } = useAnimation();

  return (
    <div className={cn('flex min-h-screen flex-col', isNavigating ? 'animate-page-fade-out' : 'animate-page-fade-in')}>
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
  );
}
