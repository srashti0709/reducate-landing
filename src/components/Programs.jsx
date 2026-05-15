"use client";

import { motion } from "framer-motion";
import { Code, BookOpen, Briefcase, Award } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Learn modern full-stack development with real projects.",
    img: "/images/web.jpg",
  },
  {
    icon: BookOpen,
    title: "UI/UX Design",
    desc: "Design beautiful and user-friendly interfaces.",
    img: "/images/design.jpg",
  },
  {
    icon: Briefcase,
    title: "Career Training",
    desc: "Get job-ready with interview preparation.",
    img: "/images/career.jpg",
  },
  {
    icon: Award,
    title: "Certifications",
    desc: "Earn industry-recognized certificates.",
    img: "/images/cert.jpg",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 px-6 bg-[var(--background)]">
      
      {/* HEADER */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-[var(--primary)] tracking-[4px] uppercase">
          Our Programs
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Learn What Industry Demands
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {programs.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--surface)] border border-white/10 rounded-3xl overflow-hidden transition"
            >
              
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                
                <Icon className="text-[var(--primary)] mb-3" />

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-[var(--muted)] text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}