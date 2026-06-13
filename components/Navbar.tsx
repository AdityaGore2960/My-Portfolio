"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",             href: "#hero" },
  { label: "About Me",         href: "#about" },
  { label: "Projects",         href: "#projects" },
  { label: "Experience",       href: "#experience" },
  { label: "Skills",           href: "#skills" },
  //{ label: "Achievements",     href: "#achievements" },
  { label: "Certifications",   href: "#certifications" },
  { label: "Contact",          href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeId, setActiveId]     = useState("hero");

  /* ── Scroll-spy ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `text-xs font-semibold tracking-wider uppercase transition-all duration-200 pb-0.5 whitespace-nowrap ${
      activeId === id
        ? "text-accent border-b-2 border-accent"
        : "text-mid-gray hover:text-charcoal hover:border-b-2 hover:border-charcoal"
    }`;

  return (
    <header className="relative z-50">
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center justify-between py-5 px-2">
        <ul className="flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={linkClass(link.href.slice(1))}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden flex items-center justify-between py-5 px-2">
        <span className="font-serif font-black text-2xl text-charcoal">
          Ad<span className="text-accent">i</span>
        </span>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-charcoal hover:text-accent transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-xl z-50 animate-fade-in">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-semibold tracking-wide transition-colors ${
                    activeId === link.href.slice(1)
                      ? "text-accent"
                      : "text-mid-gray hover:text-charcoal"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
