"use client";
import React, { useRef, useState } from "react";
import { useContent } from "../contex/ContentContext";
function Accordion({title,description}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const { lang } = useContent();
  return (
    <div dir={`${lang==='en'?"ltr":"rtl"}`} data-aos="fade-left" className="w-2/3 border rounded-md mb-4 overflow-hidden shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex justify-between w-full p-3 rounded-xl bg-white border border-slate-100"
      >
        <span className="font-semibold"> {title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden bg-white"
      >
        <div className="px-4 py-2 text-sm text-gray-700"> {description}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
