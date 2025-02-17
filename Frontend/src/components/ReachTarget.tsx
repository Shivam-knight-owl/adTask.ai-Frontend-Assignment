import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export const ReachTarget = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 3) % 360);
        }, 40);
        return () => clearInterval(interval);
    }, []);

    const userPositions = [
        { x: -100, y: -30, delay: 0 },
        { x: 110, y: -20, delay: 0.5 },
        { x: -10, y: 160, delay: 1 },
        { x: 0, y: -110, delay: 0 },
        { x: 80, y: 140, delay: 1.5 },
        { x: -100, y: 140, delay: 1 },
      ];
    
    return (
        <div className="relative w-[335px] h-[534px] bg-gradient-to-b from-gray-800/80 to-gray-900/90 rounded-xl overflow-hidden flex flex-col items-center justify-center">
            {/* Background Light Effects */}
            <div className="absolute -left-32 -top-32 w-50 h-50 rounded-full bg-white blur-[110px]"></div>
            <div className="absolute -right-12 -top-24 w-50 h-50 rounded-full bg-[#12151b] blur-[40px]"></div>
            <div className="absolute -left-26 -top-20 w-50 h-50 rounded-full bg-[#12151b] blur-[80px]"></div>
            {/* Card Border Glow */}
            <div className="absolute inset-0 rounded-xl border border-t-[#6981b1] border-r-[#6981b1] border-r-3 border-b-1 border-b-[#6981b1] border-l-[#6981b1]"></div>
            
            {/* Radar Scanner */}
            <div className="relative w-90 h-90 flex items-center justify-center">
                {/* Outer Circle */}
                <div className="absolute w-full h-full rounded-full border border-[#313d55]"></div>
                {/* Inner Circle */}
                <div className="absolute w-60 h-60 rounded-full border border-[#313d55]"></div>
                
                {/* Center Dot */}
                <div className="absolute w-2 h-2 bg-white rounded-full"></div>

                {/* Central Glow */}
                <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-60 h-90 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-30 h-20 bg-white rounded-full blur-3xl"></div>
                
                {/* Rotating Scanner Beam */}
                <div 
                    className="absolute left-1/2 top-1/2 w-60 h-60"
                    style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
                >
                    <svg width="100%" height="100%" viewBox="0 0 160 160">
                        <defs>
                            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.3 }} />
                                <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0 }} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M80,80 L80,0 A80,80 0 0,1 160,80 Z"
                            fill="url(#scanGradient)"
                        />
                    </svg>
                </div>

                {/* Floating User Icons */}
                {userPositions.map((pos, index) => (
                    <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
                    initial={{ x: pos.x, y: pos.y, opacity: 0.3 }}
                    animate={{ y: [pos.y, pos.y + 10, pos.y], opacity: [0.3, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: pos.delay }}
                    >
                    <User className="w-10 h-10 text-blue-400" />
                    </motion.div>
                ))}
            </div>
            
                 {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-sm font-semibold  mb-2 text-transparent bg-gradient-to-r from-[#f2f3f5] via-[#c2cbff] to-[#7b8fff] bg-clip-text">
                    Reach Target Audience
                    </h3>
                    <p className="text-slate-200 text-sm ">
                    Pinpoint the perfect audience with precision. Our AI-driven targeting ensures every message resonates where it matters most.
                    </p>
                </div>
        </div>
    );
};