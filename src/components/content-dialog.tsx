
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
            <DialogHeader>
              <DialogTitle className="text-3xl font-headline mb-2 text-left">{content.title}</DialogTitle>
              <DialogDescription asChild>
                <div>
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

                  <p className="text-base mb-6 text-left">{content.synopsis}</p>
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-accent mb-2">My Take</h3>
                    <p className="text-muted-foreground italic">"{content.personalReview}"</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {content.externalLinks.map((link) => (
                <Button key={link.url} asChild className="w-full sm:w-auto">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
