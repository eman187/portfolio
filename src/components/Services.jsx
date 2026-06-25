import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="section-container py-20">
      <p className="text-blue-300 mb-2">Services</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">What I can build for you</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return <motion.div key={service.title} whileHover={{y:-6}} className="glass rounded-3xl p-6">
            <Icon className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-3 text-soft">{service.text}</p>
          </motion.div>
        })}
      </div>
    </section>
  );
}
