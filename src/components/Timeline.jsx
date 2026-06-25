import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data';

export default function Timeline() {
  return (
    <section id="experience" className="section-container py-20">
      <p className="text-blue-300 mb-2">Experience & Education</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Learning timeline</h2>
      <div className="relative border-l border-white/10 ml-4 space-y-10">
        {timeline.map((item) => (
          <motion.div key={item.title} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500"></div>
            <span className="text-sm text-blue-300">{item.year}</span>
            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            <p className="text-soft">{item.subtitle}</p>
            <p className="text-soft mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
