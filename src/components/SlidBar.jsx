"use client"

import { useState } from 'react';
import { X, Menu } from 'lucide-react'; // آیکن‌ها (میتونی از heroicons هم استفاده کنی)

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden"> {/* فقط تو موبایل نمایش داده بشه */}
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Menu className="w-6 h-6" />
      </button>

      {/* بک‌دراپ */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setIsOpen(false)} />
      )}

      {/* سایدبار */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 p-5 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">منو</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-gray-800">
          <a href="#">خانه</a>
          <a href="#">درباره ما</a>
          <a href="#">خدمات</a>
          <a href="#">ارتباط با ما</a>
        </nav>
      </div>
    </div>
  );
}
