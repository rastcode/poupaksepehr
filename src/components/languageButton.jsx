"use client";
import { useState } from "react";
import { useContent } from "../contex/ContentContext";

const LanguageButton = () => {
  const { language, toggleLanguage } = useContent();
  const [open, setOpen] = useState(false);

  const getLangLabel = () => {
    switch (language) {
      case "fa":
        return "فارسی";
      case "en":
        return "English";
      case "ar":
        return "العربية";
      default:
        return "Language";
    }
  };

  const handleLangChange = (lang) => {
    toggleLanguage(lang);
    setOpen(false); // بعد از انتخاب زبان dropdown بسته بشه
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border rounded bg-white"
      >
        🌐 {getLangLabel()}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-40 bg-white border rounded shadow">
          <ul>
            <li
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLangChange("fa")}
            >
              فارسی
            </li>
            <li
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLangChange("en")}
            >
              English
            </li>
            <li
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLangChange("ar")}
            >
              العربية
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
