"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/b1.webp", "/b2.webp", "/b3.webp"];

function Banner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("left"); // راست به چپ

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("left");
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[12/7] overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          className={`object-cover absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
            i === index
              ? "translate-x-0 opacity-100 z-20"
              : direction === "left"
              ? "translate-x-full opacity-0 z-10"
              : "-translate-x-full opacity-0 z-10"
          }`}
          sizes="100vw"
          loading={i === 0 ? "eager" : "lazy"} // Preload only first image
        />
      ))}
    </div>
  );
}

export default Banner;
