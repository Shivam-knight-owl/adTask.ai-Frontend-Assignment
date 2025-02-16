"use client";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function SparklesBadge() {
  return (
    <div className="relative inline-flex items-center bg-transparent border border-[#2f2f30] 
                   rounded-2xl px-4 py-2 space-x-2 mt-22 mb-60 overflow-hidden ">
      
      {/* Thinner, continuous blade effect */}
      <motion.div
        className="absolute top-0 left-[-20%] w-[10%] h-full blade-effect"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity, // Loops indefinitely
          repeatDelay: 1, // Restarts every 3 seconds
        }}
      />

      {/* Icon */}
      <Sparkles size={20} className="text-white z-10" />
      
      {/* Text */}
      <span className="text-sm text-white p-1.5 z-10 font-semibold">
        TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS
      </span>
    </div>
  );
}
