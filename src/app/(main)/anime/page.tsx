
import { anime } from '@/lib/data/anime';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function AnimePage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight font-headline text-primary">𝕄𝕒𝕟𝕘𝕒-𝕟𝕚𝕗𝕚𝕔𝕖𝕟𝕥 𝕊𝕥𝕦𝕗𝕗</h1>
        <p className="text-primary text-sm mt-2">
          Make you wanna finish an entire season in a day
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {anime.map((item: Content, index: number) => (
          <ContentCard key={item.id} content={item} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
