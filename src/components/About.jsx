import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data';

function CountUp({ end }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [end]);
  return count;
}

export default function About() {
  return (
    <section id="about" className="section-container py-20">
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass rounded-3xl p-8 md:p-10">
        <p className="text-blue-300 mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold">BS Software Engineering student with a passion for MERN development</h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4 text-soft">
            <p><strong>Name:</strong> Eman Ajmal</p>
            <p><strong>Degree:</strong> BS Software Engineering</p>
            <p><strong>University:</strong> University of Gujrat</p>
            <p>Eman Ajmal is a passionate software engineering student and MERN stack developer focused on building modern web applications with seamless frontend experiences and scalable backend architecture. Skilled in creating responsive interfaces, REST APIs, and database-driven systems.</p>
            <p>Focused on problem-solving, clean UI/UX, and building applications that feel modern, useful, and scalable.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s) => <div key={s.label} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl font-black gradient-text"><CountUp end={s.value} />+</div>
              <div className="mt-2 text-sm text-soft">{s.label}</div>
            </div>)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
