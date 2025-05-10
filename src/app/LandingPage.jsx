"use client";

import Banner from "@/components/Banner";
import Documents from "@/components/Documents";
import Experts from "@/components/Experts";
import Footer from "@/components/Footer";
import Questions from "@/components/Questions";
import Servises from "@/components/Servises";
import React, { useRef } from "react";
import Headers from "sections/Headers";
import Head from "next/head";
import MobileSidebar from "@/components/SlidBar";

export default function Page() {
  const headersRef = useRef(null);
  const servisesRef = useRef(null);
  const documentsRef = useRef(null);
  const questionsRef = useRef(null);
  const expertsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Head>
        <title>پوپک سپهر | خدمات مشاوره تخصصی و ارزیابی ارزش</title>
        <meta
          name="description"
          content="پوپک سپهر ارائه‌دهنده خدمات مشاوره تخصصی، ارزیابی ارزش و پاسخگویی به سوالات متداول شما به زبان فارسی."
        />
        <meta
          name="keywords"
          content="مشاوره, خدمات مشاوره, ارزیابی ارزش, کارشناسان, سوالات متداول, تماس با ما"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://poupaksepehr.com/fa" />
        <link
          rel="alternate"
          hreflang="fa"
          href="https://poupaksepehr.com/fa"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://poupaksepehr.com/en"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://poupaksepehr.com/ar"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "پوپک سپهر",
            url: "https://poupaksepehr.com/fa",
            logo: "https://poupaksepehr.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+989389059097",
              contactType: "Customer Service",
              areaServed: "IR",
              availableLanguage: ["Persian"],
            },
            sameAs: [
              "https://www.instagram.com/poupaksepehr/profilecard/?igsh=YXB3amFqNml4OWxo",
              "https://t.me/poupaksepehr",
            ],
          })}
        </script>
      </Head>

      <div className="w-full h-full max-w-screen-xl gap-2">
        <Headers
          refs={{
            headersRef,
            servisesRef,
            documentsRef,
            questionsRef,
            expertsRef,
            footerRef,
          }}
        />
 <MobileSidebar  refs={{
            headersRef,
            servisesRef,
            documentsRef,
            questionsRef,
            expertsRef,
            footerRef,
          }} />
        <Banner />

        <section ref={servisesRef} aria-labelledby="services-section">
          <h2
            id="services-section"
            className="text-2xl font-bold text-center mt-8"
          ></h2>

          <Servises />
        </section>

        <section ref={documentsRef} aria-labelledby="documents-section">
          <h2
            id="documents-section"
            className="text-2xl font-bold text-center mt-8"
          ></h2>
          <Documents />
        </section>

        <section ref={expertsRef} aria-labelledby="experts-section">
          <h2
            id="experts-section"
            className="text-2xl font-bold text-center mt-8"
          ></h2>
          <Experts />
        </section>

        <section ref={questionsRef} aria-labelledby="faq-section">
          <h2
            id="faq-section"
            className="text-2xl font-bold text-center mt-8"
          ></h2>
          <Questions />
        </section>

        <footer ref={footerRef}>
          <Footer
            refs={{
              headersRef,
              servisesRef,
              documentsRef,
              questionsRef,
              expertsRef,
              footerRef,
            }}
          />
        </footer>
      </div>
    </>
  );
}
