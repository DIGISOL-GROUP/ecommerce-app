import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for BackgroundBeams
const BackgroundBeams = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="beam1" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" stopOpacity="0.7" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="beam2" x1="0" y1="900" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" stopOpacity="0.5" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g>
        <motion.rect animate={{ x: [0, 100, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} x="0" y="0" width="1440" height="120" fill="url(#beam1)" opacity="0.5" />
        <motion.rect animate={{ x: [0, -100, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} x="0" y="200" width="1440" height="80" fill="url(#beam2)" opacity="0.4" />
        <motion.rect animate={{ x: [0, 200, 0] }} transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} x="0" y="400" width="1440" height="100" fill="url(#beam1)" opacity="0.3" />
      </g>
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-transparent pointer-events-none" />
  </div>
);

const HoverBorderGradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0 0 16px #00FFFF' }}
    className="px-8 py-4 rounded-glass bg-cyan-400 text-gray-900 font-bold text-xl shadow-glass border-4 border-gradient-to-r from-electric to-magenta transition-all duration-300"
  >
    {children}
  </motion.button>
);

const HeroSection: React.FC = () => (
  <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gray-900">
    <BackgroundBeams />
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-electric mb-6"
      >
        Powering the Future
      </motion.h1>
      <HoverBorderGradientButton>Explore Products</HoverBorderGradientButton>
    </div>
  </section>
);

export default HeroSection;
