'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Content } from '@/types';
import { ContentDialog } from './content-dialog';

interface ContentCardProps {
  content: Content;
  rank?: number;
}

export function ContentCard({ content, rank }: ContentCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card
        className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardHeader className="p-0 relative">
          {rank && (
            <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">
              {rank}
            </div>
          )}
          <Image
            src={content.posterUrl}
            alt={`Poster for ${content.title}`}
            width={400}
            height={600}
            className="object-cover w-full h-auto aspect-[2/3]"
            data-ai-hint={content.aiHint}
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-headline leading-tight mb-2">{content.title}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3">{content.shortDescription}</p>
        </CardContent>
      </Card>
      {isDialogOpen && <ContentDialog content={content} isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />}
    </>
  );
}
