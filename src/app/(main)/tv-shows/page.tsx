
import { tvShows } from '@/lib/data/tv-shows';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function TvShowsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight font-headline">𝔹𝕚𝕟𝕘𝕖 𝕎𝕠𝕣𝕥𝕙𝕪 𝕋𝕍 𝕊𝕙𝕠𝕨𝕤</h1>
        <p className="text-muted-foreground text-sm mt-2">
          in my opinion
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {tvShows.map((show: Content, index: number) => (
          <ContentCard key={show.id} content={show} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
