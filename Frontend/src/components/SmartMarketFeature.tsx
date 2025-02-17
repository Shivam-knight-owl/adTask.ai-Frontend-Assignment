import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import chart from "../assets/chart-pie-solid.svg";

export const SmartMarketFeature = () => {
  const [barHeights, setBarHeights] = useState([40, 60, 50, 30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights((prev) =>
        prev.map((height) => Math.min(60, Math.max(30, height + (Math.random() * 10 - 5))))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[345px] h-[250px] bg-[#0f111a] backdrop-blur-md rounded-2xl  border border-t-[#6981b1] border-r-[#6981b1] border-r-3 border-b-2 border-b-[#6981b1] border-l-[#6981b1] shadow-[0px_0px_30px_rgba(61,82,124,0.2)]  flex flex-col justify-between p-6 overflow-hidden">
      {/* Outer Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-40"></div>
        {/* Background Glows */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-40 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-40 h-12 bg-white rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-left">
        {/* Icons */}
        <div className="flex items-center justify-around">
            <div className="w-[100px] h-[100px] bg-[#242932] rounded-xl flex items-center justify-center border border-t-[#6981b1] border-r-[#6981b1] border-r-3 border-b-2 border-b-[#6981b1] border-l-[#6981b1] mb-6 relative">

                {/* Bar Graph */}
                <div className="w-15 h-12 flex items-end gap-3 overflow-hidden">
                {barHeights.map((height, index) => (
                    <motion.div
                    key={index}
                    className="w-2 bg-[#c6c9cd] rounded"
                    animate={{ height: height }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ maxHeight: "60px" }}
                    />
                ))}
                </div>
            </div>
            
            <div className="w-[105px] h-[105px] bg-transparent">
                <img src={chart} alt="Gear Icon" className="w-32 h-20 opacity-80" />
            </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-sm font-semibold text-white mb-1">
          Smart Marketing Insights
        </h3>
        <p className="text-slate-200 text-sm leading-relaxed">
          Unlock actionable data to guide every decision. Stay ahead of trends,
          refine your strategies, and make confident moves with powerful
          analytics.
        </p>
      </div>
    </div>
  );
};