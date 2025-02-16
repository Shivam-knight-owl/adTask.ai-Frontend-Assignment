import { LightningFeatureCard } from './LightningFeatureCard';
import { ReachTarget } from './ReachTarget';

export const FeaturesSection = () => {
  return (
    <div className="relative w-full bg-black min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/3 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-2/3 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] -translate-y-1/2"></div>
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-block px-4.5 py-1.5 bg-gray-800/80 rounded-full text-white text-sm mb-4">
            FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold  text-white leading-tight">
            Feature packed to make
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#585f88] via-[#7189ff] to-[rgb(253,254,255)] bg-clip-text leading-tight">
            Digital marketing easier and affordable.
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl">
            Experience intelligent Features to optimize your marketing efforts.
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <ReachTarget />
          
          {/* Center Column - Two Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Card */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl overflow-hidden relative p-8">
              <div className="absolute -right-24 -top-24 w-56 h-56 rounded-full bg-blue-900/20 blur-[50px]"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-5">
                  <div className="w-24 h-24 bg-gray-800/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-700/30"></div>
                    <img src="/api/placeholder/80/80" alt="Gear icon" className="w-16 h-16 relative z-10" />
                  </div>
                  <span className="text-xs text-blue-400 font-medium bg-transparent py-1">GEN AI Powered</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">Marketing made Easier</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity.
                </p>
              </div>
            </div>
            
            {/* Bottom Card */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl overflow-hidden relative p-8">
              <div className="absolute -left-24 -bottom-24 w-56 h-56 rounded-full bg-blue-900/20 blur-[50px]"></div>
              
              <div className="relative z-10">
                <div className="flex mb-5">
                  <div className="w-24 h-24 bg-gray-800/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-700/30"></div>
                    <img src="/api/placeholder/80/80" alt="Charts icon" className="w-16 h-16 relative z-10" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">Smart Marketing Insights</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics.
                </p>
              </div>
            </div>
          </div>
          
          {/* Feature 3 */}
            <LightningFeatureCard />
        </div>
      </div>
    </div>
  );
};

