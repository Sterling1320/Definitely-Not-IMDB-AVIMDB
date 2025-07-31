import { contentData } from '@/lib/data';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function Top10Page() {
  const top10 = contentData
    .slice()
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 10);

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight font-headline mb-8">My Top 10 Overall</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {top10.map((item: Content, index: number) => (
          <ContentCard key={item.id} content={item} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
