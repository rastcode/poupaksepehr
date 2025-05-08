"use client"
import React from "react";

import { useContent } from "../contex/ContentContext";
function Intro() {
  const { intro } = useContent();
  return (
    <div className="p-2 bg-opacity-75 mt-16  text-center text-2xl flex  justify-center font-bold text-slate-900 rounded-lg m-1">
      <h1 className="text-2xl text-teal-900">{intro.title}</h1>
    </div>
  );
}

export default Intro;
