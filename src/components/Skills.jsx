import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section-container py-20">
      <div className="mb-10">
        <p className="text-blue-300 mb-2">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold">Tech stack & tools</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {skills.map((group, idx) => (
          <motion.div key={group.category} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*.1}} className="glass rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-5">{group.category}</h3>
            <div className="space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-sm"><span>{skill.name}</span><span>{skill.level}%</span></div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div initial={{width:0}} whileInView={{width:`${skill.level}%`}} viewport={{once:true}} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
