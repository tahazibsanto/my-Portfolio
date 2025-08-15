'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import type { Video } from '@/lib/types';

const portfolioVideos: Video[] = [
  {
    id: 1,
    title: 'Corporate Documentary',
    description: "A deep dive into the tech industry's future.",
    thumbnailUrl: 'https://img.youtube.com/vi/WhJ-vUIMFYI/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/WhJ-vUIMFYI',
    aiHint: 'corporate office',
  },
  {
    id: 2,
    title: 'Music Video',
    description: 'Visuals for the latest hit single.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aiHint: 'concert lights',
  },
  {
    id: 3,
    title: 'The Wanderer',
    description: 'A short film about discovery and adventure.',
    thumbnailUrl: 'https://img.youtube.com/vi/6_pru8U2RmM/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/6_pru8U2RmM',
    aiHint: 'nature landscape',
  },
  {
    id: 4,
    title: 'Product Launch',
    description: 'Teaser for an exciting new product.',
    thumbnailUrl: 'https://img.youtube.com/vi/Fm2o1tGeobg/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/Fm2o1tGeobg',
    aiHint: 'modern product',
  },
  {
    id: 5,
    title: 'Social Media Ad',
    description: 'Engaging content for online platforms.',
    thumbnailUrl: 'https://img.youtube.com/vi/t1_3_1W2I_A/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/t1_3_1W2I_A',
    aiHint: 'city life',
  },
  {
    id: 6,
    title: 'Wedding Highlights',
    description: "Capturing the magic of a special day.",
    thumbnailUrl: 'https://img.youtube.com/vi/iuk77TjvKOA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/iuk77TjvKOA',
    aiHint: 'wedding couple',
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideoPlayer = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

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
              onClick={() => openVideoPlayer(video)}
              className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{video.title}</h3>
                  <p className="text-muted-foreground mb-4 h-10">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && closeVideoPlayer()}>
          <DialogContent className="max-w-4xl p-0">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle>{selectedVideo.title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.youtubeUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
