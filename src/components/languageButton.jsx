"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useContent } from "../contex/ContentContext";

const LanguageButton = () => {
  const { language, toggleLanguage } = useContent();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // مسیر فعلی (مثلاً /fa)

  const languages = [
    { code: "fa", label: "فارسی" },
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  const getLangLabel = () => {
    const lang = languages.find((l) => l.code === language);
    return lang ? lang.label : "Language";
  };

  const handleLangChange = (lang) => {
    if (lang !== language) {
      toggleLanguage(lang);
      // تغییر مسیر به URL زبان جدید
      router.push(`/${lang}`);
    }
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border rounded bg-white flex items-center gap-2 shadow hover:shadow-md transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        🌐 {getLangLabel()}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
          <ul>
            {languages.map(({ code, label }) => (
              <li
                key={code}
                className={`p-2 cursor-pointer text-right hover:bg-gray-100 ${
                  code === language ? "font-bold text-blue-500" : ""
                }`}
                onClick={() => handleLangChange(code)}
                role="menuitem"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
