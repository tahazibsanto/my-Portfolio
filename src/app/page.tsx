import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import AIStudio from "@/components/ai-studio";
import SocialLinks from "@/components/social-links";

export default function Home() {
  return (
    <>
      <SocialLinks />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <AIStudio />
        <Contact />
      </main>
    </>
  );
}
