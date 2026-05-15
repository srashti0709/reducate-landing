"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-wide"
        >
          Redu<span className="text-[var(--primary)]">Cate</span>
        </motion.h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-base font-medium">
          {["home", "about", "programs", "testimonials"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              className="hover:text-[var(--primary)] transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </div>


        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[var(--primary)] text-black px-6 py-2.5 rounded-full font-semibold text-base shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition"
        >
          Apply Now
        </motion.button>

        {/* MOBILE ICON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={30} className="text-[var(--primary)]" />
          ) : (
            <Menu size={30} className="text-[var(--primary)]" />
          )}
        </button>
      </div>

      {/* MOBILE MENU (ANIMATED) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 pb-6 flex flex-col gap-5 bg-[var(--surface)] border-t border-white/10"
          >
            {["home", "about", "programs", "testimonials"].map((item, i) => (
              <a
                key={i}
                onClick={() => setOpen(false)}
                href={`#${item}`}
                className="text-lg hover:text-[var(--primary)] transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <button className="bg-[var(--primary)] text-black px-6 py-3 rounded-full mt-2 text-lg font-semibold">
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}