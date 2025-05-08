import Image from "next/image";
import React from "react";

function ExpertCard({name,role,photo,description}) {
  
  return (
   
     
        <div
      
          data-aos="fade-left"
          className="md:w-1/3 aspect-[6/6] bg-slate-200 flex flex-col justify-center rounded-lg p-2 m-1 gap-4 cursor-pointer transition-transform duration-300 hover:scale-105 "
        >
          <div className="flex  relative w-full h-full items-center justify-center">
            <Image
              src={photo}
              fill
              className="object-cover "
              alt="Picture of the author"
              priority
            />
          </div>
          <h1 className="font-bold" >{name}</h1>
          <p className="font-medium " >{role}</p>
          <div className="px-1 py-2 text-sm text-gray-700 bg-slate-50 rounded-lg">
            {description}
          </div>
        </div>
   
   
  );
}

export default ExpertCard;
