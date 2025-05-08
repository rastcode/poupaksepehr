"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { useContent } from "../contex/ContentContext";
import SeoHead from "../components/SeoHead";

function Documents() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  const { general } = useContent();
  const { ducuments } = useContent();
  const [level, setLevel] = useState(ducuments.karshenasi);
  const [selectedLevel, setSelectedLevel] = useState("karshenasi");

  const LevelHandller = (e) => {
    setSelectedLevel(e);
    setLevel(ducuments[e]);
  };

  useEffect(() => {
    setLevel(ducuments[selectedLevel]);
  }, [ducuments, selectedLevel]);

  return (
    <>
      <SeoHead
        title={general.dacuments}
        description="اطلاعات مربوط به مدارک لازم برای مقاطع مختلف تحصیلی"
        path="/documents" // مسیر صفحه
        ogTitle={general.dacuments} // عنوان Open Graph
        ogDescription="اطلاعات مربوط به مدارک مورد نیاز برای مقاطع مختلف تحصیلی"
        ogImage="/path/to/your/image.jpg" // تصویر Open Graph
      />
      <div className="flex flex-col items-center p-3 gap-3">
        <h3 className="font-bold text-2xl text-teal-900">
          {" "}
          {general.dacuments}{" "}
        </h3>
        <div className="rounded-lg font-medium text-sm w-full flex justify-between shadow-lg gap-1 ">
          <div
            onClick={() => LevelHandller("karshenasi")}
            className={`rounded-lg p-4 w-1/3 flex justify-center cursor-pointer transition-all duration-200
              ${
                selectedLevel === "karshenasi"
                  ? "bg-blue-500 text-white ring-2 ring-blue-600"
                  : "bg-slate-50 hover:bg-blue-400 hover:text-slate-200 hover:ring-1 hover:ring-blue-600 hover:ring-offset-white hover:ring-offset-1"
              }
            `}
          >
            {general.karshenasi}
          </div>
          <div
            onClick={() => {
              LevelHandller("arshad");
            }}
            className={`rounded-lg p-4 w-1/3 flex justify-center cursor-pointer transition-all duration-200
              ${
                selectedLevel === "arshad"
                  ? "bg-blue-500 text-white ring-2 ring-blue-600"
                  : "bg-slate-50 hover:bg-blue-400 hover:text-slate-200 hover:ring-1 hover:ring-blue-600 hover:ring-offset-white hover:ring-offset-1"
              }
            `}
          >
            {general.arshad}
          </div>

          <div
            onClick={() => {
              LevelHandller("doctorate");
            }}
            className={`rounded-lg p-4 w-1/3 flex justify-center cursor-pointer transition-all duration-200
              ${
                selectedLevel === "doctorate"
                  ? "bg-blue-500 text-white ring-2 ring-blue-600"
                  : "bg-slate-50 hover:bg-blue-400 hover:text-slate-200 hover:ring-1 hover:ring-blue-600 hover:ring-offset-white hover:ring-offset-1"
              }
            `}
          >
            {general.doctorate}
          </div>
          <div
            onClick={() => {
              LevelHandller("medical");
            }}
            className={`rounded-lg p-4 w-1/3 flex justify-center cursor-pointer transition-all duration-200
              ${
                selectedLevel === "medical"
                  ? "bg-blue-500 text-white ring-2 ring-blue-600"
                  : "bg-slate-50 hover:bg-blue-400 hover:text-slate-200 hover:ring-1 hover:ring-blue-600 hover:ring-offset-white hover:ring-offset-1"
              }
            `}
          >
            {general.medical}
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="rounded-lg bg-slate-200 w-full flex flex-col items-start gap-2 p-3 shadow-lg"
        >
          {Array.isArray(level) && level.length > 0 ? (
            <ul className="list-decimal list-inside text-right w-full text-gray-800 leading-7">
              {level.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">مدارکی برای این مقطع ثبت نشده است.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Documents;
