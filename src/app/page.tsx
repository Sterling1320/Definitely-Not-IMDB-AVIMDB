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

      <div className={cn(
        "flex flex-col min-h-screen bg-background text-foreground transition-opacity duration-500",
        loading ? "opacity-0" : "opacity-100",
        isNavigating && 'animate-page-fade-out'
      )}>
        <main className="flex-1">
          <section className="w-full py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                  <Link href="https://www.linkedin.com/in/avinash-praveen/" target="_blank" rel="noopener noreferrer">
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
                  </Link>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                    🅐🅥🅘🅜🅓🅑
                  </h1>
                </div>
                <p className="mx-auto max-w-[700px] text-primary md:text-xl">
                  👋 Hey there! I&apos;m{' '}
                  <Link
                    href="https://www.linkedin.com/in/avinash-praveen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary-foreground"
                  >
                    Avinash
                  </Link>
                  , and welcome to AVIMDB my personal vault of cinematic treasures (and the occasional guilty pleasure) spanning movies, TV shows, and anime I&apos;ve binged over the years.
                  <br /><br />
                  Each entry is ranked based on acting, music, cinematography and rewatchability.
                  <br />
                  And if your favorite didn&apos;t make the list, just know you aren&apos;t cultured enough.
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
