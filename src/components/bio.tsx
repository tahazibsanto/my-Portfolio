
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
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
              </p>
              <p>
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
