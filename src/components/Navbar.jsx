import React, { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = navLinks.map((n) =>
      document.getElementById(n.toLowerCase()),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            setActive(
              entry.target.id.charAt(0).toUpperCase() +
                entry.target.id.slice(1),
            ),
        );
      },
      { threshold: 0.45 },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="section-container mt-4">
        <div className="glass rounded-2xl px-5 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold gradient-text">
            Eman Ajmal
          </a>
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm transition ${active === item ? "text-blue-400" : "text-soft hover:text-inherit"}`}
              >
                {item}
              </a>
            ))}
            {/* <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"><Download size={16}/> Resume</a> */}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="glass mt-3 rounded-2xl p-4 md:hidden flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="rounded-full bg-blue-600 px-4 py-2 text-center font-semibold"
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
