"use client";

import Banner from "@/components/Banner";
import Documents from "@/components/Documents";
import Experts from "@/components/Experts";
import Footer from "@/components/Footer";

import Questions from "@/components/Questions";
import Servises from "@/components/Servises";
import React, { useRef } from "react";
import Headers from "sections/Headers";

function LandingPage() {
  
  const headersRef = useRef(null);
  const servisesRef = useRef(null);
  const documentsRef = useRef(null);
  const questionsRef = useRef(null);
  const expertsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="w-full h-full gap-2">
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
    
      <Banner/>
    <div ref={servisesRef}>
      <Servises />
    </div>
    <div ref={documentsRef}>
      <Documents />
    </div>
    <div ref={questionsRef}>
      <Questions />
    </div>
    <div ref={expertsRef}>
      <Experts />
    </div>
    <div ref={footerRef}>
      <Footer />
    </div>
  </div>
  );
}

export default LandingPage;
