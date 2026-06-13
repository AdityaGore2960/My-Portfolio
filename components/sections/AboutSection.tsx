export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="about-heading"
    >
      {/* Section label */}
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        01 — About Me
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: text */}
        <div>
          <h2
            id="about-heading"
            className="font-serif font-black text-charcoal leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            I build things that{" "}
            <span className="text-accent">matter.</span>
          </h2>
          <p className="text-mid-gray leading-relaxed mb-4 text-base">
            I'm <strong className="text-charcoal">Aditya Gore</strong> — a Full-Stack Developer &amp; AI Engineer
            passionate about building modern web applications, intelligent AI systems, and scalable backend architectures.
            Experienced with React, Next.js, Node.js, FastAPI, MongoDB, PostgreSQL, Docker, and LLM-powered applications.
            Currently focused on Generative AI, RAG systems, and software engineering best practices.
          </p>
        </div>

        {/* Right: quick facts */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Projects", value: "10+" },
            { label: "DSA Problems", value: "50+"},
            { label: "Hackathons", value: "5+" },
            { label: "Certifications", value: "5+" },
          ].map(({ label, value }) => (
            <div key={label} className="border-l-2 border-accent pl-4 py-1">
              <p className="text-[10px] uppercase tracking-widest font-bold text-mid-gray mb-0.5">
                {label}
              </p>
              <p className="text-sm font-semibold text-charcoal">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
