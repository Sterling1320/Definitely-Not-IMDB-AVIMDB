import { contentData } from '@/lib/data';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function AnimePage() {
  const anime = contentData.filter((item) => item.type === 'Anime');

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight font-headline mb-8">Anime</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {anime.map((item: Content) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}
