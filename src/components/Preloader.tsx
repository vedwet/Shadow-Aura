"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // Original preloader duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="preloader"
      initial={{ y: 0, borderRadius: "0%" }}
      exit={{ 
        y: "-100%", 
        borderRadius: "50%",
        transition: { 
            duration: 1.2, 
            ease: [0.76, 0, 0.24, 1] 
        } 
      }}
    >
      <motion.div 
        className="preloader-content"
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8 } }}
      >
        <h1 className="preloader-logo">SYNTHETIC MIND</h1>
        <div className="loader-line-container">
          <div className="loader-line"></div>
        </div>
        <p className="loader-text">Initializing Consciousness...</p>
      </motion.div>
    </motion.div>
  );
}
