"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg px-6 pt-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-[var(--primary)] tracking-[4px] uppercase mb-4"
          >
            ReduCate Academy
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Learn Skills <br />
            That Build Your <span className="text-[var(--primary)]">Future</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-[var(--muted)] mt-6 text-lg max-w-xl"
          >
            Modern learning platform for Web Development, UI/UX, and career-focused education.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex gap-4 mt-8"
          >
            
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgba(34,211,238,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--primary)] text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.08)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/10 px-6 py-3 rounded-full transition text-white"
            >
              Explore Programs
            </motion.button>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          
          {/* Floating animation card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="rounded-3xl p-10 border border-white/10 bg-[var(--surface)]/60 backdrop-blur-md shadow-2xl"
          >
            
            <h2 className="text-2xl font-bold mb-4">
              Learn. Build. Grow.
            </h2>

            <p className="text-[var(--muted)] mb-6">
              Join thousands of students upgrading their careers with practical skills.
            </p>

            <div className="space-y-3">
              <div className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                ✔ Live Projects
              </div>
              <div className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                ✔ Expert Mentors
              </div>
              <div className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition">
                ✔ Job Ready Skills
              </div>
            </div>

          </motion.div>

          {/* glowing orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--primary)]/20 blur-3xl rounded-full"
          />

          <motion.div
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--secondary)]/20 blur-3xl rounded-full"
          />

        </motion.div>

      </div>
    </section>
  );
}