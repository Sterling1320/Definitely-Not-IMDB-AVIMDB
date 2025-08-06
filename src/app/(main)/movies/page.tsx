
import { movies } from '@/lib/data/movies';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function MoviesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight font-headline">
          The Greatest Movies that I have ever watched (So Far...)
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          Movies after #20 are loosely ranked.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map((movie: Content, index: number) => (
          <ContentCard key={movie.id} content={movie} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
