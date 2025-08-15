'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import type { Video } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/carousel";

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
  },
  {
    id: 'GVkjiC2seJA',
    title: 'Cinematic Video',
    description: 'A cinematic video.',
    thumbnailUrl: 'https://img.youtube.com/vi/GVkjiC2seJA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/GVkjiC2seJA',
    aiHint: 'cinematic travel',
  },
  {
    id: 'dpPbHISVOmY',
    title: 'Travel Vlog',
    description: 'A travel vlog.',
    thumbnailUrl: 'https://img.youtube.com/vi/dpPbHISVOmY/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dpPbHISVOmY',
    aiHint: 'travel scenery',
  },
  {
    id: 'gnWxnusmPuY',
    title: 'Short Film Scene',
    description: 'A scene from a short film.',
    thumbnailUrl: 'https://img.youtube.com/vi/gnWxnusmPuY/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/gnWxnusmPuY',
    aiHint: 'film noir',
  },
  {
    id: 'w2Gd08E7Ch0',
    title: 'Promotional Video',
    description: 'A promotional video for a product.',
    thumbnailUrl: 'https://img.youtube.com/vi/w2Gd08E7Ch0/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/w2Gd08E7Ch0',
    aiHint: 'product commercial',
  },
  {
    id: 'ltftA-IF3uA',
    title: 'Music Video Clip',
    description: 'A clip from a music video.',
    thumbnailUrl: 'https://img.youtube.com/vi/ltftA-IF3uA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/ltftA-IF3uA',
    aiHint: 'music performance',
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
      <div className="container text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Latest Releases</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A selection of my latest video editing projects. <a href="#" className="text-primary hover:underline">Watch All</a>
        </p>
      </div>
      <div className="container">
      <Carousel setApi={setApi} className="w-full" opts={{align: "center", loop: true}}>
        <CarouselContent className="-ml-2">
           {portfolioVideos.map((video, index) => (
            <CarouselItem key={video.id} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-2">
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
                        width={480}
                        height={270}
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
        <CarouselPrevious className="-left-4 md:-left-8 lg:-left-12" />
        <CarouselNext className="-right-4 md:-right-8 lg:-right-12"/>
      </Carousel>
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
