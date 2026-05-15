"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-[var(--background)] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)]/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Start Your Learning Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] text-lg mb-10"
        >
          Join thousands of students already building their future with ReduCate Academy.
          Start learning today and unlock your potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          
          <button className="bg-[var(--primary)] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Apply Now
          </button>

          <button className="border border-white/10 text-white px-8 py-4 rounded-full hover:bg-white/5 transition">
            Explore Programs
          </button>

        </motion.div>

      </div>
    </section>
  );
}