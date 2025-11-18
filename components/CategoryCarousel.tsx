"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Pixel-Perfect Category Data
const categories = [
  { name: "Gown", image: "/no-image.png" },
  { name: "Jacket", image: "/no-image.png" },
  { name: "Long Sleeve T-Shirt", image: "/long.png" },
  { name: "Hoodie", image: "/hoodie.png" },
  { name: "Accessories", image: "/acc.png" },
  { name: "Sweater & Sweatshirt", image: "/no-image.png" },
  { name: "Shirt", image: "/shirt.png" },
];

export default function CategoryCarousel() {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wide text-gray-900">
        Shop By Category
      </h2>

      <Swiper
        slidesPerView={6}
        spaceBetween={25}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="pb-12"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center group cursor-pointer select-none">
              <div className="w-32 h-32 rounded-full border-2 border-[#0C2D57] bg-white flex items-center justify-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-[#1A4D8F]">
                LOGO
              </div>
              <p className="text-base font-semibold mt-3 text-center text-gray-800 group-hover:text-[#0C2D57] transition-colors duration-300">
                {cat.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
