"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import cat1 from ".././../public/cat1.jpg";

const categories = [
  {
    id: 1, // Add this
    name: "লাড্ডু",
    slug: "laddu",
    image: cat1,
  },
  {
    id: 2, // Add this
    name: "ঝাঁই",
    slug: "jhai",
    image: cat1,
  },
  {
    id: 3, // Add this
    name: "দই",
    slug: "doi",
    image: cat1,
  },
  {
    id: 4, // Add this
    name: "আদি মিষ্টি",
    slug: "adi-misti",
    image: cat1,
  },
  {
    id: 5, // Add this
    name: "সন্দেশ",
    slug: "sandesh",
    image: cat1,
  },
  {
    id: 6, // Add this
    name: "স্পেশাল মিষ্টি",
    slug: "special-misti",
    image: cat1,
  },
];

export default function Categories() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-red-800">Our Categories</h2>

        <div className="w-16 h-1 bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>

        <p className="text-gray-600 mb-12">
          Explore our premium collection of handcrafted sweets and desserts
        </p>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleNavigation(`/category/${category.slug}`)}
              className="relative w-42 h-42 rounded-full overflow-hidden cursor-pointer group transition-all duration-300 hover:ring-4 hover:ring-red-700 hover:ring-offset-1"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={168}
                height={168}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full group-hover:bg-black/50 transition">
                <span className="text-white text-lg font-semibold">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
