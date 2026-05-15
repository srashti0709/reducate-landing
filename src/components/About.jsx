"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[var(--background)]">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.img
          src="/images/about.jpg"
          className="rounded-3xl border border-white/10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-[var(--primary)] tracking-[4px] uppercase">
            About Us
          </p>

          <h2 className="text-4xl font-bold mt-4 mb-6">
            Modern Education for Future Careers
          </h2>

          <p className="text-[var(--muted)] mb-4">
            ReduCate Academy focuses on practical skills, real-world projects,
            and career-oriented learning.
          </p>

          <p className="text-[var(--muted)]">
            Our mission is to bridge the gap between education and industry.
          </p>
        </motion.div>

      </div>
    </section>
  );
}