import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AIStudio from "@/components/ai-studio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <AIStudio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
