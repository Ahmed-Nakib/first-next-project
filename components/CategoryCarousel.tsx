"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const categories = [
  { name: "Gown", image: "/category.jpg" },
  { name: "Jacket", image: "/category.jpg" },
  { name: "Long Sleeve T-Shirt", image: "/category.jpg" },
  { name: "Hoodie", image: "/category.jpg" },
  { name: "Accessories", image: "/category.jpg" },
  { name: "Sweater & Sweatshirt", image: "/category.jpg" },
  { name: "Shirt", image: "/category.jpg" },
];

export default function CategoryCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  // Bind navigation buttons after swiper is initialized
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full py-14 bg-white relative">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wide text-gray-900">
        Shop By Category
      </h2>

      {/* RIGHT SIDE BUTTON GROUP */}
      <div className="absolute right-4 bottom-1 z-30 transform -translate-y-1/2 flex items-center gap-3">

        <button
          ref={prevRef}
          aria-label="Previous"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md border border-gray-200
                     hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          ref={nextRef}
          aria-label="Next"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0C2D57] shadow-md border border-gray-200
                     hover:bg-[#1A4D8F] hover:shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={6}
        spaceBetween={20}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="pb-14"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center group cursor-pointer select-none px-6 py-4">

              <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full p-[3px]
                              bg-gradient-to-br from-[#0C2D57] to-[#1A4D8F]
                              hover:from-[#1A4D8F] hover:to-[#0C2D57]
                              transition-all duration-500 shadow-md group-hover:shadow-2xl">

                <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-sm 
                                transition-all duration-500 group-hover:scale-105">

                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <p className="text-base font-semibold mt-3 text-center text-gray-800 tracking-wide 
                            group-hover:text-[#0C2D57] transition-all duration-300">
                {cat.name}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
