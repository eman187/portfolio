import React from 'react';
import { motion } from 'framer-motion';

const particles = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 4 + Math.random() * 10,
  duration: 8 + Math.random() * 8,
}));

export default function BackgroundFX() {
  return (
    <>
      <div className="fixed inset-0 -z-20 grid-bg opacity-30" />
      <motion.div className="fixed -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl -z-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }} />
      <motion.div className="fixed top-1/3 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl -z-20"
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }} />
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity }}
          />
        ))}
      </div>
    </>
  );
}
