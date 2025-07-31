import type { Content } from '@/types';
import { movies } from './movies';
import { tvShows } from './tv-shows';
import { anime } from './anime';

export const contentData: Content[] = [...movies, ...tvShows, ...anime];
