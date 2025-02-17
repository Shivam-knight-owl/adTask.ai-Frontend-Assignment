import { motion } from "framer-motion";

export default function ContactUsBtn() {
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + "%",
    y: Math.random() * 100 + "%",
    delay: Math.random() * 3,
  }));

  return (
    <button className="glow-btn relative mt-6 px-14 py-3 rounded-full bg-gradient-to-b from-[#040d1f] to-[#010307] text-white text-lg  shadow-lg transition overflow-hidden border-2 border-[#566990]">
      {/* Sparkles Effect Inside Button */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: star.delay,
            }}
            className="absolute w-[3px] h-[3px] bg-white rounded-full"
            style={{ top: star.y, left: star.x }}
          />
        ))}
      </div>
        Contact Us
    </button>
  );
}
