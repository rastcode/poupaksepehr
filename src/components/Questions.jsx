"use client"

import { useContent } from "../contex/ContentContext";
import  { useEffect, useState } from "react";
import Accordion from "./Accordion";
import Aos from "aos";
import "aos/dist/aos.css";
function Questions() {
  const [open, setOpen] = useState(false);
  const { faq } = useContent();
  const { general } = useContent();
    useEffect(() => {
      Aos.init({ duration: 400 });
    }, []);
  return (
    <div className="mt-5 flex flex-col bg-slate-50 gap-2 items-center justify-center">
      <h1 className='font-bold'> {general.faq}</h1>
     
      {faq.map((item, index) => (
        <div key={index} data-aos="fade-up" className="mt-2 w-full flex flex-col bg-slate-50 gap-2 items-center justify-center">
          <Accordion title={item.question} description={item.answer} />
        </div>
      ))}
    
   
     
     
    </div>
  );
}

export default Questions;
