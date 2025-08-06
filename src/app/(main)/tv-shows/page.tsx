
import { tvShows } from '@/lib/data/tv-shows';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function TvShowsPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight font-headline text-center">𝕊𝕖𝕣𝕚𝕖𝕤-𝕠𝕦𝕤𝕝𝕪 𝔾𝕠𝕠𝕕</h1>
          <p className="text-muted-foreground text-sm mt-2 self-end">
            * In my opinion
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {tvShows.map((show: Content, index: number) => (
          <ContentCard key={show.id} content={show} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
