'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Rewind, FastForward, Volume2, VolumeX } from 'lucide-react';
import type { Video } from '@/lib/types';

const portfolioVideos: Video[] = [
  {
    id: 1,
    title: 'Corporate Brand Story',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    aiHint: 'corporate office',
  },
  {
    id: 2,
    title: 'Product Launch Teaser',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    aiHint: 'modern product',
  },
  {
    id: 3,
    title: 'Music Video',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aiHint: 'concert lights',
  },
  {
    id: 4,
    title: 'Documentary Short',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    aiHint: 'nature landscape',
  },
  {
    id: 5,
    title: 'Social Media Ad',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    aiHint: 'city life',
  },
  {
    id: 6,
    title: 'Wedding Highlights',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    aiHint: 'wedding couple',
  },
];

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateCurrentTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateCurrentTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateCurrentTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [selectedVideo]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  
  const handleSkip = (amount: number) => {
    if(videoRef.current) videoRef.current.currentTime += amount;
  }
  
  const handleMuteToggle = () => {
    if(videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };
  
  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 animate-in fade-in-0 duration-1000">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of projects that showcase our passion for visual storytelling.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
              onClick={() => openModal(video)}
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
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                     <Play className="h-12 w-12 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && closeModal()}>
          <DialogContent className="max-w-4xl p-0">
            {selectedVideo && (
              <>
                <DialogHeader className="p-4 border-b">
                  <DialogTitle>{selectedVideo.title}</DialogTitle>
                </DialogHeader>
                <div className="aspect-video relative">
                  <video ref={videoRef} src={selectedVideo.videoUrl} className="w-full h-full" muted={isMuted} autoPlay={false} />
                </div>
                <div className="p-4 space-y-4">
                  <Slider
                    value={[currentTime]}
                    max={duration || 0}
                    step={1}
                    onValueChange={handleSeek}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" onClick={handlePlayPause}>
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleSkip(-10)}>
                        <Rewind className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleSkip(10)}>
                        <FastForward className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground tabular-nums">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleMuteToggle}>
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
