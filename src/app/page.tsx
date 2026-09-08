import Hero from "@/components/sections/Hero";
import Awards from "@/components/sections/Awards";
import Origin from "@/components/sections/Origin";
import TastingNotes from "@/components/sections/TastingNotes";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Awards />
      <Origin />
      <TastingNotes />
      <Process />
      <Products />
      <Gallery />
      <Contact />
    </main>
  );
}
