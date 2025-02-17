import { FileText, Gauge, Globe2, Megaphone, MousePointer, Target } from "lucide-react";
import { ServiceBox } from "./ServiceBox";
import ContactUsBtn from "./ContactUsBtn";

export const ServicesCompo = () => {
  const services = [
    { icon: Target, title: "Smart Ad Targeting", description: "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates." },
    { icon: Gauge, title: "Performance Analytics", description: "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies." },
    { icon: FileText, title: "SEO Automation", description: "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort." },
    { icon: Globe2, title: "Social Media Marketing", description: "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms." },
    { icon: MousePointer, title: "Conversion Optimization", description: "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates." },
    { icon: Megaphone, title: "Campaign Automation", description: "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results." }
  ];

  return (
    <div className="relative w-full bg-black min-h-screen py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-24 px-4">
          <div className="inline-block px-4 py-1.5  bg-gradient-to-r from-[#242424] to-[#141415]  rounded-full text-white text-sm mb-4 border-glow-move">
            SERVICES
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Innovative Services
          </h2>
          
          {/* Lines on both sides */}
          <div className="w-[80%] flex items-center justify-between mt-2">
            <div className="w-28 sm:w-40 h-0.5 bg-gradient-to-l from-[#7189ff] to-[#141a35] rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
            <div className="w-28 sm:w-40 h-0.5 bg-gradient-to-r from-[#7189ff] to-[#141a35] rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
          </div>
        
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#acb9fe] via-[#96a7f7]  to-[rgb(253,254,255)] bg-clip-text leading-tight">
            for Growth.
          </h2>
        </div>

        {/* Grid Container - No Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1A1F2E] mb-18">
          {services.map((service, index) => (
            <div key={index} className="border border-[#1A1F2E]">
              <ServiceBox icon={service.icon} title={service.title} description={service.description} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <ContactUsBtn />
        </div>

      </div>
    </div>
  );
};
