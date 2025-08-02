
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
  speed = 50, // Faster speed
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState<React.ReactNode[]>([]);
  
  // Process text to handle newlines and split into words
  const processedText = text.replace(/\n/g, ' \n ');
  const words = processedText.split(' ');
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

        if (newWord === '\n') {
          return [...prev, <br key={`br-${currentWordIndex}`} />];
        }
        
        let node: React.ReactNode = newWord;

        if (currentWordIndex === linkIndex) {
          node = (
            <Link
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(linkClassName)}
              key={`link-${currentWordIndex}`}
            >
              {linkText}
            </Link>
          );
        }
        
        return [...prev, node, ' '];
      });

      currentWordIndex++;
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, linkText, linkHref, linkClassName, speed]); // Rerun when text changes

  return (
    <p>
      {displayedText.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <span className="animate-[cursor-blink_1s_infinite] opacity-100">|</span>
    </p>
  );
}
