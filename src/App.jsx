import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './components/Header';
import Intro from './components/Intro';
import Skill from './components/Skill';
import Project from './components/Project';
import Certificate from './components/CertifIcate';
import About from './components/Footer';

function App() {
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (e.g., for component rendering or data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Animation for horizontal electrical flow (left to right or right to left)
  const createHorizontalFlow = (isReverse = false) => ({
    hidden: { x: isReverse ? '100vw' : '-100vw', opacity: 0 },
    visible: {
      x: isReverse ? '-100vw' : '100vw',
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.5 + Math.random() * 1, // Random duration between 1.5s and 2.5s
        repeat: Infinity,
        repeatDelay: Math.random() * 2, // Random delay up to 2s
        ease: 'linear',
      },
    },
  });

  // Animation for vertical electrical flow (top to bottom or bottom to top)
  const createVerticalFlow = (isReverse = false) => ({
    hidden: { y: isReverse ? '100vh' : '-100vh', opacity: 0 },
    visible: {
      y: isReverse ? '-100vh' : '100vh',
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.5 + Math.random() * 1, // Random duration between 1.5s and 2.5s
        repeat: Infinity,
        repeatDelay: Math.random() * 2, // Random delay up to 2s
        ease: 'linear',
      },
    },
  });

  // Generate random lines (mix of horizontal and vertical)
  const randomLines = Array.from({ length: 6 }).map((_, index) => {
    const isHorizontal = Math.random() > 0.5;
    const isReverse = Math.random() > 0.5;
    const position = Math.random() * 80 + 10; // Position between 10% and 90%

    return (
      <motion.div
        key={`line-${index}`}
        className={`fixed ${isHorizontal ? 'h-0.5 w-full' : 'w-0.5 h-full'}`}
        style={{
          [isHorizontal ? 'top' : 'left']: `${position}%`,
          background: `linear-gradient(${isHorizontal ? '90deg' : '180deg'}, transparent, #8B5CF6, transparent)`,
          boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
          zIndex: -10,
        }}
        variants={isHorizontal ? createHorizontalFlow(isReverse) : createVerticalFlow(isReverse)}
        initial="hidden"
        animate={controls}
      />
    );
  });

  // Start animations
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Stylish loader component matching the electrical flow theme
  const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative w-32 h-32">
        {/* Central pulsing node */}
        <motion.div
          className="absolute inset-4 rounded-full bg-[#8B5CF6] opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.4, // Slowed from 1.2 to 2.4 seconds
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow: '0 0 15px #8B5CF6, 0 0 30px #8B5CF6',
          }}
        />
        {/* Electrical flow lines forming a cross */}
        <motion.div
          className="absolute top-1/2 h-0.5 w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)',
            boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3, // Slowed from 1.5 to 3 seconds
            repeat: Infinity,
            repeatDelay: 1, // Increased delay to 1 second for smoother pacing
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute left-1/2 w-0.5 h-full"
          style={{
            background: 'linear-gradient(180deg, transparent, #8B5CF6, transparent)',
            boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3, // Slowed from 1.5 to 3 seconds
            repeat: Infinity,
            repeatDelay: 1, // Increased delay to 1 second for smoother pacing
            ease: 'linear',
          }}
        />
        {/* Orbiting spark */}
        <motion.div
          className="absolute w-2 h-2 bg-[#8B5CF6] rounded-full"
          style={{
            top: '50%',
            left: '50%',
            boxShadow: '0 0 10px #8B5CF6',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4, // Slowed from 2 to 4 seconds
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Loading text */}
        <motion.div
          className="absolute bottom-[-2rem] w-full text-center text-[#8B5CF6] text-sm font-mono"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.4, // Slowed from 1.2 to 2.4 seconds
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );

  return (
    <>
      {/* Loader */}
      {isLoading && <Loader />}

      {/* Background pattern */}
      <div
        className="fixed inset-0 -z-10 opacity-10 backdrop-blur-sm"
        style={{
          backgroundImage:
            "url('https://img.icons8.com/?size=100&id=YVToA9CPXtKW&format=png&color=000000')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Original horizontal electrical flow */}
      <motion.div
        className="fixed top-1/4 left-0 h-0.5 w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)',
          boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
        }}
        variants={createHorizontalFlow()}
        initial="hidden"
        animate={controls}
      />
        <motion.div
        className="fixed top-[60%] left-0 h-0.5 w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)',
          boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
        }}
        variants={createHorizontalFlow()}
        initial="hidden"
        animate={controls}
      />

      {/* Original vertical electrical flow */}
      <motion.div
        className="fixed top-0 left-1/4 w-0.5 h-full"
        style={{
          background: 'linear-gradient(180deg, transparent, #8B5CF6, transparent)',
          boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
        }}
        variants={createVerticalFlow()}
        initial="hidden"
        animate={controls}
      />
      <motion.div
        className="fixed top-0 left-[60%] w-0.5 h-full"
        style={{
          background: 'linear-gradient(180deg, transparent, #8B5CF6, transparent)',
          boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6',
        }}
        variants={createVerticalFlow()}
        initial="hidden"
        animate={controls}
      />

      <Header />
      <div className="relative top-20 mt-5 ">
        <Intro />
        <Skill />
        <Project />
        <Certificate />
        
      <About />
      </div>


    </>
  );
}

export default App;