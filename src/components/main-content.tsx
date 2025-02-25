"use client";

import React, { useEffect, useState } from "react";
import PhotoCarousel from "@/components/photo-carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MainContent = () => {
  const [isLarge, setIsLarge] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLarge(window.innerWidth >= 1600);
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavigation = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div>
      {isLarge ? (
        <div className="flex items-center px-10">
          <div className="mx-auto">
            <a href="http://fees.kpsallahabad.org" target="_blank">
              <Image
                src="/payFeesOnline.png"
                alt="xyz"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </a>
          </div>
          <PhotoCarousel />
          <div className="flex mx-auto flex-col items-center space-y-7">
            <Button
              onClick={() => handleNavigation("http://fees.kpsallahabad.org")}
              className="w-full text-lg px-10 py-6 bg-green-600 shadow-lg hover:bg-green-800 hover:shadow-xl transition duration-300"
            >
              Explore
            </Button>
            <Button
              onClick={() => handleNavigation("https://drive.google.com/file/d/12AkIewix-6hu9wwp890YMhGymH3C-x9K/view?usp=sharing")}
              className="w-full text-lg px-10 py-6 bg-green-600 shadow-lg hover:bg-green-800 hover:shadow-xl transition duration-300"
            >
              Download prospectus
            </Button>
            <Button
              onClick={() => handleNavigation("https://drive.google.com/file/d/12AkIewix-6hu9wwp890YMhGymH3C-x9K/view?usp=sharing")}
              className="w-full text-lg px-10 py-6 bg-green-600 shadow-lg hover:bg-green-800 hover:shadow-xl transition duration-300"
            >
              Rules and guidelines
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-7 px-10 space-y-7 md:space-y-0 md:space-x-7">
          <PhotoCarousel />
          <div className="flex flex-col md:flex-row lg:flex-col items-center sm:gap-5 md:gap-10 lg:gap-5">
            <div className="mx-auto">
              <a href="http://fees.kpsallahabad.org" target="_blank">
                <Image
                  src="/payFeesOnline.png"
                  alt="xyz"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </a>
            </div>
            <div className="flex flex-col items-center space-y-7">
              <Button
                onClick={() => handleNavigation("http://fees.kpsallahabad.org")}
                className="w-full text-lg px-10 py-6 bg-green-600 shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300"
              >
                Explore
              </Button>
              <Button
                onClick={() => handleNavigation("https://drive.google.com/file/d/12AkIewix-6hu9wwp890YMhGymH3C-x9K/view?usp=sharing")}
                className="w-full text-lg px-10 py-6 bg-green-600 shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300"
              >
                Download prospectus
              </Button>
              <Button
                onClick={() => handleNavigation("https://drive.google.com/file/d/12AkIewix-6hu9wwp890YMhGymH3C-x9K/view?usp=sharing")}
                className="w-full text-lg px-10 py-6 bg-green-600 shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300"
              >
                Rules and guidelines
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
