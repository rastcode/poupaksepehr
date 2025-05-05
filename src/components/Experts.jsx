"use client";
import { useEffect } from "react";
import ExpertCard from "./ExpertCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContent } from "../contex/ContentContext";

function Experts() {
  const { experts } = useContent();
  const { general } = useContent();
     useEffect(() => {
        Aos.init({ duration: 400 });
      }, []);
    
  return (
    <div className="flex flex-col items-center justify-center gap-2">
    <h1 className="font-bold">{general.experts}</h1>
      <div className="w-full rounded bg-slate-50 md:flex  items-start justify-center gap-1">
    {experts.map((expert, index) => (
           <ExpertCard key={index} name={expert.name} role={expert.role} photo={expert.photo} description={expert.description} />
          ))}
        
       
       
      
      
       
    </div>
    </div>
        
  );
}

export default Experts;
