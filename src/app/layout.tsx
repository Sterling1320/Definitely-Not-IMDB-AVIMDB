import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { VantaBackground } from '@/components/vanta-background';
import Script from 'next/script';
import { AnimationProvider } from '@/context/animation-context';
import { RootLayoutClient } from '@/components/root-layout-client';


export const metadata: Metadata = {
  title: 'Definitely Not IMDB (AVIMDB)',
  description: 'Your personal, curated collection of movies, TV shows, and anime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AnimationProvider>
          <VantaBackground />
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
          <Toaster />
        </AnimationProvider>
        <Script src="/p5.min.js" strategy="beforeInteractive" />
        <Script src="/vanta.trunk.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
