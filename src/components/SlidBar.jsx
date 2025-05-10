"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useContent } from "../contex/ContentContext";
export default function MobileSidebar({ refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const { general } = useContent();
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleNavClick = (ref) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Icon - همیشه بالای همه نمایش داده میشه */}
      <div className="md:hidden fixed top-4 right-4 z-[100]">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-slate-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-slate-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 p-5 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="space-y-4 text-slate-800 font-semibold text-lg mt-16">
            <li><LanguageSwitcher /></li>
            <li>
              <button
                onClick={() => handleNavClick(refs?.servisesRef)}
                className="hover:text-blue-500"
              >
                {general.khadamat}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(refs?.questionsRef)}
                className="hover:text-blue-500"
              >
                {general.faq}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(refs?.expertsRef)}
                className="hover:text-blue-500"
              >
                {general.experts}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick(refs?.footerRef)}
                className="hover:text-blue-500"
              >
                {general.contactUs}
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2 text-slate-200 mt-10">
          <button
            onClick={() => handleNavClick(refs?.evaluationRef)}
            className="p-2 rounded-lg bg-teal-400 hover:bg-teal-500 transition cursor-pointer"
          >
            {general.arzeshyabi}
          </button>
          <button
            onClick={() => handleNavClick(refs?.consultationRef)}
            className="p-2 px-5 rounded-lg bg-blue-400 hover:bg-blue-500 transition cursor-pointer"
          >
            {general.moshavere}
          </button>
        </div>
      </aside>
    </>
  );
}
