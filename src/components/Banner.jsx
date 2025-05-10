"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/b1.webp", alt: "ارائه خدمات مشاوره تخصصی برای دانشجویان بین‌المللی" },
  { src: "/b3.webp", alt: "دریافت پذیرش تحصیلی در ایران با موسسه پوپک سپهر" },
];

function Banner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("left");
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full aspect-[12/7] overflow-hidden"
      aria-label="اسلایدر معرفی خدمات موسسه پوپک سپهر"
    >
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
            i === index
              ? "translate-x-0 opacity-100 z-20"
              : direction === "left"
              ? "translate-x-full opacity-0 z-10"
              : "-translate-x-full opacity-0 z-10"
          }`}
          sizes="100vw"
          priority={i === 0}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </section>
  );
}

export default Banner;
