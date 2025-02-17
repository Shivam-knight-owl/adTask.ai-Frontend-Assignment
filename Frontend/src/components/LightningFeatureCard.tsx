import { motion } from "framer-motion";
import { User } from "lucide-react";

export const LightningFeatureCard = () => {
  const userPositions = [
    { x: -100, y: -100, delay: 0 },
    { x: 110, y: -90, delay: 0.5 },
    { x: -10, y: 180, delay: 1 },
    { x: -10, y: -110, delay: 0 },
    { x: 80, y: 170, delay: 1.5 },
    { x: -100, y: 170, delay: 1 },
  ];

  return (
    <div className="relative w-[335px] h-[534px] bg-gradient-to-b from-gray-800/80 to-gray-900/90 rounded-xl overflow-hidden">
      <div className="absolute -left-32 -top-32 w-50 h-50 rounded-full bg-white blur-[110px]"></div>
      <div className="absolute -right-12 -top-24 w-50 h-50 rounded-full bg-[#12151b] blur-[40px]"></div>
      <div className="absolute -left-26 -top-20 w-50 h-50 rounded-full bg-[#12151b] blur-[80px]"></div>
      
      {/* Card Border Glow */}
      <div className="absolute inset-0 rounded-xl border border-t-[#6981b1] border-r-[#6981b1] border-r-3 border-b-2 border-b-[#6981b1] border-l-[#6981b1]"></div>
      
      {/* Background Circular Effects */}
      <div className="absolute left-1/2 top-1/10 -translate-x-1/2 w-96 h-96 rounded-full border border-[#313d55]"></div>
      <div className="absolute left-1/2 top-1/5 -translate-x-1/2 w-60 h-60 rounded-full border border-[#313d55]"></div>
      
      {/* Central Glow */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-60 h-90 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-30 h-20 bg-white rounded-full blur-3xl"></div>
      
      {/* Lightning Icon */}
      <motion.div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.085, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="absolute -inset-8 bg-blue-400/5 rounded-full blur-xl"></div>
          <svg
            className="w-60 h-auto text-blue-100/90 relative z-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 3V10H20L11 21V14H4L13 3Z" fill="currentColor" className="fill-current" />
          </svg>
        </div>
      </motion.div>

      {/* User Icons */}
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
      
      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-sm font-semibold mb-2 text-transparent bg-gradient-to-r from-[#f2f3f5] via-[#c2cbff] to-[#7b8fff] bg-clip-text">
          Intelligent Agents to Optimize your Reach
        </h3>
        <p className="text-slate-200 text-sm">
          Scale and refine your marketing with AI-powered agents. They track performance in real-time to help you reach more customers efficiently.
        </p>
      </div>
    </div>
  );
};
