
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clapperboard, Tv, Film, Star } from 'lucide-react';
import AvimdbLogo from './AVIMDB logo.png';
import { SplashScreen } from '@/components/splash-screen';
import { cn } from '@/lib/utils';
import { Typewriter } from '@/components/typewriter';
import { useAnimation } from '@/context/animation-context';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const { isNavigating, handleNavigation } = useAnimation();
  
  const descriptionText = `Hello! I'm Avinash. People keep asking me “Bhai kuch accha suggest karna dekhne ke liye”, so this is my permanent answer because I'm too lazy to think only for them to completely ignore my suggestion, so it's better to let them choose ("Wow! A lazy and programmatic solution?!" – Bill Gates while shedding a happy tear). There is something for all types of audiences, so remember, If it’s on the list, it’s worth watching.`;
  const linkText = "I'm Avinash";
  const linkHref = "https://www.linkedin.com/in/avinash-praveen/";
  
  return (
    <>
      {loading && <SplashScreen onAnimationComplete={() => setLoading(false)} />}
      
      <div className={cn(
        "flex flex-col min-h-screen bg-transparent text-foreground transition-opacity duration-500",
        loading ? "opacity-0" : "opacity-100",
        isNavigating ? 'animate-page-fade-out' : 'animate-page-fade-in'
      )}>
        <main className="flex-1">
          <section className="w-full pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-20 lg:pb-28">
            <div className="container px-4 md:px-6">
              <div className="text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                  <Link href="https://www.linkedin.com/in/avinash-praveen/" target="_blank" rel="noopener noreferrer">
                    <div className="w-64 h-64 relative inline-block">
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
                 <div className="mx-auto max-w-[700px] text-primary md:text-xl text-justify font-bold whitespace-pre-wrap font-cormorant">
                  <Typewriter 
                    text={descriptionText} 
                    linkText={linkText} 
                    linkHref={linkHref}
                    linkClassName="underline hover:text-primary-foreground" 
                  />
                </div>
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
                      View List
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
                      View List
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
                      View List
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
