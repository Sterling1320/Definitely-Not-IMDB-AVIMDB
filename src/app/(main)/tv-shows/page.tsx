
import { tvShows } from '@/lib/data/tv-shows';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function TvShowsPage() {
  return (
    <div className="container py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tight font-headline mb-8 text-center">TV Shows</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {tvShows.map((show: Content, index: number) => (
          <ContentCard key={show.id} content={show} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
