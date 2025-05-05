"use client"
import React from "react";

import { useContent } from "../contex/ContentContext";
function Intro() {
  const { intro } = useContent();
  return (
    <div className="p-2 bg-opacity-75 mt-16  text-center text-2xl flex  justify-center font-bold text-slate-900 rounded-lg m-1">
      {intro.title}
    </div>
  );
}

export default Intro;
