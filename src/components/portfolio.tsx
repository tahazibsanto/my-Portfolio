'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import type { Video } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const portfolioVideos: Video[] = [
  {
    id: 'WhJ-vUIMFYI',
    title: 'Corporate Documentary | The Future of Tech',
    description: "A deep dive into the tech industry's future.",
    thumbnailUrl: 'https://img.youtube.com/vi/WhJ-vUIMFYI/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/WhJ-vUIMFYI',
    aiHint: 'corporate office',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    description: 'Visuals for the latest hit single.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aiHint: 'concert lights',
  },
  {
    id: '6_pru8U2RmM',
    title: 'The Wanderer - A Short Film',
    description: 'A short film about discovery and adventure.',
    thumbnailUrl: 'https://img.youtube.com/vi/6_pru8U2RmM/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/6_pru8U2RmM',
    aiHint: 'nature landscape',
  },
  {
    id: 'Fm2o1tGeobg',
    title: 'Apple Vision Pro — Unveiling a New Era of Computing',
    description: 'Teaser for an exciting new product.',
    thumbnailUrl: 'https://img.youtube.com/vi/Fm2o1tGeobg/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/Fm2o1tGeobg',
    aiHint: 'modern product',
  },
  {
    id: 't1_3_1W2I_A',
    title: 'The Beauty of Social Media - A Short Film',
    description: 'Engaging content for online platforms.',
    thumbnailUrl: 'https://img.youtube.com/vi/t1_3_1W2I_A/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/t1_3_1W2I_A',
    aiHint: 'city life',
  },
  {
    id: 'iuk77TjvKOA',
    title: 'Our Wedding Video | A Cinematic Highlight Film',
    description: "Capturing the magic of a special day.",
    thumbnailUrl: 'https://img.youtube.com/vi/iuk77TjvKOA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/iuk77TjvKOA',
    aiHint: 'wedding couple',
  },
  {
    id: 'LYaVYVtBrlA',
    title: 'Cinematic Travel Video',
    description: 'A cinematic travel video.',
    thumbnailUrl: 'https://img.youtube.com/vi/LYaVYVtBrlA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/LYaVYVtBrlA',
    aiHint: 'travel drone',
  },
  {
    id: 'BHlspQuBZxc',
    title: 'Short Film',
    description: 'A short film.',
    thumbnailUrl: 'https://img.youtube.com/vi/BHlspQuBZxc/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/BHlspQuBZxc',
    aiHint: 'dramatic scene',
  },
    {
    id: 'doWSF05xN80',
    title: 'Commercial Ad',
    description: 'A commercial advertisement.',
    thumbnailUrl: 'https://img.youtube.com/vi/doWSF05xN80/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/doWSF05xN80',
    aiHint: 'product shot',
  }
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    };

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])


  const openVideoPlayer = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 animate-in fade-in-0 duration-1000 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Latest Releases</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of my latest video editing projects. <a href="#" className="text-primary hover:underline">Watch All</a>
          </p>
        </div>
      </div>
      <Carousel setApi={setApi} className="w-full" opts={{align: "center", loop: true}}>
        <CarouselContent>
           {portfolioVideos.map((video, index) => (
            <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
               <div
                onClick={() => openVideoPlayer(video)}
                className="p-1"
              >
                <Card
                  className={`overflow-hidden group transition-all duration-500 ease-in-out hover:shadow-primary/20 hover:shadow-lg cursor-pointer
                    ${index === current ? 'scale-110 -translate-y-4 shadow-lg shadow-primary/30' : 'scale-90 opacity-70'}
                  `}
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
                       <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-24" />
        <CarouselNext className="mr-24"/>
      </Carousel>

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
