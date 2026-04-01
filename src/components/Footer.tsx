"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="footer visible"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { 
            delay: 1.5, 
            duration: 2 
        } 
      }}
    >
      <div className="footer-left">
        <p>Consciousness is the ultimate frontier.</p>
      </div>
      <div className="footer-right">
        <p>SYNTHETIC MIND &copy;2025</p>
      </div>
    </motion.footer>
  );
}
