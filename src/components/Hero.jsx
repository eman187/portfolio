import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroRoles, heroTech } from "../data";

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = heroRoles[roleIndex];
    let i = 0;
    setText("");
    const interval = setInterval(() => {
      i++;
      setText(current.slice(0, i));
      if (i === current.length) {
        clearInterval(interval);
        setTimeout(() => setRoleIndex((p) => (p + 1) % heroRoles.length), 1400);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section id="home" className="section-container pt-16 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-300 font-medium mb-4"
          >
            MERN Stack Web Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Eman <span className="gradient-text">Ajmal</span>
          </motion.h1>
          <p className="mt-6 text-lg text-soft max-w-xl">
            I build scalable, modern, and user-friendly web applications with
            clean UI and powerful backend systems using the MERN stack.
          </p>
          <div className="mt-6 text-2xl font-semibold h-10 text-violet-300">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Contact Me
            </a>
            {/* <a href="/resume.pdf" className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-semibold hover:bg-blue-500/20">Download Resume</a> */}
          </div>

          <div className="mt-10 glass rounded-3xl p-5 max-w-xl">
            <p className="text-sm text-blue-300 mb-2">Live code preview</p>
            <pre className="text-sm overflow-x-auto text-soft">
              {`const developer = {
  name: "Eman Ajmal",
  role: "MERN Stack Developer",
  passion: ["React", "Node.js", "UI/UX"],
  mission: "Build modern scalable web apps"
};`}
            </pre>
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-[2rem] p-8 relative overflow-hidden">
            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center text-center">
              <div>
                <div className="mx-auto h-44 w-44 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-5xl font-bold">
                  EA
                </div>
                <p className="mt-5 text-xl font-semibold">
                  Developer • Designer • Problem Solver
                </p>
              </div>
            </div>
            {heroTech.map((t, i) => (
              <motion.div
                key={t}
                className="absolute glass rounded-full px-4 py-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  delay: i * 0.12,
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                }}
                style={{
                  top: `${10 + ((i * 12) % 70)}%`,
                  left: `${i % 2 === 0 ? 0 : 70}%`,
                }}
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
