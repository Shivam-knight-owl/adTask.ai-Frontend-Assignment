import { Mail, MapPin, Phone } from "lucide-react";

export const ContactUsCompo = () => {
  return (
    <div className="relative w-full bg-[#050506] py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 px-4">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#242424] to-[#141415] rounded-full text-white text-sm border-glow-move">
            CONTACT US
          </div>
        </div>

        {/* Grid Container */}
        <div className="relative w-full px-6 md:px-12 lg:px-20 flex items-center">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
            {/* Left Side - Contact Info */}
            <div className="space-y-8 relative">
              {/* Background Effects (Fixed for small screens) */}
              <div className="absolute left-[5%] top-[28%] transform -translate-y-1/2 w-[120px] h-[120px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-blue-600/30 rounded-full blur-[80px] opacity-50"></div>

              <div className="absolute left-[5%] top-[55%] transform -translate-y-1/2 w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] bg-white rounded-full blur-[100px] opacity-30"></div>

              <h1 className="mt-5 text-3xl sm:text-3xl md:text-4xl font-bold text-white leading-tight relative">
                Ask whatever you have <br />
                <span className="text-transparent bg-gradient-to-r from-[#7e87bb] via-[#788beb] to-[#b3bffe] bg-clip-text">
                  in your mind now
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-md relative">
                Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col space-y-4 text-gray-300 relative">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#788beb]" size={22} />
                  <a href="mailto:contact@adtask.ai" className="hover:text-white transition underline font-semibold">
                    contact@adtask.ai
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#788beb]" size={22} />
                  <span className="font-semibold">(969) 819-8061</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#788beb]" size={22} />
                  <span className="font-semibold">San Francisco Bay Area</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-transparent rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white block text-sm">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-[#354159] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#535976]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white block text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-[#354159] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#535976]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white block text-sm">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border border-[#354159] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#535976]"
                  ></textarea>
                </div>

                <div className="flex justify-center items-center">
                  <button className="glow-btn px-14 py-2 rounded-full border border-[#A1A8D0] text-white text-sm bg-[#2b313d] transition-all">
                    Submit
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
