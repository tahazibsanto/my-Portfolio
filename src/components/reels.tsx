
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import type { Video } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const reelsVideos: Video[] = [
  {
    id: 'shorts/gJg92I71-Xk',
    title: 'Dynamic Product Reel',
    description: 'A punchy and fast-paced reel for a new sneaker release.',
    thumbnailUrl: 'https://img.youtube.com/vi/gJg92I71-Xk/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/gJg92I71-Xk',
    aiHint: 'product reel',
  },
  {
    id: 'shorts/b2w21-a_Xg4',
    title: 'Travel Moments Reel',
    description: 'A collection of stunning vertical shots from a trip to the mountains.',
    thumbnailUrl: 'https://img.youtube.com/vi/b2w21-a_Xg4/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/b2w21-a_Xg4',
    aiHint: 'travel reel',
  },
  {
    id: 'shorts/V-x41bT-30Y',
    title: 'Behind the Scenes Reel',
    description: 'A fun look at the making of a recent commercial project.',
    thumbnailUrl: 'https://img.youtube.com/vi/V-x41bT-30Y/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/V-x41bT-30Y',
    aiHint: 'behind the scenes',
  },
  {
    id: 'shorts/p2GLdIurCZo',
    title: 'Food Reel',
    description: 'Mouth-watering shots of a new menu at a local restaurant.',
    thumbnailUrl: 'https://img.youtube.com/vi/p2GLdIurCZo/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/p2GLdIurCZo',
    aiHint: 'food video',
  },
    {
    id: 'shorts/eOUx30i0I_k',
    title: 'Event Highlights Reel',
    description: 'Capturing the energy and excitement of a corporate event.',
    thumbnailUrl: 'https://img.youtube.com/vi/eOUx30i0I_k/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/eOUx30i0I_k',
    aiHint: 'event highlights',
  },
  {
    id: 'shorts/QUBZ0SlD9oU',
    title: 'Cinematic Desert Journey',
    description: 'A breathtaking cinematic reel capturing a journey through vast desert landscapes.',
    thumbnailUrl: 'https://img.youtube.com/vi/QUBZ0SlD9oU/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QUBZ0SlD9oU',
    aiHint: 'desert travel',
  },
];

export default function Reels() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideoPlayer = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="reels" className="w-full py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Reels</h2>
          <p className="mt-4 text-lg text-muted-foreground">A collection of my short-form work.</p>
           <div className="absolute left-1/2 -bottom-4 h-0.5 w-24 bg-foreground/20 -translate-x-1/2" />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reelsVideos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div
                    onClick={() => openVideoPlayer(video)}
                    className="group relative aspect-[9/16] cursor-pointer rounded-lg overflow-hidden"
                  >
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      width={1080}
                      height={1920}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={video.aiHint}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <PlayCircle className="h-20 w-20 text-white/80" />
                    </div>
                     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && closeVideoPlayer()}>
          <DialogContent className="max-w-md p-0 bg-background border-none">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle>{selectedVideo.title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-[9/16]">
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
