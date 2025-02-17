import { FC } from "react";

interface TestimonialBoxProps {
  description: string;
  title: string;
}

export const TestimonialBox: FC<TestimonialBoxProps> = ({ description, title }) => {
  return (
    <div className="relative w-full min-h-[220px] bg-[#0B0F17] p-6 rounded-2xl overflow-hidden border border-t-[#404c64] border-r-[#6981b1] border-r-3 border-b-2 border-b-[#6981b1] border-l-[#3b465c] text-white shadow-lg flex flex-col justify-between">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10131b] to-[#06080f] opacity-90"></div>

      {/* Content */}
      <div className="relative flex flex-col space-y-4 flex-grow">
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed flex-grow">“{description}”</p>
        <p className="text-white font-medium tracking-wide before:content-['—'] before:mr-1">{title}</p>
      </div>
    </div>
  );
};
