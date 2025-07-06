import React from "react";
import { motion } from "framer-motion";

function AnimatedCategoryText({ categories, delay }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, delay * 1000);
    return () => clearInterval(interval);
  }, [categories.length, delay]);

  return (
    <motion.span
      key={categories[index]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-md"
    >
      {categories[index]}
    </motion.span>
  );
}

function Skill() {
  // Animated text labels for categories
  const categories = [
    "Programming Languages",
    "Frameworks",
    "Databases",
    "Tools",
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20">
      <h1 className="text-5xl text-center font-semibold text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        Skills
      </h1>
    {/* skill container */}
      <motion.div
        className="flex justify-center mb-8 "
        initial={false}
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 2,
              delayChildren: 0,
            },
          },
        }}
      >
        <motion.div
          key="category-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedCategoryText categories={categories} delay={2} />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-8 p-10 border-2 border-white/30 shadow-xl rounded-3xl backdrop-blur-md"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {[
          "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
        ].map((src, i) => (
          <motion.div
            key={i}
            className="relative transition-transform duration-300 hover:scale-110 hover:shadow-2xl border-2 border-white/60 rounded-2xl p-4 flex items-center justify-center group"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.07 }}
            whileHover={{
              rotate: [0, 2, -2, 2, 0],
              transition: { duration: 0.5, repeat: 0 },
            }}
          >
            {/* Glow effect */}
            <span
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(236,72,153,0.15) 70%, transparent 100%)",
                filter: "blur(12px)",
              }}
            />
            <motion.img
              className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain z-10"
              src={src}
              alt="Skill icon"
              loading="lazy"
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Increase text size and use a single color (no gradient)
export default Skill;