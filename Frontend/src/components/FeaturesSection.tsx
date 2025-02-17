import { LightningFeatureCard } from './LightningFeatureCard';
import { MarketingEasier } from './Marketing Easier';
import { ReachTarget } from './ReachTarget';
import { SmartMarketFeature } from './SmartMarketFeature';

export const FeaturesSection = () => {
  return (
    <div className="relative w-full bg-[#050506] min-h-screen py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-20 h-10 sm:w-30 sm:h-20 bg-white rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-24 px-4">
          
          <div className="inline-block px-4 py-1.5  bg-gradient-to-r from-[#242424] to-[#141415]  rounded-full text-white text-sm mb-4 border-glow-move">
            FEATURES
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Feature packed to make
          </h2>
          
          {/* Lines on both sides */}
          <div className="w-[80%] flex items-center justify-between mt-2">
            <div className="w-28 sm:w-40 h-0.5 bg-gradient-to-l from-[#7189ff] to-[#141a35] rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
            <div className="w-28 sm:w-40 h-0.5 bg-gradient-to-r from-[#7189ff] to-[#141a35] rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
          </div>
        

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#585f88] via-[#7189ff] to-[rgb(253,254,255)] bg-clip-text leading-tight">
            Digital marketing easier and affordable.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
            Experience intelligent Features to optimize your marketing efforts.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <ReachTarget />

          {/* Center Column - Two Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Card */}
            <MarketingEasier />
            
            {/* Bottom Card */}
            <SmartMarketFeature />
          </div>

          {/* Feature 3 */}
          <LightningFeatureCard />
        </div>
      </div>
    </div>
  );
};
