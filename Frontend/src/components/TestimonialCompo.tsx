import { TestimonialBox } from "./TestimonialBox";

export const TestimonialsCompo=()=>{
    const testimonials = [
        {
          description:
            "We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.",
          title: "Brand Director at a Tech Startup",
        },
        {
          description:
            "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
          title: "Head of Growth at Tech Startup",
        },
        {
          description:
            "We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
          title: "Ecommerce Manager at Home Décor Brand",
        },
        {
          description:
            "What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
          title: "Digital Strategist at SaaS Company",
        },
        {
          description:
            "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
          title: "Social Media Lead at Non-Profit Organization",
        },
        {
          description:
            "We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
          title: "Social Media Manager at a Fitness Brand",
        },
    ];

    return(
        <div className="relative w-full bg-[#050506] min-h-screen py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
              {/* Background Effects */}
                <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[300px] bg-blue-600/30 rounded-full blur-[80px] opacity-50"></div>

                <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[400px] sm:h-[400px] bg-white rounded-full blur-[100px] opacity-30"></div>

              {/* Content Container */}
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-24 px-4">
                  <div className="inline-block px-4 py-1.5  bg-gradient-to-r from-[#242424] to-[#141415]  rounded-full text-white text-sm mb-4">
                    TESTIMONIALS
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Trusted by
                  </h2>
                  
                  {/* Lines on both sides */}
                  <div className="w-[80%] flex items-center justify-between mt-2">
                    <div className="w-28 sm:w-40 h-0.5 bg-gradient-to-l from-[#7189ff] to-[#141a35] rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
                    <div className="w-28 sm:w-40 h-0.5 bg-gradient-to-r from-[#7189ff] to-[#141a35] rounded-full shadow-[0_0_20px_rgba(59,170,246,0.9)]"></div>
                  </div>
                
        
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#7e87bb] via-[#7189ff] to-[rgb(253,254,255)] bg-clip-text leading-tight">
                     satisfied clients
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
                    Discover how we've driven growth and innovation.
                  </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialBox
                    key={index}
                    description={testimonial.description}
                    title={testimonial.title}
                    />
                ))}
                </div>
        
              </div>
            </div>
    )
}