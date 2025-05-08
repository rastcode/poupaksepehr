import React from 'react';
import SeoHead from "../components/SeoHead";
import { useContent } from "../contex/ContentContext";

function AboutUs() {
  const { intro } = useContent();
  
  return (
    <>
      <SeoHead 
        // title={intro.title} 
        // description={intro.description} 
        path="/about" // مسیر صفحه
        // اضافه کردن اطلاعات دیگر که می‌تواند برای SEO مفید باشد
        // ogTitle={intro.title} // عنوان برای Open Graph
        // ogDescription={intro.description} // توضیحات برای Open Graph
        ogImage="/path/to/your/image.jpg" // تصویر پیش‌فرض Open Graph
      />
      
      <div className="md:w-2/3 p-2 bg-opacity-75 flex items-center font-bold text-slate-600 rounded-lg m-1 flex-col gap-6">
        
        <p className="text-justify leading-relaxed tracking-normal break-words">{intro.description}</p>
      </div>
    </>
  );
}

export default AboutUs;
