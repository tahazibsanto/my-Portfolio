import Link from "next/link";
import { Button } from "@/components/ui/button";

const Bracket = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const baseClasses = "absolute w-8 h-8 md:w-12 md:h-12 border-foreground";
  const positionClasses = {
    tl: "top-0 left-0 border-t-2 border-l-2",
    tr: "top-0 right-0 border-t-2 border-r-2",
    bl: "bottom-0 left-0 border-b-2 border-l-2",
    br: "bottom-0 right-0 border-b-2 border-r-2",
  };
  return <div className={`${baseClasses} ${positionClasses[position]}`} />;
};

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex h-[70vh] min-h-[500px] flex-col items-center justify-center text-center">
          <div className="relative inline-block p-12">
            <Bracket position="tl" />
            <Bracket position="tr" />
            <h1 className="text-4xl font-bold tracking-[0.3em] sm:text-5xl md:text-6xl lg:text-7xl font-headline uppercase">
              Tahazib Santo
            </h1>
            <p className="mt-6 text-lg tracking-widest text-muted-foreground sm:text-xl">
              Professional Video Editor
            </p>
            <Bracket position="bl" />
            <Bracket position="br" />
          </div>
          <div className="mt-4">
            <Button asChild size="lg" variant="link">
              <Link href="#portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
