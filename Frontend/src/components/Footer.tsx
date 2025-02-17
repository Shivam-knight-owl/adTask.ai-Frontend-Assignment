import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050506] text-gray-300 py-12 px-6 md:px-12 border-t-2 border-[#354159]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Logo & Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-[#d6d8f2]">
            ad<span className="text-[#e7e9f7]">Task</span><span className="text-[#d6d8f2]">.ai</span>
          </h1>
          <div className="mt-4 flex items-center space-x-3">
            <Mail className="w-5 h-5 text-[#8cadfa]" />
            <a href="mailto:contact@adtask.ai" className="text-gray-400 hover:text-[#8cadfa] transition underline">
              contact@adtask.ai
            </a>
          </div>
          <div className="mt-2 flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-[#8cadfa]" />
            <span className="text-gray-400">San Francisco Bay Area</span>
          </div>
        </div>

        {/* Right Section - Utilities & Socials */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-8 md:space-y-0 md:space-x-16 text-center md:text-left">
          {/* Utilities */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-white font-semibold text-xl tracking-wide">Utilities</h2>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">Products</a>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">Tools</a>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">Contact Us</a>
          </div>
          
          {/* Socials */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-white font-semibold text-xl tracking-wide">Socials</h2>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">X</a>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-[#8cadfa] transition">Facebook</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Text */}
      <div className="text-center text-slate-400 text-sm mt-8">
        All rights reserved © 2025 adTask
      </div>
    </footer>
  );
};
