import React, { useEffect, useState } from 'react';

export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.shiftKey && e.key.toLowerCase() === 't') setOpen((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[85] glass rounded-3xl p-5 max-w-md">
      <p className="text-green-300 mb-2">$ whoami</p>
      <p className="text-soft">Eman Ajmal — MERN Stack Developer building modern, scalable, and user-friendly web applications.</p>
      <p className="text-green-300 mt-4 mb-2">$ skills</p>
      <p className="text-soft">React • Node.js • Express • MongoDB • REST APIs • UI/UX</p>
    </div>
  );
}
