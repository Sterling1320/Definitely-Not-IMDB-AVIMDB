import { contentData } from '@/lib/data';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function TvShowsPage() {
  const tvShows = contentData.filter((item) => item.type === 'TV Show');

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight font-headline mb-8">TV Shows</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tvShows.map((show: Content) => (
          <ContentCard key={show.id} content={show} />
        ))}
      </div>
    </div>
  );
}
