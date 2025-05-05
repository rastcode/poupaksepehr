"use client";
import { createContext, useContext, useState, useEffect } from "react";

// وارد کردن فایل‌های JSON زبان‌های مختلف
import fa from "../data/fa.json";
import en from "../data/en.json";
import ar from "../data/ar.json";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  // state برای زبان و محتوا
  const [language, setLanguage] = useState("ar"); // زبان پیش‌فرض فارسی
  const [content, setContent] = useState(ar); // محتوای پیش‌فرض فارسی

  // استفاده از useEffect برای بارگذاری زبان ذخیره‌شده در localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
      if (savedLang === "fa") {
        setContent(fa);
      } else if (savedLang === "en") {
        setContent(en);
      } else if (savedLang === "ar") {
        setContent(ar);
      }
    }
  }, []);

  // تابع تغییر زبان
  const toggleLanguage = (lang) => {
    if (lang === "fa") setContent(fa);
    else if (lang === "en") setContent(en);
    else if (lang === "ar") setContent(ar);
    setLanguage(lang);
    localStorage.setItem("lang", lang); // ذخیره زبان در localStorage
  };

  return (
    <ContentContext.Provider value={{ ...content, toggleLanguage, language }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
