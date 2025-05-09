"use client";
import { useEffect } from "react";
import ExpertCard from "./ExpertCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContent } from "../contex/ContentContext";

function Experts() {
  const { experts, general } = useContent();

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return (
    <section 
      className="flex flex-col items-center justify-center gap-6 py-8 px-4 bg-slate-50" 
      aria-labelledby="experts-section"
    >
      <h1 
        id="experts-section" 
        className="font-bold text-3xl text-teal-900 text-center"
      >
        {general.experts}
      </h1>

      {/* نمایش کارشناسان */}
      <div className="w-full rounded bg-slate-50 md:flex  items-start justify-center gap-1">
    {experts.map((expert, index) => (
           <ExpertCard key={index} name={expert.name} role={expert.role} photo={expert.photo} description={expert.description} />
          ))}
        
       
       
      
      
       
    </div>
    </section>
  );
}

export default Experts;