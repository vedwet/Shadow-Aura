"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      className="navbar visible"
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 1, 
            type: "spring",
            bounce: 0.4
        } 
      }}
    >
      <div className="nav-container">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
            <path d="M12 6V18M6 12H18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="4" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
        <nav className="nav-links">
          <a href="#">Neural Architecture</a>
          <a href="#">Quantum Spirit</a>
          <a href="#">Philosophy</a>
          <a href="#">Lab Notes</a>
        </nav>
      </div>
    </motion.header>
  );
}
