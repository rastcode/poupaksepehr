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
              <Image src="/amin1.png" width={40} height={40} alt="User Avatar" />
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="p-3 w-full flex justify-between items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="باز کردن منو"
            className="stroke-slate-900 hover:stroke-blue-500 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link href="/" className="text-xl font-bold flex items-center gap-2" aria-label="صفحه اصلی">
            <span>پوپک سپهر</span>
            <Image src="/amin1.png" width={25} height={25} alt="Logo" />
          </Link>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
          role="button"
          aria-label="بستن منو"
        >
          <aside
            className="bg-white w-64 h-full fixed top-0 right-0 p-5 z-50 shadow-lg"
            onClick={(e) => e.stopPropagation()}
            aria-label="منوی جانبی"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="space-y-4 text-slate-800 font-semibold text-lg mt-16">
                <li><LanguageSwitcher /></li>
                <li>
                  <button
                    onClick={() => scrollToSection(refs?.servisesRef)}
                    className="hover:text-blue-500"
                    aria-label="خدمات"
                  >
                    {general.khadamat}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(refs?.questionsRef)}
                    className="hover:text-blue-500"
                    aria-label="سوالات متداول"
                  >
                    {general.faq}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(refs?.expertsRef)}
                    className="hover:text-blue-500"
                    aria-label="کارشناسان"
                  >
                    {general.experts}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(refs?.footerRef)}
                    className="hover:text-blue-500"
                    aria-label="تماس با ما"
                  >
                    {general.contactUs}
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex gap-2 text-slate-200 mt-10">
              <button
                onClick={() => scrollToSection(refs?.evaluationRef)}
                className="p-2 rounded-lg bg-teal-400 hover:bg-teal-500 transition cursor-pointer"
                aria-label="ارزیابی ارزش"
              >
                {general.arzeshyabi}
              </button>
              <button
                onClick={() => scrollToSection(refs?.consultationRef)}
                className="p-2 px-5 rounded-lg bg-blue-400 hover:bg-blue-500 transition cursor-pointer"
                aria-label="مشاوره"
              >
                {general.moshavere}
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default NavBar;
