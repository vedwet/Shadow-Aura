"use client";

import { useState, useEffect, useRef } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePos({
        x: (clientX - centerX) / 60,
        y: (clientY - centerY) / 60,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <main>
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={handleLoaded} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Background mousePos={mousePos} />
          <Hero mousePos={mousePos} />
          <Footer />
        </>
      )}
    </main>
  );
}
