import React from 'react';
import { socials } from '../data';

export default function Footer() {
  return (
    <footer className="section-container py-10">
      <div className="glass rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-xl">Eman Ajmal</h3>
          <p className="text-soft text-sm">Designed & Developed by Eman Ajmal</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {socials.map((s) => <a key={s.name} href={s.href} className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20">{s.name}</a>)}
        </div>
        <a href="#home" className="text-blue-300">Back to top ↑</a>
      </div>
    </footer>
  );
}
