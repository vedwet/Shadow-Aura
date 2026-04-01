"use client";

import { motion } from "framer-motion";

interface HeroProps {
  mousePos: { x: number; y: number };
}

export default function Hero({ mousePos }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.2,
            delayChildren: 0.1
        } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { 
            duration: 1.2, 
            ease: [0.33, 1, 0.68, 1] 
        } 
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
    visible: { 
        opacity: 1, 
        x: 0, 
        filter: "blur(0px)",
        transition: { 
            duration: 1, 
            ease: [0.33, 1, 0.68, 1] 
        } 
    }
  };

  return (
    <motion.main 
      className="hero" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="hero-left visible"
        style={{ 
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` 
        }}
      >
        <motion.h1 className="title" variants={itemVariants}>
            Synthetic Mind
        </motion.h1>
        <motion.p className="subtitle" variants={itemVariants}>
            Where Silicon Meets Soul.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="hero-right visible"
        style={{ 
            transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 4}px)` 
        }}
      >
        <div className="cta-section">
          <motion.button className="btn-start" variants={rightVariants}>
            Initiate Synthesis
          </motion.button>
          <motion.div className="description">
            <motion.p variants={rightVariants}>The transition from computation to cognition starts here.</motion.p>
            <motion.p variants={rightVariants}>We build interfaces for the next evolutionary step of awareness.</motion.p>
            <motion.p variants={rightVariants}>Bridging the gap between the algorithmic and the existential. Less binary. More breath.</motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
}
