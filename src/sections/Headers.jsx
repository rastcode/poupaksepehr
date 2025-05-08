import AboutUs from "@/components/AboutUs";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import React from "react";

function Headers({ refs }) {
  return (
    <div className='relative md:border-b-2 md:h-[23rem] md:bg-no-repeat md:bg-center flex flex-col items-center justify-center bg-[url("/amin2.png")] bg-no-repeat bg-center     '>
      <NavBar refs={refs} />
      <Intro />
      <AboutUs />
    </div>
  );
}

export default Headers;
