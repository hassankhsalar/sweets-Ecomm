"use client"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import c1 from ".././../public/c1.jpg";
import c2 from ".././../public/c2.jpg";
import c3 from ".././../public/c3.jpg";
import c4 from ".././../public/c4.jpg";

const slides = [
  {
    id: 1,
    title: "Dhaka Prime\nSweets Collection",
    subtitle: "LIMITED TIME OFFER",
    description:
      "Indulge in our handcrafted sweets made with traditional recipes and the finest ingredients. Perfect for festivals and celebrations.",
    buttonText: "SHOP NOW",
    image: c1,
  },
  {
    id: 2,
    title: "Premium\nGift Boxes",
    subtitle: "FESTIVE SPECIAL",
    description:
      "Surprise your loved ones with beautifully packed premium sweet boxes made with love.",
    buttonText: "EXPLORE",
    image: c2,
  },
  {
    id: 3,
    title: "Traditional\nDelights",
    subtitle: "NEW ARRIVAL",
    description:
      "Experience authentic taste crafted with heritage recipes passed through generations.",
    buttonText: "ORDER NOW",
    image: c3,
  },
  {
    id: 4,
    title: "Traditional\nDelights",
    subtitle: "NEW ARRIVAL",
    description:
      "Experience authentic taste crafted with heritage recipes passed through generations.",
    buttonText: "ORDER NOW",
    image: c4,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto  h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Single div with background image and overlay */}
          <div 
            className="relative w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image.src})`,
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 "></div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center p-16">
              <div className="text-white max-w-xl">
                <p className="text-yellow-400 tracking-widest mb-4 text-sm">
                  {slide.subtitle}
                </p>

                <h1 className="text-5xl font-bold leading-tight whitespace-pre-line mb-6">
                  {slide.title}
                </h1>

                <p className="text-gray-200 mb-8 max-w-md">
                  {slide.description}
                </p>

                <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full font-semibold shadow-lg">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/50 transition z-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/50 transition z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}