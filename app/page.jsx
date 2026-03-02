import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
          url('/bg.png')
        `
      }}
    >
      <div className="pt-10 px-4">
        <HeroCarousel/>
      </div>

      <div>
        <Categories/>
      </div>
    </section>
  );
}