import { movies } from '@/lib/data/movies';
import { ContentCard } from '@/components/content-card';
import type { Content } from '@/types';

export default function MoviesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight font-headline mb-8 text-center">
        𝔾𝕣𝕖𝕒𝕥𝕖𝕤𝕥 𝕄𝕠𝕧𝕚𝕖𝕤 𝕠𝕗 𝔸𝕝𝕝 𝕋𝕚𝕞𝕖
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
        {movies.map((movie: Content, index: number) => (
          <ContentCard key={movie.id} content={movie} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}
