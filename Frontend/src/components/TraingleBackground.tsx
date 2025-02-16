"use client";
import { motion } from "framer-motion";

export function TriangleBackground() {
  return (
    <div className="absolute inset-0 flex justify-center items-start overflow-hidden pointer-events-none">
      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Glowing Triangles */}
      <div className="glowing-triangle"></div>
      <div className="glowing-triangle2"></div>

      {/* Glowing adTask.ai with a border-like effect */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-[6.5rem] font-bold text-white z-10 pointer-events-auto 
            transition-all duration-300 hover:text-glow"
            >
            adTask.ai
        </motion.div>

    </div>
  );
}
