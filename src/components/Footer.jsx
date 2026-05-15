"use client";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-white/10 py-16 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Redu<span className="text-[var(--primary)]">Cate</span>
          </h2>

          <p className="text-[var(--muted)] text-sm leading-relaxed">
            A modern learning platform designed to empower students with
            practical skills, mentorship, and career opportunities.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li className="hover:text-[var(--primary)] cursor-pointer transition">Home</li>
            <li className="hover:text-[var(--primary)] cursor-pointer transition">About</li>
            <li className="hover:text-[var(--primary)] cursor-pointer transition">Programs</li>
            <li className="hover:text-[var(--primary)] cursor-pointer transition">Testimonials</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Career Training</li>
            <li>Certifications</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>Email: info@reducate.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} ReduCate Academy. All rights reserved.
      </div>
      
    </footer>
  );
}