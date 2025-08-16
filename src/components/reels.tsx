
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlayCircle, ChevronDown } from 'lucide-react';
import type { Video } from '@/lib/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const reelsVideos: Video[] = [
  {
    id: 'shorts/QUBZ0SlD9oU',
    title: 'Cinematic Desert Journey',
    description: 'A breathtaking cinematic reel capturing a journey through vast desert landscapes.',
    thumbnailUrl: 'https://img.youtube.com/vi/QUBZ0SlD9oU/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QUBZ0SlD9oU',
    aiHint: 'desert travel',
  },
  {
    id: 'shorts/qsmbLJcfrfs',
    title: 'City Vibes Reel',
    description: 'A dynamic reel showcasing the energy of city life.',
    thumbnailUrl: 'https://img.youtube.com/vi/qsmbLJcfrfs/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/qsmbLJcfrfs',
    aiHint: 'city life',
  },
  {
    id: 'shorts/RGkdZV-8vBw',
    title: 'Nature Escape Reel',
    description: 'A tranquil reel capturing the beauty of nature.',
    thumbnailUrl: 'https://img.youtube.com/vi/RGkdZV-8vBw/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/RGkdZV-8vBw',
    aiHint: 'nature reel',
  },
  {
    id: 'shorts/m-lThZ7cok0',
    title: 'Urban Exploration Reel',
    description: 'Exploring the hidden corners of the urban landscape.',
    thumbnailUrl: 'https://img.youtube.com/vi/m-lThZ7cok0/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/m-lThZ7cok0',
    aiHint: 'urban exploration',
  },
  {
    id: 'shorts/66FLSBRkOIg',
    title: 'Abstract Moments Reel',
    description: 'A creative reel playing with abstract visuals and motion.',
    thumbnailUrl: 'https://img.youtube.com/vi/66FLSBRkOIg/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/66FLSBRkOIg',
    aiHint: 'abstract motion',
  },
  {
    id: 'shorts/qaUi7t6t4Ko',
    title: 'Exploring Ancient Streets',
    description: 'A cinematic journey through ancient city streets.',
    thumbnailUrl: 'https://img.youtube.com/vi/qaUi7t6t4Ko/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/qaUi7t6t4Ko',
    aiHint: 'city travel',
  },
  {
    id: 'shorts/rgsostgZ2O0',
    title: 'Luxury Car Reel',
    description: 'A showcase of a luxury car with dynamic shots.',
    thumbnailUrl: 'https://img.youtube.com/vi/rgsostgZ2O0/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/rgsostgZ2O0',
    aiHint: 'car reel',
  },
  {
    id: 'shorts/E3Bf8_w7-iQ',
    title: 'Winter Walk',
    description: 'A peaceful walk through a snowy landscape.',
    thumbnailUrl: 'https://img.youtube.com/vi/E3Bf8_w7-iQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/E3Bf8_w7-iQ',
    aiHint: 'winter landscape',
  },
];

export default function Reels() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openVideoPlayer = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="reels" className="w-full py-16 sm:py-24">
      <div className="container mx-auto">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center mb-12 relative">
            <CollapsibleTrigger asChild>
              <div className='flex flex-col items-center gap-4'>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Reels</h2>
                <p className="text-lg text-muted-foreground">A collection of my short-form work.</p>
                <Button variant="outline" size="lg" className="w-full max-w-xs">
                  {isOpen ? 'Hide Reels' : 'Show Reels'}
                  <ChevronDown className={cn('ml-2 h-5 w-5 transition-transform', isOpen && 'rotate-180')} />
                </Button>
                 <div className="absolute left-1/2 -bottom-4 h-0.5 w-24 bg-foreground/20 -translate-x-1/2" />
              </div>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full mt-12"
            >
              <CarouselContent>
                {reelsVideos.map((video) => (
                  <CarouselItem key={video.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                    <div className="p-1">
                      <div
                        onClick={() => openVideoPlayer(video)}
                        className="group relative aspect-[9/16] cursor-pointer rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
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
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && closeVideoPlayer()}>
          <DialogContent className="max-w-md p-0 bg-background border-none">
            <DialogHeader className="p-4 pb-0">
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
