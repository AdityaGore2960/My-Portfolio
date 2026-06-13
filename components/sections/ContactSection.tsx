"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        07 — Contact
      </p>
      <h2
        id="contact-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Let's <span className="text-accent">connect.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: info */}
        <div>
          <p className="text-mid-gray leading-relaxed mb-8 text-base">
            Got a project in mind, a collaboration idea, or just want to say hi?
            My inbox is always open. I'll try my best to get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {[
              { icon: Mail, label: "Email", value: "adityagore068@gmail.com", href: "mailto:adityagore068@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9405332960", href: "tel:+919405332960" },
              { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 text-mid-gray hover:text-charcoal transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-mid-gray">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-charcoal">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {[
              { icon: Github, href: "https://github.com/AdityaGore2960", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/adityagore068", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-charcoal text-charcoal font-bold px-6 py-3 text-xs tracking-widest uppercase rounded-sm hover:bg-charcoal hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal block mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-light-gray focus:outline-none focus:border-accent transition-colors duration-200 bg-white"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal block mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-light-gray focus:outline-none focus:border-accent transition-colors duration-200 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal block mb-1.5">
              Subject
            </label>
            <input
              type="text"
              required
              placeholder="Enter your Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-light-gray focus:outline-none focus:border-accent transition-colors duration-200 bg-white"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal block mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Enter your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-charcoal placeholder:text-light-gray focus:outline-none focus:border-accent transition-colors duration-200 bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-accent text-white font-bold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm shadow-lg hover:bg-[#7e22ce] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 w-fit"
          >
            {sent ? (
              <span>Message Sent ✓</span>
            ) : (
              <>
                <Send size={14} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
