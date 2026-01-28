'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait 1 second, then trigger the slide-up animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call onComplete after animation finishes
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600); // Match this with the exit animation duration
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1], // Custom easing for smooth slide
          }}
          className="fixed inset-0 z-[9999] bg-red-500 flex items-center justify-start"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold text-black tracking-tight text-left leading-none"
          >
            <div>D-END</div>
            <div>STUDIO</div>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}