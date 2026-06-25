import React, { useEffect, useState } from 'react';

const commands = [
  { label: 'Go to About', href: '#about' },
  { label: 'Go to Skills', href: '#skills' },
  { label: 'Go to Projects', href: '#projects' },
  { label: 'Go to Contact', href: '#contact' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4" onClick={() => setOpen(false)}>
      <div className="glass rounded-3xl w-full max-w-xl p-4" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm text-blue-300 mb-3">Quick Navigation</p>
        <div className="space-y-2">
          {commands.map((cmd) => (
            <a key={cmd.label} href={cmd.href} className="block rounded-2xl bg-white/10 px-4 py-3 hover:bg-white/20" onClick={() => setOpen(false)}>
              {cmd.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
