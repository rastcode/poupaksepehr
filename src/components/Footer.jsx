"use client"
import { useContent } from "../contex/ContentContext";
const Footer = () => {
  const { general } = useContent();
    return (
      <footer className="flex flex-col space-y-10 justify-center items-center m-10">
        <h1 className="font-bold">{general.contactUs}</h1>
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <a className="hover:text-gray-900" href="#">Home</a>
          <a className="hover:text-gray-900" href="#">About</a>
          <a className="hover:text-gray-900" href="#">Services</a>
          <a className="hover:text-gray-900" href="#">Media</a>
          <a className="hover:text-gray-900" href="#">Gallery</a>
          <a className="hover:text-gray-900" href="#">Contact</a>
        </nav>
  
        <div className="flex justify-center gap-4 text-gray-600">
         
  
          {/* Telegram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-sky-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
  <path d="M9.967 14.76l-.39 5.47c.558 0 .799-.238 1.09-.523l2.61-2.496 5.41 3.95c.992.547 1.703.26 1.958-.917L23.9 4.86c.31-1.437-.52-2.002-1.48-1.66L2.6 9.57c-1.44.558-1.423 1.35-.248 1.708l5.93 1.846 13.72-8.627L9.967 14.76z" />
</svg>
          </a>
          {/* WhatsUp */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-green-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 32 32">
  <path d="M16.01 3.2A12.8 12.8 0 003.2 16c0 2.27.59 4.43 1.71 6.37L3 29l6.76-1.75A12.77 12.77 0 0016 28.8 12.8 12.8 0 0016.01 3.2zm0 23.2a10.35 10.35 0 01-5.28-1.43l-.38-.23-4.01 1.04 1.07-3.9-.25-.4a10.33 10.33 0 1119.19-5.96c0 5.7-4.65 10.35-10.34 10.35zm5.77-7.91c-.31-.16-1.83-.91-2.11-1.01-.28-.1-.49-.15-.69.16s-.79 1.01-.97 1.22c-.18.2-.36.23-.67.08-.31-.16-1.32-.48-2.51-1.53-.93-.83-1.56-1.85-1.74-2.17-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.02-.55-.08-.16-.69-1.66-.94-2.28-.24-.58-.48-.5-.69-.51h-.59c-.2 0-.52.07-.79.36s-1.04 1.01-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.1 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.12-.28-.2-.59-.35z" />
</svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-pink-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
</svg>
          </a>
           {/* Facebook */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-blue-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z" />
</svg>
          </a>
  
          {/* Youtube */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-red-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
  <path d="M19.615 3.184C21.307 3.545 22.5 4.794 22.5 6.688v10.624c0 1.894-1.193 3.143-2.885 3.504-3.707.772-11.033.772-14.74 0C2.193 20.455 1 19.206 1 17.312V6.688C1 4.794 2.193 3.545 3.885 3.184 7.592 2.413 14.918 2.413 18.625 3.184zM10 8.5v7l6-3.5-6-3.5z" />
</svg>
          </a>
          {/* Telephone*/}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-green-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12.81.36 1.6.7 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.74-1.74a2 2 0 012.11-.45c.75.34 1.53.58 2.34.7A2 2 0 0122 16.92z" />
</svg>
          </a>
        </div>
  
        <p className="text-center text-gray-700 font-medium">
          &copy; 2022 Company Ltd. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  