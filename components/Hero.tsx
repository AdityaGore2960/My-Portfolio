import ContactInfoBar from "./ContactInfoBar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-[calc(100vh-80px)] scroll-mt-20 py-16"
      aria-labelledby="hero-heading"
    >
      {/* Small label */}
      <p className="text-mid-gray text-sm font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in delay-100">
        Hi There,
      </p>

      {/* Main heading */}
      <h1
        id="hero-heading"
        className="font-sans font-black text-charcoal leading-[1.0] mb-6 animate-slide-up delay-200"
        style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
      >
        I am Ad<span className="text-accent">i</span>tya
      </h1>

      {/* Subheadings */}
      <p
        className="font-semibold text-mid-gray leading-snug animate-slide-up delay-300 mb-2"
        style={{ fontSize: "clamp(1.2rem, 2.8vw, 2rem)" }}
      >
        Full-Stack Developer &amp; AI Engineer
      </p>
      <p
        className="text-mid-gray leading-relaxed mb-10 animate-slide-up delay-400 max-w-xl"
        style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
      >
        Building scalable web applications, AI-powered products, and intelligent automation systems.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 animate-slide-up delay-500">
        <a
          href="#projects"
          className="inline-block bg-accent text-white font-bold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm shadow-lg hover:bg-[#7e22ce] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-block border-2 border-charcoal text-charcoal font-bold px-8 py-3 text-sm tracking-widest uppercase rounded-sm hover:bg-charcoal hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
        >
          Contact Me
        </a>
      </div>

      {/* Contact info bar */}
      <ContactInfoBar />
    </section>
  );
}
