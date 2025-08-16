import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Reels from "@/components/reels";
import Contact from "@/components/contact";
import SocialLinks from "@/components/social-links";
import Bio from "@/components/bio";

export default function Home() {
  return (
    <>
      <SocialLinks />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Reels />
        <Bio />
        <Contact />
      </main>
    </>
  );
}
