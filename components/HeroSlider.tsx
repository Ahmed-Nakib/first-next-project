"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Static imports for Next.js images
import slide1 from "../public/slide-1.png";
import slide2 from "../public/slide-2.png";
import slide3 from "../public/slide-3.png";

const slides = [
  {
    id: 1,
    image: slide1,
    title: "Stylish & Modern",
    subtitle: "Upgrade your lifestyle with our collection",
  },
  {
    id: 2,
    image: slide2,
    title: "Exclusive Offers",
    subtitle: "Shop the best deals today",
  },
  {
    id: 3,
    image: slide3,
    title: "New Arrivals",
    subtitle: "Fresh products just for you",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-lg mb-10">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="text-white text-lg sm:text-2xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Left/Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
      >
        &#10095;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
