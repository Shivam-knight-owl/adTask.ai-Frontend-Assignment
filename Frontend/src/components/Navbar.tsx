import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-7.5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] lg:w-[70%] z-50 rounded-2xl transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <nav className="px-6 md:px-8 py-2 flex items-center justify-between bg-[#141415] 
      rounded-2xl shadow-[0px_5px_20px_rgba(255,255,255,0.05)] border border-[#2f2f30]">
        
        {/* Logo */}
        <div className="text-xl text-white whitespace-nowrap mr-36">
          ad<b className="font-extrabold">Task.</b>ai
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 xl:space-x-10">
          <div className="flex items-center space-x-4 lg:space-x-7">
            <div className="flex items-center space-x-1">
              <button className="hover:text-gray-300 text-white text-sm whitespace-nowrap">Products</button>
              <ChevronDown size={16} className="text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <button className="hover:text-gray-300 text-white text-sm whitespace-nowrap">Tools</button>
              <ChevronDown size={16} className="text-white" />
            </div>
            <button className="hover:text-gray-300 text-white text-sm whitespace-nowrap">Contact Us</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <button className="glow-btn px-6.5 py-2 rounded-full border border-[#A1A8D0] text-white text-sm bg-[#0e0f0f] transition-all">
            Log in
          </button>

          <button className="glow-btn px-6.5 py-2 rounded-full border border-[#A1A8D0] text-white text-sm bg-[#2b313d] transition-all">
            Schedule a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#141415] shadow-md rounded-b-2xl md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <button className="hover:text-gray-300 text-white text-sm">Products</button>
            <button className="hover:text-gray-300 text-white text-sm">Tools</button>
            <button className="hover:text-gray-300 text-white text-sm">Contact Us</button>

            <button className="glow-btn w-3/6 py-2 rounded-full border border-[#A1A8D0] text-white text-sm bg-[#0e0f0f] transition-all">
              Log in
            </button>

            <button className="glow-btn w-3/6 py-2 rounded-full border border-[#A1A8D0] text-white text-sm bg-[#2b313d] transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
