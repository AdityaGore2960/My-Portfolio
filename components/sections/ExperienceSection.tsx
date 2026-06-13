import { Briefcase, Github, ExternalLink } from "lucide-react";

const experiences = [
  {
  Name: "NetStream - Netflix Clone",
  company: "Personal Project",
  duration: "2025",
  desc: "Built a full-stack Netflix-inspired streaming platform with secure JWT authentication, movie discovery, watchlist management, responsive UI, and REST API integration. Implemented scalable backend services and deployed the application using modern cloud platforms.",
  stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO"],
  github: "https://github.com/AdityaGore2960/Net-Stream",
  live: "#",
},
  {
  Name: "MusicNest - Spotify Clone",
  company: "Personal Project",
  duration: "2025",
  desc: "Developed a Spotify-inspired music streaming application featuring playlist management, music search, audio playback controls, authentication, and a modern responsive user interface. Focused on delivering a seamless user experience and scalable architecture.",
  stack: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
  github: "https://github.com/AdityaGore2960/Music-Nest",
  live: "#",
},
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        03 — Technical Experience
      </p>
      <h2
        id="experience-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Explore my <span className="text-accent">work.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="group relative flex flex-col border border-gray-200 shadow-md rounded-xl p-7 hover:border-accent/30 hover:shadow-xl transition-all duration-300 bg-white h-full"
          >
            {/* Top row */}
            <div className="flex items-center gap-3 mb-4 text-accent">
              <Briefcase size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded-sm bg-accent/10">
                {exp.duration}
              </span>
            </div>

            <h3 className="font-sans font-black text-charcoal text-xl mb-1 group-hover:text-accent transition-colors duration-200">
              {exp.Name}
            </h3>
            <p className="text-sm font-bold text-mid-gray mb-4">{exp.company}</p>
            <p className="text-mid-gray text-sm leading-relaxed mb-6">{exp.desc}</p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              {exp.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-page-bg text-charcoal rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links / Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={exp.github}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-gray-200 rounded-md text-charcoal hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={exp.live}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-charcoal text-white rounded-md hover:bg-accent hover:shadow-md transition-all duration-300"
              >
                <ExternalLink size={14} />
                <span>Live</span>
              </a>
            </div>

            {/* Hover accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
