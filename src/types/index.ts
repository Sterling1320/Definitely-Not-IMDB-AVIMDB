export type Content = {
  id: number;
  title: string;
  type: 'Movie' | 'TV Show' | 'Anime';
  posterUrl: string;
  aiHint: string;
  shortDescription: string;
  synopsis: string;
  personalReview: string;
  details: {
    genre: string[];
    year: number;
    duration?: string;
    episodes?: number;
  };
  externalLink: string;
};
