'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Video } from '@/lib/types';

const portfolioVideos: Video[] = [
  {
    id: 1,
    title: 'Corporate Documentary',
    description: "A deep dive into the tech industry's future.",
    thumbnailUrl: 'https://placehold.co/600x400.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aiHint: 'corporate office',
  },
  {
    id: 2,
    title: 'Music Video',
    description: 'Visuals for the latest hit single.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aiHint: 'concert lights',
  },
  {
    id: 3,
    title: 'The Wanderer',
    description: 'A short film about discovery and adventure.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aiHint: 'nature landscape',
  },
  {
    id: 4,
    title: 'Product Launch',
    description: 'Teaser for an exciting new product.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aiHint: 'modern product',
  },
  {
    id: 5,
    title: 'Social Media Ad',
    description: 'Engaging content for online platforms.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aiHint: 'city life',
  },
  {
    id: 6,
    title: 'Wedding Highlights',
    description: "Capturing the magic of a special day.",
    thumbnailUrl: 'https://placehold.co/600x400.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    aiHint: 'wedding couple',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 animate-in fade-in-0 duration-1000">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Recent Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of my latest video editing projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
            >
              <Link href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={video.aiHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{video.title}</h3>
                    <p className="text-muted-foreground mb-4 h-10">{video.description}</p>
                    <div className="flex items-center text-sm text-primary font-medium group-hover:underline">
                      Watch on YouTube
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
