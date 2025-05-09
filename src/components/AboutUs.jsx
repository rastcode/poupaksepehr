import React from "react";
import SeoHead from "../components/SeoHead";
import { useContent } from "../contex/ContentContext";

function AboutUs() {
  const { intro, language } = useContent();

  return (
    <>
      <SeoHead 
        title={intro.title || "About Us | Poupak Sepehr"} 
        description={intro.description || "Learn about Poupak Sepehr services and mission."} 
        path={`/${language}/about`} 
        ogTitle={intro.title || "About Us | Poupak Sepehr"} 
        ogDescription={intro.description || "Learn about Poupak Sepehr services and mission."} 
        ogImage="/images/og-about.jpg" 
      />
<script type="application/ld+json" suppressHydrationWarning>
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "پوپک سپهر",
    "url": "https://poupaksepehr.com",
    "logo": "https://poupaksepehr.com/logo.png", // آدرس لوگوی واقعی را قرار بده
    "description": intro.description,
    "founder": "نام بنیان‌گذار در صورت وجود", // اختیاری
    "foundingDate": "2015", // تاریخ تأسیس در صورت وجود
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "09389059097",
      "contactType": "Customer Support",
      "areaServed": "IR",
      "availableLanguage": ["Persian", "English", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "آدرس دفتر موسسه",
      "addressLocality": "Tehran",
      "addressCountry": "IR"
    },
    "sameAs": [
      "https://www.instagram.com/poupaksepehr/profilecard/?igsh=YXB3amFqNml4OWxo",
      "https://t.me/poupaksepehr"
    ]
  })}
</script>

      <section 
        className="md:w-2/3 p-2 bg-opacity-75 flex items-center font-bold text-slate-600 rounded-lg m-1 flex-col gap-6"
        aria-labelledby="about-us-title"
      >
        

        <p 
          className="text-justify leading-relaxed tracking-normal break-words text-lg"
          aria-label="About Us Description"
        >
          {intro.description || "Default about us content goes here..."}
        </p>
      </section>
    </>
  );
}

export default AboutUs;
