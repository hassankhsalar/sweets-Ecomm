import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import Categories from "./components/Categories";
import ProductCollection from "./components/ProductCollection";
import SignatureProducts from "./components/SignatureProducts";

export default function Home() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.93)),
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

      <div>
        <ProductCollection/>
      </div>

      <div>
        <SignatureProducts/>
      </div>
    </section>
  );
}