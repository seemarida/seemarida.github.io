import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for page navigation events
    const handleAstroBeforeLoad = () => {
      setIsLoading(true);
    };

    const handleAstroAfterLoad = () => {
      // Add slight delay to make the animation visible
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Add event listeners for Astro's navigation events
    document.addEventListener('astro:before-swap', handleAstroBeforeLoad);
    document.addEventListener('astro:after-swap', handleAstroAfterLoad);

    return () => {
      document.removeEventListener('astro:before-swap', handleAstroBeforeLoad);
      document.removeEventListener('astro:after-swap', handleAstroAfterLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-30 backdrop-blur-sm"
        >
          <div className="relative">
            {/* Brain neuron pulse animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-light-pink opacity-50 blur-md"
            />

            {/* Neural network visualization */}
            <svg width="80" height="80" viewBox="0 0 80 80" className="relative z-10">
              <g fill="none" stroke="currentColor" className="text-soft-blue" strokeWidth="1.5">
                {/* Central node */}
                <circle cx="40" cy="40" r="8" className="fill-light-pink" />

                {/* Surrounding nodes */}
                <circle cx="20" cy="20" r="4" className="fill-muted-rose" />
                <circle cx="60" cy="20" r="4" className="fill-muted-rose" />
                <circle cx="20" cy="60" r="4" className="fill-muted-rose" />
                <circle cx="60" cy="60" r="4" className="fill-muted-rose" />

                {/* Connections */}
                <path d="M40,40 L20,20" />
                <path d="M40,40 L60,20" />
                <path d="M40,40 L20,60" />
                <path d="M40,40 L60,60" />

                {/* Animated pulses along connections */}
                <motion.circle
                  cx="30"
                  cy="30"
                  r="2"
                  className="fill-creamy-white"
                  animate={{ cx: [20, 40], cy: [20, 40] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />

                <motion.circle
                  cx="50"
                  cy="30"
                  r="2"
                  className="fill-creamy-white"
                  animate={{ cx: [60, 40], cy: [20, 40] }}
                  transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                />

                <motion.circle
                  cx="30"
                  cy="50"
                  r="2"
                  className="fill-creamy-white"
                  animate={{ cx: [20, 40], cy: [60, 40] }}
                  transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="2"
                  className="fill-creamy-white"
                  animate={{ cx: [60, 40], cy: [60, 40] }}
                  transition={{ duration: 0.75, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                />
              </g>
            </svg>

            <div className="mt-4 text-center text-gray-700 font-medium">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Synapsing...
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;