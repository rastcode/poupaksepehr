"use client";

import React, { useState } from "react";
import "aos/dist/aos.css";

function Card({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-aos="fade-left"
      className="md:shadow-xl md:rounded-lg w-full pb-0 flex items-start flex-col rounded-b-xl shadow-sm gap-2 overflow-hidden transition-all duration-150"
    >
      <div className="border border-teal-600 p-2 rounded-lg m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 stroke-teal-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
      </div>

      <h1 className="m-2 font-bold text-xl text-slate-800">{title}</h1>

      {/* محتوای بازشونده */}
      <div
        className={`m-2 w-full text-slate-600 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-20"
        }`}
      >
        <ol className="list-decimal list-inside  ml-6 space-y-1 text-gray-700">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      {/* دکمه‌ی باز و بسته‌سازی */}
      <div
        onClick={toggleCard}
        className="w-full bg-slate-50 flex justify-center cursor-pointer p-2 rounded-b-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-5 stroke-teal-700 transition-transform duration-150 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
