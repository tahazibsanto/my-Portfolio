
import Image from 'next/image';

export default function Bio() {
  return (
    <section id="bio" className="w-full py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Bio image"
              width={600}
              height={800}
              className="object-cover w-full h-full"
              data-ai-hint="portrait woman"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">BIO</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m Tahazib Santo, a video editor passionate about turning stories into visuals that connect with people. With experience in documentary-style editing, YouTube content creation, and cinematic storytelling, I focus on making videos that feel real, engaging, and thought-provoking.
              </p>
              <p>
                Over the years, I’ve worked on projects ranging from geopolitics and history documentaries to creative YouTube content, always aiming to keep viewers hooked with clean visuals, smooth pacing, and a sense of curiosity. My style is minimal, story-driven, and always adapted to the needs of the project.
              </p>
              <p>
                What drives me is the belief that a well-edited video isn’t just about cuts and effects—it’s about emotion, flow, and making sure the audience feels something.
              </p>
              <p>
                Now, I’m looking to collaborate with creators, brands, and channels who want their ideas transformed into powerful visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
