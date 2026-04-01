"use client";

import { motion } from "framer-motion";

interface BackgroundProps {
  mousePos: { x: number; y: number };
}

export default function Background({ mousePos }: BackgroundProps) {
  return (
    <motion.div 
      className="background-container visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <motion.video 
        id="heroVideo" 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
        animate={{ 
          transform: `scale(1.05) translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)` 
        }}
        transition={{ type: "smooth", damping: 20 }}
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </motion.video>
      <div className="overlay inner-shadow"></div>
    </motion.div>
  );
}
