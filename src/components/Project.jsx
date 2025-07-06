import React from "react";
import { AnimatePresence } from "framer-motion";

function Project() {
  const projects = [
    {
      name: "WhiteBoard Real-Time Collaboration",
      description:
        "In this platform user can invite there friends and do the brain stroming on the whiteboard.by using Webscokets",
      images: [
      "src/assests/Home.png",
        "src/assests/Dashboard.png",
        "src/assests/Board.png",
      ],
      github: "https://github.com/sanchayMandil/WhiteBoard-Collaboration-",
    },
    {
      name: "AI Meeting Agent",
      description: "A Ai agent that can join the meeting and take notes for you.",
      images: [
        "https://cdn.prod.website-files.com/5d9bdb47e33988bf5815bfed/66918605796492296fd34fe0_What-are-AI-agents.jpg",
      ],
      github: "https://github.com/yourusername/project-two",
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const [currentImage, setCurrentImage] = React.useState(0);

  const prevSlide = () => {
    setCurrent((prev) => {
      setCurrentImage(0);
      return prev === 0 ? projects.length - 1 : prev - 1;
    });
  };

  const nextSlide = () => {
    setCurrent((prev) => {
      setCurrentImage(0);
      return prev === projects.length - 1 ? 0 : prev + 1;
    });
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? projects[current].images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === projects[current].images.length - 1 ? 0 : prev + 1
    );
  };

  // Animation variants for image fading and scaling
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <div>
      <h2 className="text-5xl text-center font-semibold text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Projects</h2>
      <div className="relative w-full max-w-xl mx-auto rounded shadow p-6 flex flex-col items-center"></div>
      <div className="relative w-full max-w-6xl mx-auto shadow-lg p-10 flex flex-col border-[1px] border-white/30 rounded-3xl items-center bg-opacity-30 backdrop-blur-md">
        <div className="w-full flex flex-row items-center justify-between mb-4">
          <h3 className="text-3xl font-semibold text-[#e0e0e0] flex items-center gap-2">
            <a
              href={projects[current].github}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 hover:text-black"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            {projects[current].name}
          </h3>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center mb-4 overflow-hidden">
            <button
              onClick={prevImage}
              className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              style={{ zIndex: 2 }}
            >
             ←
            </button>
            <AnimatePresence>
              <img
                key={projects[current].images[currentImage]}
                src={projects[current].images[currentImage]}
                alt={projects[current].name + " image"}
                className="w-full max-h-[400px] object-cover rounded-lg shadow"
                style={{ maxWidth: "1000px" }}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3, ease: "easeInOut" },
                }}
              />
            </AnimatePresence>
            <button
              onClick={nextImage}
              className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              style={{ zIndex: 2 }}
            >
               →
            </button>
          </div>
          <div className="flex gap-2 mb-4">
            {projects[current].images.map((_img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-3 h-3 rounded-full border-2 ${
                  currentImage === idx
                     ? 'bg-blue-500 scale-125'
                    : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          <p className="text-[#e0e0e0] text-lg text-center mb-6">
            {projects[current].description}
          </p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={prevSlide}
              className="p-3 text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Prev Project
            </button>
            <button
              onClick={nextSlide}
               className="px-3 text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Next Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
