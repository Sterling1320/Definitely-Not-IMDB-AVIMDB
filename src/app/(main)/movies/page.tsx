import { movies } from '@/lib/data/movies';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function MoviesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight font-headline mb-8 text-center">
        𝕲𝖗𝖊𝖆𝖙𝖊𝖘𝖙 𝕸𝖔𝖛𝖎𝖊𝖘 𝖔𝖋 𝕬𝖑𝖑 𝕿𝖎𝖒𝖊
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
        {movies.map((movie: Content, index: number) => (
          <ContentCard key={movie.id} content={movie} />
        ))}
      </div>
    </div>
  );
}
