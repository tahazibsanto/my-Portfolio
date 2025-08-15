'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import type { Video } from '@/lib/types';
import { Button } from '@/components/ui/button';

const portfolioVideos: Video[] = [
    {
    id: 'WhJ-vUIMFYI',
    title: 'Corporate Documentary | The Future of Tech',
    description: "A deep dive into the tech industry's future, exploring innovation and the challenges ahead. This piece showcases a professional and polished corporate style.",
    thumbnailUrl: 'https://img.youtube.com/vi/WhJ-vUIMFYI/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/WhJ-vUIMFYI',
    aiHint: 'corporate office',
  },
  {
    id: 'LYaVYVtBrlA',
    title: 'Cinematic Travel Video',
    description: 'A visually stunning journey through breathtaking landscapes. This video uses cinematic techniques to evoke a sense of wonder and adventure.',
    thumbnailUrl: 'https://img.youtube.com/vi/LYaVYVtBrlA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/LYaVYVtBrlA',
    aiHint: 'travel drone',
  },
  {
    id: 'BHlspQuBZxc',
    title: 'Short Film "The Wait"',
    description: 'A narrative short film that explores themes of patience and anticipation. This project highlights storytelling and character development.',
    thumbnailUrl: 'https://img.youtube.com/vi/BHlspQuBZxc/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/BHlspQuBZxc',
    aiHint: 'dramatic scene',
  },
  {
    id: 'doWSF05xN80',
    title: 'Commercial Ad: "Sleek"',
    description: 'A fast-paced and energetic commercial for a modern tech product. The editing style is clean, sharp, and designed to grab attention.',
    thumbnailUrl: 'https://img.youtube.com/vi/doWSF05xN80/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/doWSF05xN80',
    aiHint: 'product shot',
  },
  {
    id: 'GVkjiC2seJA',
    title: 'Atmospheric Cinematic Piece',
    description: 'An immersive video that builds a strong mood through visuals and sound design. Perfect for creating a powerful emotional impact.',
    thumbnailUrl: 'https://img.youtube.com/vi/GVkjiC2seJA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/GVkjiC2seJA',
    aiHint: 'cinematic travel',
  },
  {
    id: 'dpPbHISVOmY',
    title: 'Event Aftermovie',
    description: 'High-energy aftermovie capturing the excitement of a live event. Focuses on dynamic shots and rhythmic editing.',
    thumbnailUrl: 'https://img.youtube.com/vi/dpPbHISVOmY/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dpPbHISVOmY',
    aiHint: 'concert crowd',
  },
  {
    id: 'gnWxnusmPuY',
    title: 'Product Demo',
    description: 'Clean and informative product demonstration video. Highlights key features with clear visuals and motion graphics.',
    thumbnailUrl: 'https://img.youtube.com/vi/gnWxnusmPuY/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/gnWxnusmPuY',
    aiHint: 'tech product',
  },
  {
    id: 'w2Gd08E7Ch0',
    title: 'Music Video',
    description: 'Creative and artistic music video with a unique visual concept. Perfectly synced with the music to create a compelling story.',
    thumbnailUrl: 'https://img.youtube.com/vi/w2Gd08E7Ch0/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/w2Gd08E7Ch0',
    aiHint: 'music performance',
  },
  {
    id: 'ltftA-IF3uA',
    title: 'Social Media Ad',
    description: 'Short, snappy, and engaging ad optimized for social media platforms. Designed to stop the scroll and drive engagement.',
    thumbnailUrl: 'https://img.youtube.com/vi/ltftA-IF3uA/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/ltftA-IF3uA',
    aiHint: 'social media',
  },
  {
    id: '_Fo95z964gU',
    title: 'Cinematic Japan Travel',
    description: 'A journey through the vibrant streets and serene landscapes of Japan, captured with a cinematic touch.',
    thumbnailUrl: 'https://img.youtube.com/vi/_Fo95z964gU/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/_Fo95z964gU',
    aiHint: 'japan travel',
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [featuredVideo, setFeaturedVideo] = useState<Video>(portfolioVideos[0]);

  const openVideoPlayer = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="w-full py-16 sm:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">My Work</h2>
           <div className="absolute left-1/2 -bottom-4 h-0.5 w-24 bg-foreground/20 -translate-x-1/2" />
        </div>

        {/* Featured Video Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 p-8 bg-accent/30 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">{featuredVideo.title}</h3>
                <p className="text-muted-foreground text-lg">{featuredVideo.description}</p>
            </div>
            <div
              onClick={() => openVideoPlayer(featuredVideo)}
              className="group relative aspect-video cursor-pointer order-1 md:order-2 rounded-lg overflow-hidden"
            >
                <Image
                    src={featuredVideo.thumbnailUrl}
                    alt={featuredVideo.title}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={featuredVideo.aiHint}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <PlayCircle className="h-20 w-20 text-white/80" />
                </div>
            </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {portfolioVideos.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => setFeaturedVideo(video)}
                      className={`relative aspect-video rounded-md overflow-hidden cursor-pointer transition-all duration-300
                        ${featuredVideo.id === video.id ? 'ring-2 ring-primary ring-offset-4 ring-offset-background' : 'opacity-70 hover:opacity-100'}
                      `}
                    >
                        <Image
                          src={video.thumbnailUrl}
                          alt={video.title}
                          width={480}
                          height={270}
                          className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>

      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && closeVideoPlayer()}>
          <DialogContent className="max-w-4xl p-0 bg-background border-none">
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
