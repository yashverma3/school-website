"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/carousel/photo-1.jpg",
  "/carousel/photo-2.jpg",
  "/carousel/photo-3.jpg",
  "/carousel/photo-4.jpg",
  "/carousel/photo-5.jpg",
];

const PhotoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetInterval();
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative overflow-hidden">
      <Carousel className="relative">
        <CarouselContent
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0 flex items-center justify-center">
              <div className="w-[100%] h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-full flex"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          onClick={goToPrevious}
          disabled={false}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 text-white p-2 rounded-full transition shadow-lg hover:scale-150"
        />
        <CarouselNext 
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 text-white p-2 rounded-full transition shadow-lg hover:scale-150"
        />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
