'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Clapperboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/context/animation-context';

const navLinks = [
  { href: '/movies', label: 'Movies', animation: 'movie' },
  { href: '/tv-shows', label: 'TV Shows', animation: 'tv' },
  { href: '/anime', label: 'Anime', animation: 'anime' },
  { href: '/top-10', label: 'My Top 10 Overall', animation: 'star' },
];

export function Header() {
  const pathname = usePathname();
  const { handleNavigation } = useAnimation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Clapperboard className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">AVIMDB</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href, link.animation)}
                className={cn(
                  'transition-colors hover:text-primary cursor-pointer',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
              <Clapperboard className="h-6 w-6 text-primary" />
              <span className="font-bold">AVIMDB</span>
            </Link>
            <nav className="grid gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href, link.animation)}
                  className={cn(
                    'flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground',
                    pathname === link.href ? 'bg-accent' : ''
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="md:hidden">
             <Link href="/" className="flex items-center space-x-2">
                <Clapperboard className="h-6 w-6 text-primary" />
                <span className="font-bold">AVIMDB</span>
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
