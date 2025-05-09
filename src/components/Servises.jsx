"use client";
import React from "react";
import Card from "./Card";
import { useContent } from "../contex/ContentContext";
import SeoHead from "../components/SeoHead";

function Servises() {
  const { services, general, language } = useContent();

  return (
    <>
      {/* Meta SEO */}
      <SeoHead 
        title={general.khadamat} 
        description="خدمات مختلف موسسه برای دانشجویان بین‌المللی از جمله مشاوره، پذیرش، ویزا و دیگر خدمات مرتبط." 
        path={`/${language}/services`} 
        ogTitle={general.khadamat} 
        ogDescription="خدمات مختلف موسسه برای دانشجویان بین‌المللی" 
        ogImage="/images/og-services.jpg" 
      />

      {/* Structured Data - Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": general.khadamat,
            "itemListOrder": "http://schema.org/ItemListOrderAscending",
            "numberOfItems": services.length,
            "itemListElement": services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.items.join(", ")
            }))
          })
        }}
      />

      {/* Page Content */}
      <div className="md:border-b-2 md:mt-7 p-2 bg-slate-50 flex-col flex items-center gap-3 justify-center font-bold text-slate-900 m-1">
        <h1 className="font-bold text-2xl text-teal-900">{general.khadamat}</h1>
        
        <div className="md:grid md:grid-cols-2 w-full p-2 bg-slate-50 h-1/3 flex-col flex items-center gap-3 justify-center font-bold text-slate-900 m-1">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="mt-2 w-full flex flex-col bg-slate-50 gap-2 items-center justify-center"
            >
              <Card title={service.title} items={service.items} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Servises;
