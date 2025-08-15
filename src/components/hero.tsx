import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full animate-in fade-in duration-1000">
       <div className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="video editing production"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/50 to-transparent" />
      <div className="container relative z-10">
        <div className="flex h-[60vh] min-h-[400px] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Tahazib Santo: Video Editor
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              From raw footage to compelling stories, I blend artistry with technology to create videos that captivate and inspire.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="#contact">Start Your Project</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}