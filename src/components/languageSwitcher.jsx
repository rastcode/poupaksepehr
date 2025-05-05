"use client";
import { useState } from "react";
import { useContent } from "../contex/ContentContext";
import LanguageButton from "./languageButton";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { toggleLanguage, language } = useContent();

  return (
    <div className="relative inline-block text-left z-50">
      <LanguageButton/>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg border rounded">
          <button
            onClick={() => {
              toggleLanguage("fa");
              setOpen(false);
            }}
            className="block w-full text-right p-2 hover:bg-gray-100"
          >
            فارسی
          </button>
          <button
            onClick={() => {
              toggleLanguage("ar");
              setOpen(false);
            }}
            className="block w-full text-right p-2 hover:bg-gray-100"
          >
            عربی
          </button>
          <button
            onClick={() => {
              toggleLanguage("en");
              setOpen(false);
            }}
            className="block w-full text-right p-2 hover:bg-gray-100"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
