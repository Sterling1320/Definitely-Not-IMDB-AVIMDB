'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clapperboard, Tv, Film, Star } from 'lucide-react';
import AvimdbLogo from './AVIMDB logo.png';
import { SplashScreen } from '@/components/splash-screen';
import { cn } from '@/lib/utils';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [animationType, setAnimationType] = useState('');
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>, path: string, type: string) => {
    e.preventDefault();
    setAnimationType(type);
    setIsNavigating(true);
    setTimeout(() => {
      router.push(path);
    }, 800); // Match animation duration
  };


  return (
    <>
      {loading && <SplashScreen onAnimationComplete={() => setLoading(false)} />}
      
      {isNavigating && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 animate-page-fade-in">
            {animationType === 'movie' && <Film className="h-32 w-32 text-primary animate-reel-out" />}
            {animationType === 'tv' && <Tv className="h-32 w-32 text-primary animate-tv-out" />}
            {animationType === 'anime' && <Clapperboard className="h-32 w-32 text-primary animate-sword-slash-out" />}
            {animationType === 'star' && <Star className="h-32 w-32 text-primary animate-shooting-star-out" />}
        </div>
      )}

      <div className={cn(
        "flex flex-col min-h-screen bg-background text-foreground transition-opacity duration-500",
        loading ? "opacity-0" : "opacity-100",
        isNavigating && 'animate-page-fade-out'
      )}>
        <main className="flex-1">
          <section className="w-full py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="w-64 h-64 relative">
                    <Image
                      src={AvimdbLogo}
                      alt="AVIMDB Logo"
                      fill
                      style={{objectFit: "contain"}}
                      sizes="256px"
                      priority
                    />
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                    🅐🅥🅘🅜🅓🅑
                  </h1>
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  👋 Hello there! I&apos;m Avinash, and this is AVIMDB, my personal vault of some of the finest (and occasionally questionable) movies, TV shows, and anime I’ve consumed over the years.
                  <br /><br />
                  Every title here has been judged by me on factors like acting, music, plot impact, and most importantly... whether I ever felt like watching it again.
                  <br />
                  If your favorite show didn’t make the cut, don’t take it personally it just means your taste is lowkey trash :p
                </p>
              </div>
            </div>
          </section>

          <section className="w-full pb-20 md:pb-32 lg:pb-40">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="group flex flex-col items-center justify-center text-center p-6 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 p-4 rounded-full">
                      <Film className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline">Movies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Browse through a collection of cinematic masterpieces.</p>
                    <Button onClick={(e) => handleNavigation(e, '/movies', 'movie')} className="mt-6">
                      Explore Movies
                    </Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center text-center p-6 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 p-4 rounded-full">
                      <Tv className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline">TV Shows</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Catch up on the most binge-worthy series.</p>
                    <Button onClick={(e) => handleNavigation(e, '/tv-shows', 'tv')} className="mt-6">
                      Explore TV Shows
                    </Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center text-center p-6 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 p-4 rounded-full">
                      <Clapperboard className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline">Anime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Dive into captivating animated worlds from Japan.</p>
                     <Button onClick={(e) => handleNavigation(e, '/anime', 'anime')} className="mt-6">
                      Explore Anime
                    </Button>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center justify-center text-center p-6 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 p-4 rounded-full">
                      <Star className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline">My Top 10 Overall</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">See my highest-rated picks across all categories.</p>
                    <Button onClick={(e) => handleNavigation(e, '/top-10', 'star')} className="mt-6">
                      View Top 10
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex items-center justify-center py-6 border-t">
            <p className="text-sm text-muted-foreground">
                AVIMDB - All rights reserved, probably.
            </p>
        </footer>
      </div>
    </>
  );
}
