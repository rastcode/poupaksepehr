"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";

const images = ["/b1.webp", "/b2.webp", "/b1.webp"];


function Banner() {
    const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // عکس فعلی رو محو کن
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length); // بعدی بیاد
        setFade(true); // عکس جدید ظاهر شه
      }, 500); // زمان بین محو و ظاهر شدن
    }, 3500); // هر ۳.۵ ثانیه یک عکس جدید

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="relative w-full aspect-[4/2] overflow-hidden">
    <div
      key={index} // مهم برای ری‌مَونت شدن کامپوننت و اعمال ترنزیشن
      className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
        fade ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <Image
        src={images[index]}
        alt={`Slide ${index}`}
        fill
        className="object-cover w-full h-full"
        sizes="100vw"
        priority
      />
    </div>
  </div>
  )
}

export default Banner