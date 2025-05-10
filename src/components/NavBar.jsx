"use client";

import Image from "next/image";
import Link from "next/link";
import { useContent } from "../contex/ContentContext";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./languageSwitcher";
import MobileSidebar from "./SlidBar";

function NavBar({ refs }) {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { general } = useContent();

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full max-w-screen-xl top-0 z-50 transition-all duration-150 md:rounded-b-lg mx-3 p-4 ${
          scrolled
            ? "bg-slate-100 bg-opacity-75 backdrop-blur-sm border-b-2"
            : "bg-transparent"
        }`}
        aria-label="Main Navigation"
      >
        <div className="hidden md:flex w-full items-center justify-between p-4 h-16">
          <div className="flex gap-2 text-slate-200">
            <button
              onClick={() => scrollToSection(refs?.evaluationRef)}
              className="p-2 rounded-lg bg-teal-400 hover:bg-teal-500 transition cursor-pointer"
              aria-label="ارزیابی ارزش"
            >
              {general.arzeshyabi}
            </button>
            <button
              onClick={() => scrollToSection(refs?.consultationRef)}
              className="p-2 rounded-lg bg-blue-400 hover:bg-blue-500 transition cursor-pointer"
              aria-label="مشاوره"
            >
              {general.moshavere}
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            <Link href="/" aria-label="صفحه اصلی">
              <Image
                src="/amin1.png"
                width={40}
                height={40}
                alt="User Avatar"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="p-3 w-full flex justify-end  items-center md:hidden">
        
          
            <MobileSidebar />
          <Link
            href="/"
            className="text-xl font-bold flex  items-center gap-2"
            aria-label="صفحه اصلی"
          >
            <span>پوپک سپهر</span>
            <Image src="/amin1.png" width={30} height={25} alt="Logo" />
          </Link>
        </div>
      </nav>
     
    </>
  );
}

export default NavBar;
