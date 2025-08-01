'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  linkText: string;
  linkHref: string;
  linkClassName?: string;
  speed?: number;
}

export function Typewriter({
  text,
  linkText,
  linkHref,
  linkClassName,
  speed = 100,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState<React.ReactNode[]>([]);
  const words = text.split(' ');
  const linkIndex = words.findIndex(word => word.includes(linkText));

  useEffect(() => {
    if (words.length === 0) return;

    let currentWordIndex = 0;
    const intervalId = setInterval(() => {
      if (currentWordIndex >= words.length) {
        clearInterval(intervalId);
        return;
      }

      setDisplayedText(prev => {
        const newWord = words[currentWordIndex];
        let node: React.ReactNode = newWord;

        if (currentWordIndex === linkIndex) {
          node = (
            <Link
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(linkClassName)}
            >
              {linkText}
            </Link>
          );
        }
        
        // Add a space after each word except the last one
        return [...prev, node, ' '];
      });

      currentWordIndex++;
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, linkText, linkHref, linkClassName, speed]);

  return (
    <p>
      {displayedText.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <span className="animate-[cursor-blink_1s_infinite] opacity-100">|</span>
    </p>
  );
}
