import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

const filters = ["All", "Frontend", "Full Stack", "UI/UX"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const okFilter = filter === "All" ? true : p.category === filter;
      const okQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.short.toLowerCase().includes(query.toLowerCase());
      return okFilter && okQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="section-container py-20">
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-blue-300 mb-2">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured work</h2>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="glass rounded-2xl px-4 py-3 w-full md:w-72 outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm ${filter === f ? "bg-blue-600" : "bg-white/10"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateX: 4, rotateY: -4, y: -6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-blue-300 mt-1">
                    {project.category}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-soft">{project.short}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold"
                >
                  Live Demo
                </a>
                {/* <a href={project.github} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">Source Code</a> */}
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold"
                >
                  {open === idx ? "Hide Details" : "Expand Description"}
                </button>
              </div>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-soft">{project.full}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
