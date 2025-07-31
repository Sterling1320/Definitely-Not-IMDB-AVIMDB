
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import type { Content } from '@/types';
import { ExternalLink, Calendar, Film, Tv, Star } from 'lucide-react';

interface ContentDialogProps {
  content: Content;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ContentDialog({ content, isOpen, onOpenChange }: ContentDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <Image
                src={content.posterUrl}
                alt={`Poster for ${content.title}`}
                width={400}
                height={600}
                className="rounded-lg object-cover w-full"
                data-ai-hint={content.aiHint}
              />
            </div>
            <div className="w-full md:w-2/3">
              <DialogTitle className="text-3xl font-headline mb-2">{content.title}</DialogTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                {content.details.genre.map((g) => (
                  <Badge key={g} variant="secondary">{g}</Badge>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-4">
                 <div className="flex items-center gap-2"><Calendar size={16} /> <span>{content.details.year}</span></div>
                 {content.details.duration && <div className="flex items-center gap-2"><Film size={16} /> <span>{content.details.duration}</span></div>}
                 {content.details.episodes && <div className="flex items-center gap-2"><Tv size={16} /> <span>{content.details.episodes} episodes</span></div>}
                 {content.rating && <div className="flex items-center gap-1"><Star size={16} className="text-primary" /> <span>{content.rating}/10</span></div>}
              </div>

              <DialogDescription className="text-base mb-6">{content.synopsis}</DialogDescription>

              <div className="space-y-4">
                  <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">My Take</h3>
                      <p className="text-muted-foreground italic">"{content.personalReview}"</p>
                  </div>
              </div>

              <Button asChild className="mt-6 w-full md:w-auto">
                <a href={content.externalLink} target="_blank" rel="noopener noreferrer">
                  Watch Now <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
