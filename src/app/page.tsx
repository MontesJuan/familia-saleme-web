import Hero from "@/components/sections/Hero";
import Awards from "@/components/sections/Awards";
import Origin from "@/components/sections/Origin";
import TastingNotes from "@/components/sections/TastingNotes";
import Pairings from "@/components/sections/Pairings";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Awards />
      <Origin />
      <TastingNotes />
      <Pairings />
      <Process />
      <Products />
      <Gallery />
      <Contact />
    </main>
  );
}
