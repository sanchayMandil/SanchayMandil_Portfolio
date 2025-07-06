import { TypingEffect } from "../animation text/TypingEffect";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["innovative", "beautiful", "scalable"];

function AnimatedWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-[#EBD3F8] font-bold underline underline-offset-4"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}

function Intro() {
  return (
    <section className="py-12 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="text-center md:text-left w-full md:w-3/5 space-y-7">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-3 leading-tight bg-gradient-to-r from-[#EBD3F8] via-white to-[#EBD3F8] bg-clip-text text-transparent drop-shadow-lg">
            Trust me, I am a{" "}
            <span className="text-[#EBD3F8] italic drop-shadow-md">
              <TypingEffect text="software engineer" />
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-8 leading-relaxed text-[#e0e0e0] font-medium drop-shadow">
            I am a software engineer with a passion for building{" "}
            <AnimatedWords /> solutions. My expertise lies in developing{" "}
            <span className="text-[#EBD3F8] font-bold underline underline-offset-4">MERN STACK</span> applications and optimizing performance.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed text-[#cfcfcf]">
            Currently, I am in 2nd year of my Master in Computer Applications (MCA) from{" "}
            <span className="text-[#EBD3F8] font-bold underline underline-offset-4">MITS</span>.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0 max-md:ml-[25vw]">
          <motion.div
            className="relative group"
            style={{ width: "24rem", height: "24rem", maxWidth: "100%", maxHeight: "100%" }}
          >
            {/* Profile Image */}
            <img
              className="relative h-64 sm:h-80 md:h-96 w-64 sm:w-80 md:w-96 object-cover rounded-full border-8 border-transparent shadow-2xl transition-transform duration-300 group-hover:scale-105"
              src="https://cbx-prod.b-cdn.net/COLOURBOX58688312.jpg?width=800&height=800&quality=70"
              alt="Software Engineer Profile Picture"
              style={{ zIndex: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;