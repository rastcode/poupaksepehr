"use client";
import { createContext, useContext, useState, useEffect } from "react";

// وارد کردن فایل‌های JSON زبان‌های مختلف
import fa from "../data/fa.json";
import en from "../data/en.json";
import ar from "../data/ar.json";

const ContentContext = createContext();

export const ContentProvider = ({ children, initialLanguage = "ar" }) => {
  
  // state برای زبان و محتوا
  const [language, setLanguage] = useState(initialLanguage);
  const [content, setContent] = useState(ar);

  // استفاده از useEffect برای بارگذاری زبان ذخیره‌شده در localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || initialLanguage;
    setLanguage(savedLang);
    setContent(savedLang === "fa" ? fa : savedLang === "en" ? en : ar);
  }, [initialLanguage]);


  // تابع تغییر زبان
  const toggleLanguage = (lang) => {
    setContent(lang === "fa" ? fa : lang === "en" ? en : ar);
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <ContentContext.Provider value={{ ...content, toggleLanguage, language }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
