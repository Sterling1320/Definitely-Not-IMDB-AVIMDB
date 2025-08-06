
import { contentData } from '@/lib/data';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function Top10Page() {
  const top10Titles = [
    'Interstellar',
    'Chernobyl',
    'One Piece',
    'House M.D.',
    'Sherlock',
    'Death Note',
    'Maharaja',
    'City Hunter',
    'Oppenheimer',
    'Into the Spider-Verse Series',
  ];

  const top10 = top10Titles.map(title => {
    return contentData.find(item => item.title === title);
  }).filter((item): item is Content => item !== undefined);


  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight font-headline">🎬 🄷🄰🄻🄻 🄾🄵 🄵🅁🄰🄼🄴</h1>
        <p className="text-muted-foreground text-sm mt-2">
         🍿 Certified Chawl Classics
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {top10.map((item: Content, index: number) => (
          <ContentCard key={item.id} content={item} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
