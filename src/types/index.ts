export type Content = {
  id: number;
  title: string;
  type: 'Movie' | 'TV Show' | 'Anime';
  posterUrl: string;
  aiHint: string;
  shortDescription: string;
  synopsis: string;
  personalReview: string;
  rating?: number;
  details: {
    genre: string[];
    year: number;
    duration?: string;
    episodes?: number;
  };
  externalLinks?: { label: string; url: string }[];
};
