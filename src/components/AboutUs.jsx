import React from 'react'

import { useContent } from "../contex/ContentContext";
function AboutUs() {
  const { intro } = useContent();
  return (
    <div className='md:w-2/3 p-2 bg-opacity-75  flex items-center  font-bold text-slate-600 rounded-lg m-1  flex-col gap-2'>

        <p> {intro.description} </p>
    </div>
  )
}

export default AboutUs