import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clapperboard, Tv, Film, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                AVIMDB
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your personal, curated collection of movies, TV shows, and anime. Discover your next favorite.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full pb-20 md:pb-32 lg:pb-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center justify-center text-center p-6 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 p-4 rounded-full">
                    <Film className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Movies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Browse through a collection of cinematic masterpieces.</p>
                  <Button asChild className="mt-6">
                    <Link href="/movies">Explore Movies</Link>
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
                  <Button asChild className="mt-6">
                    <Link href="/tv-shows">Explore TV Shows</Link>
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
                  <Button asChild className="mt-6">
                    <Link href="/anime">Explore Anime</Link>
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
                  <Button asChild className="mt-6">
                    <Link href="/top-10">View Top 10</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-6 border-t">
          <p className="text-xs text-muted-foreground">
              AVIMDB - All rights reserved, probably.
          </p>
      </footer>
    </div>
  );
}
