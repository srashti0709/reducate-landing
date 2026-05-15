"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Web Development Student",
    text: "ReduCate completely changed how I learn. The structured programs and mentorship helped me land my first internship.",
  },
  {
    name: "Priya Mehta",
    role: "UI/UX Learner",
    text: "The learning experience is so smooth and modern. I actually enjoyed studying design here.",
  },
  {
    name: "Rohan Verma",
    role: "Software Engineer",
    text: "Best platform for practical skills. The projects feel like real industry work.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-[var(--background)]" id="testimonials">
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        
        <p className="text-[var(--primary)] uppercase tracking-[4px] mb-4">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Our Students Say
        </h2>

        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          Real experiences from learners who transformed their careers with ReduCate.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--surface)] border border-white/10 rounded-3xl p-8 hover:border-[var(--primary)]/40 transition"
          >
            
            <div className="w-14 h-14 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mb-6 text-[var(--primary)] font-bold text-lg">
              {item.name.charAt(0)}
            </div>

            <p className="text-[var(--muted)] mb-6 italic">
              "{item.text}"
            </p>

            <h4 className="font-semibold text-white">
              {item.name}
            </h4>

            <p className="text-sm text-[var(--muted)]">
              {item.role}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}