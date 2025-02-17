import { motion } from "framer-motion";
import gear from "../assets/gear-solid.svg";

export const MarketingEasier = () => {
  return (
    <div className="relative w-[345px] h-[250px] bg-[#0f111a] backdrop-blur-md rounded-2xl 
                   border border-t-[#6981b1] border-r-[#6981b1] border-r-3 border-b-2 border-b-[#6981b1] border-l-[#6981b1] shadow-[0px_0px_30px_rgba(61,82,124,0.2)] 
                    flex flex-col justify-between items-center p-6 overflow-hidden">
      
      {/* Outer Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-40"></div>

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-blue-900/20 blur-[70px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full">
        {/* Icon + AI Tag */}
        <div className="flex items-center mb-1">
          <div className="mr-20"></div>

          {/* Icon Box - Centering Fix */}
          <div className="flex items-center justify-center border border-t-[#6981b1] border-r-[#6981b1] border-r-2 border-b-2 border-b-[#6981b1] border-l-[#6981b1] p-2 rounded-xl">
            <div className="w-[85px] h-[85px] bg-[#242932] rounded-xl flex items-center justify-center border border-t-[#6981b1] border-r-[#6981b1] border-r-3 border-b-2 border-b-[#6981b1] border-l-[#6981b1]">
              
              {/* Glow Effects */}
              <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-50 h-60 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-30 h-20 bg-white rounded-full blur-3xl"></div>

              {/* Rotating Gear Icon */}
              <motion.img 
                src={gear} 
                alt="Gear Icon" 
                className="w-16 h-16 opacity-80"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              />
            </div>
          </div>

          {/* AI Tag */}
          <div className="flex flex-col items-center">
            <div className="text-xs text-transparent bg-gradient-to-r from-[#f2f3f5] via-[#c2cbff] to-[#7b8fff] bg-clip-text font-medium bg-transparent tracking-wide mb-1">
              GEN AI Powered
            </div>
            <div className="w-40 h-0.5 bg-white rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
          </div>
        </div>

        {/* Title & Description - Left Aligned */}
        <div className="mt-3 text-left">
          <h3 className="text-sm font-semibold text-white mb-1">Marketing made Easier</h3>
          <p className="text-slate-200 text-sm leading-relaxed">
            Save time and simplify campaign management. Let automated workflows handle the heavy lifting, 
            so you can focus on creativity.
          </p>
        </div>
      </div>
    </div>
  );
};
