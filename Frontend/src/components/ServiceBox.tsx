import { FC } from "react";

interface ServiceBoxProps {
  icon?: FC<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

export const ServiceBox: FC<ServiceBoxProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative w-full aspect-[1.2/1] bg-[#0B0F17] p-8 overflow-hidden border border-[#1A1F2E] flex flex-col items-center justify-center">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10131b] to-[#06080f] opacity-90"></div>

      {/* Border Glow (brighter at center, dim at corners) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7994cf] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7994cf] to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#7994cf] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#7994cf] to-transparent" />

      {/* Top Border White Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[4px] bg-white" />

      {/* Content Wrapper (Centered) */}
      <div className="relative flex flex-col items-center text-center space-y-5">

        {/* bg blur effect */}
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-xl"></div>
        
        <div className="absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 w-30 h-8 bg-white rounded-full blur-3xl"></div>
        
        {/* Icon with Glow (Now Properly Centered) */}
        {Icon && (
          <div className="relative flex items-center justify-center w-30 h-30">
            <Icon className="w-16 h-16 text-white/80" strokeWidth={1.5} />
          </div>
        )}

        {/* Title and Description */}
        <h3 className="text-white text-xl font-semibold tracking-wider">{title}</h3>
        <p className="text-slate-100 leading-relaxed max-w-[90%]">{description}</p>
      </div>
    </div>
  );
};
