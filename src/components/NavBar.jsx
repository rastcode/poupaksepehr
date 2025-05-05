"use client";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "../contex/ContentContext";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./languageSwitcher";

function NavBar({ refs }) {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { general } = useContent();
  const { karshenasi, arshad, toggleLanguage, language } = useContent();
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false); // اگه خواستی اسلایدبار ببنده
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* نوبار اصلی */}
      <div
        className={`fixed w-full max-w-screen-lg top-0 z-50 transition-all duration-150 md:rounded-b-lg mx-3 ${
          scrolled
            ? "bg-slate-100 bg-opacity-75 backdrop-blur-sm border-b-2"
            : "bg-transparent"
        }`}
      >
        <div className="hidden md:flex w-full items-center justify-between p-4 h-16">
          <div className="flex gap-2 text-slate-200">
            <div className="p-2 rounded-lg bg-teal-400 cursor-pointer">
              {general.arzeshyabi}
            </div>
            <div className="p-2 rounded-lg bg-blue-400  cursor-pointer">
              {general.moshavere}
            </div>
          </div>
          <div className="flex gap-2">
       
          <LanguageSwitcher/>
              
           
            <div className="corsur-pointer">
              <Image src="/amin1.png" width={40} height={40} alt="amin" />
            </div>
          </div>
        </div>

        <div className="p-3 w-full flex justify-between items-center md:hidden">
          <svg
            onClick={() => setSidebarOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 stroke-slate-900 hover:stroke-blue-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="flex justify-end w-full">
            <Link
              href="/"
              className="text-xl font-bold flex items-center justify-between"
            >
              <p>پوپک سپهر</p>
              <Image src="/amin1.png" width={25} height={25} alt="logo" />
            </Link>
          </div>
          <div></div>
        </div>
      </div>

      {/* ✅ سایدبار موبایل */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white w-64 h-full fixed top-0 right-0 p-5 z-50 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            
            <ul className="space-y-4 text-slate-800 font-semibold text-lg mt-16">
            <LanguageSwitcher/>
              <li onClick={() => scrollToSection(refs?.servisesRef)}>{general.khadamat}</li>
              <li onClick={() => scrollToSection(refs?.questionsRef)}>
                 {general.faq}
              </li>
              <li onClick={() => scrollToSection(refs?.expertsRef)}>
                {general.experts}
              </li>
              <li onClick={() => scrollToSection(refs?.footerRef)}>
                {general.contactUs}
              </li>
            </ul>
            <div className="flex gap-2 text-slate-200 mt-10">
            <div className="p-2 rounded-lg bg-teal-400 cursor-pointer">
              {general.arzeshyabi}
            </div>
            <div className="p-2 px-5 rounded-lg bg-blue-400  cursor-pointer">
              {general.moshavere}
            </div>
          </div>
          </div>
          
        </div>
      )}
    </>
  );
}

export default NavBar;
