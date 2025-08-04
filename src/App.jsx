import React, { useEffect, Suspense } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './components/Header';
import Intro from './components/Intro';
import Project from './components/Project';
import Certificate from './components/CertifIcate';
import About from './components/Footer';

// Lazy-load the Skill component
const Skill = React.lazy(() => import('./components/Skill'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return <div className="text-red-500 p-4">Error: {this.state.error.message}</div>;
    }
    return this.props.children;
  }
}

function App() {
  const controls = useAnimation();

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

  // Start animations
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <ErrorBoundary>
      <>
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
        <div className="relative top-20 mt-5">
          <Intro />
          <Suspense
            fallback={
              <div
                className="py-8"
                style={{
                  background: 'linear-gradient(to bottom right, #4f25b1, #190438)',
                  minHeight: '200px', // Match approximate Skill section height
                }}
              >
                <div className="text-white text-center">Loading Skills...</div>
              </div>
            }
          >
            <Skill />
          </Suspense>
          <div
            className="bg-gradient-to-br mt-[10vw] from-[#4f25b1] to-[#190438] py-[10vw] max-md:py-[20vw]"
            style={{
              clipPath: 'polygon(24% 0, 100% 5%, 100% 100%, 0 100%, 0 5%)',
              transform: 'translateZ(0)', // Force GPU acceleration
              position: 'relative', // Ensure proper stacking context
              zIndex: 1, // Prevent overlap with background elements
              contain: 'paint', // Isolate painting to reduce interference
            }}
          >
            <Project />
            <div className="mt-[10vw]"
             style={{ clipPath: 'polygon(79% 0, 100% 10%, 100% 100%, 0 100%, 0 10%)' }}>
              <Certificate />
            </div>
          </div>
          <About />
        </div>
      </>
    </ErrorBoundary>
  );
}

export default App;
