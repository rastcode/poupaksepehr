"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { useContent } from "../contex/ContentContext";
import SeoHead from "../components/SeoHead";

function Documents() {
  const { general, ducuments, language,lang } = useContent();
  const [level, setLevel] = useState(ducuments.karshenasi);
  const [selectedLevel, setSelectedLevel] = useState("karshenasi");

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  useEffect(() => {
    setLevel(ducuments[selectedLevel]);
  }, [ducuments, selectedLevel]);

  const handleLevelChange = (levelKey) => {
    setSelectedLevel(levelKey);
    setLevel(ducuments[levelKey]);
  };

  const levelOptions = [
    { key: "karshenasi", label: general.karshenasi },
    { key: "arshad", label: general.arshad },
    { key: "doctorate", label: general.doctorate },
    { key: "medical", label: general.medical },
  ];

  return (
    <>
      <SeoHead
        title={`${general.dacuments} | Poupak Sepehr`}
        description="اطلاعات مربوط به مدارک لازم برای مقاطع مختلف تحصیلی"
        path={`/${language}/documents`}
        ogTitle={`${general.dacuments} | Poupak Sepehr`}
        ogDescription="اطلاعات مربوط به مدارک مورد نیاز برای مقاطع مختلف تحصیلی"
        ogImage="/images/og-documents.jpg"
      />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "مدارک مورد نیاز",
          itemListOrder: "http://schema.org/ItemListOrderAscending",
          numberOfItems: level.length,
        })}
      </script>

      <section
        className="flex flex-col items-center p-3 gap-3"
        aria-labelledby="documents-section"
      >
        <h1
          id="documents-section"
          className="font-bold text-2xl text-teal-900 my-4"
        >
          {general.dacuments}
        </h1>

        <nav
          className="rounded-lg font-medium text-sm w-full flex flex-wrap justify-between shadow-lg gap-1"
          aria-label="Select Education Level"
        >
          {levelOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleLevelChange(key)}
              className={`rounded-lg p-4 w-1/3 text-center cursor-pointer transition-all duration-200 
                ${
                  selectedLevel === key
                    ? "bg-blue-500 text-white ring-2 ring-blue-600"
                    : "bg-slate-50 hover:bg-blue-400 hover:text-white hover:ring-1 hover:ring-blue-600"
                }`}
              aria-pressed={selectedLevel === key}
            >
              {label}
            </button>
          ))}
        </nav>

        <div
        dir={`${lang==='en'?"ltr":"rtl"}`}
          data-aos="fade-left"
          className="rounded-lg bg-slate-200 w-full flex flex-col  gap-2 p-3 shadow-lg"
        >
          {Array.isArray(level) && level.length > 0 ? (
            <ul   className="items-center  w-full text-gray-800 leading-7">
              {level.map((item, index) => (
                <li  key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">{general.noData}</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Documents;
