import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTABtn from './CTABtn';

export const BelowContactUsCompo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const logoVariants = {
    hidden: { 
      opacity: 0.3,
      scale: 0.95,
      y: 20,
      filter: 'brightness(0.8)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'brightness(1.2)',
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.08, // Slightly larger for emphasis
      filter: 'brightness(1.8) drop-shadow(0 0 35px rgba(173, 216, 255, 0.8)) drop-shadow(0 0 60px rgba(120, 192, 255, 0.5))', 
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  

  return (
    <div ref={ref} className="relative bg-[#050506] overflow-hidden">

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 py-20 text-center">

        {/* adTask.ai Logo (Animated) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={logoVariants}
          whileHover="hover"
          className="mb-26 relative"
        >
          <h1 className="text-8xl md:text-8xl font-bold text-white mb-4 relative">
            <span className="relative inline-block">
              adTask.ai
              {/* Glow effect overlay on logo */} 
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ filter: 'blur(15px)', zIndex: -1 }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Static Main Headline (No Animation) */}
        <div className="max-w-3xl mx-auto mb-12">
            {/* Triangular Flashlight Effect with Grid Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-100">
                <div className="triangular-flashlight"></div>

                <div className="triangular-flashlight2"></div>
            </div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
            Are you ready to boost <br />
            <span className=" text-transparent bg-gradient-to-r from-[#8cadfa] via-[#c1d2f2] to-[#cfd5fb] bg-clip-text">your Digital Presence?</span>
          </h2>
        </div>

        {/* Buttons (Static) */}
        <div className='flex flex-col items-center space-y-6'>
          {/*start free trial btn  */}
          <CTABtn />

            <button className=" px-8 py-3 text-lg shadow-lg rounded-full border-2 border-[#7795d2] text-white font-medium bg-gradient-to-b from-gray-700 to-gray-800 transition-all">
            Schedule a Call
            </button>
        </div>
      </div>
    </div>
  );
};
