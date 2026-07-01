import React, { useState, useEffect } from "react";
import { useEnquiryModal } from "./EnquiryModal";

export default function Banner() {
  const { openModal } = useEnquiryModal();
  const images = [
    "../Assets/banner1.png",
    "../Assets/banner2.png",
    "../Assets/banner3.png",
    // "../Assets/banner4.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 🔁 Change image every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🔁 Background Image Carousel */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Optional overlay (if needed for clarity) */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        <h1
          className="
            text-xl 
            md:text-3xl 
            lg:text-6xl 
            font-extrabold 
            uppercase 
            tracking-widest
            bg-gradient-to-r from-white/80 via-white/80 to-white/80
            bg-clip-text 
            text-transparent
            drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]
          "
        >
          Introducing <br /> SHARJAH SUSTAINABLE CITY 2 <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest
            bg-gradient-to-r from-white/90 via-white/90 to-white/90
            bg-clip-text 
            text-transparent
            drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]
          ">
            Starts at
          </span>
          <span className="ml-1 text-2xl md:text-3xl lg:text-6xl font-bold tracking-widest
            bg-gradient-to-r from-white/90 via-white/90 to-white/90
            bg-clip-text 
            text-transparent
            drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]
          ">
            AED 2.46 Mn
          </span>
        </h1>
      </div>

      <button onClick={openModal} className="absolute items-center justify-center lg:bottom-28 bottom-52 z-10 font-bold text-lg
        bg-gradient-to-r from-white/90 via-white/90 to-white/90 bg-clip-text
        text-transparent drop-shadow-[2px_2px_10px_rgba(0,0,0,1.6)]
        border-2 rounded-md border-[#ffffff] bg-transparent hover:text-[#ffffff] px-6 py-2 transition">
        Get Complete Costing Details
      </button>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute items-center justify-center bottom-6 -translate-x-1/2 animate-bounce z-10"
      >
        <i className="ri-arrow-down-circle-fill text-[#997736] text-5xl "></i>
      </a>
    </section>
  );
}
