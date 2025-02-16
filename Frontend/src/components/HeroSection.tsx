
import CTABtn from "./CTABtn";
import { SparklesBadge } from "./SparklesBadge";
import { TriangleBackground } from "./TraingleBackground";

export function HeroContent() {
  return (
    <main className="relative max-w-4xl mx-auto text-center mt-20 px-4 pb-20">
      {/* Triangle Background */}
      <TriangleBackground />

      <SparklesBadge />
      
      <div className="relative z-10">
        <p className="text-md text-gray-300 mb-8 max-w-2xl mx-auto">
          Stop struggling with marketing decisions. Our AI assistant analyzes your business, 
          creates personalized strategies, and helps you execute them - all in real-time.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <CTABtn/>
          <span className="text-sm text-slate-200">
            Try AdTask AI free for 30 days
          </span>
        </div>
      </div>
    </main>
  );
}
