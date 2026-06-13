import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Code-Sphere",
    tag: "MERN",
    desc: "Built a full-stack MERN platform enabling developers to collaborate, track coding progress, and share projects.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    accent: "#9333EA",
    github: "https://github.com/AdityaGore2960/Code-Sphere",
    live: "#",
  },
  {
    title: "Nexus-Mind",
    tag: "AI / ML",
    desc: "AI-powered mineral prospectivity platform. Combines geospatial ML, ensemble inference, and an interactive map interface to identify high-probability mineral exploration zones.",
    stack: ["Python", "Next.js 16", "Tensorflow", "FastAPI", "Docker"],
    accent: "#9333EA",
    github: "https://github.com/AdityaGore2960/Nexus-Mind",
    live: "#",
  },
  {
    title: "Sync-Verse",
    tag: "Real-time Collab",
    desc: "Real-time collaborative document editing platform. Collaborate on documents with your team in real-time with a seamless, modern interface.",
    stack: ["React", "Node.js", "Express", "Tailwind CSS", "Websocket"],
    accent: "#9333EA",
    github: "https://github.com/AdityaGore2960/Sync-Verse",
    live: "#",
  },
  {
    title: "Nova-AI",
    tag: "SaaS",
    desc: "A production-grade AI platform combining conversational AI, document intelligence, and real-time collaboration — built as a full-stack monorepo.",
    stack: ["Next.js 16", "Node.js", "Express.js", "FastAPI", "OpenAI API", "MongoDB"],
    accent: "#9333EA",
    github: "https://github.com/AdityaGore2960/Nova-AI",
    live: "#",
  },
  {
    title: "Net-Stream",
    tag: "Netflix Clone",
    desc: "A full-stack Netflix-inspired streaming discovery application built with React, Node.js, Express, MongoDB, and the TMDB API.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "TMDB API"],
    accent: "#9333EA",
    github: "https://github.com/AdityaGore2960/Net-Stream",
    live: "#",
  },
  {
    title: "Music-Nest",
    tag: "Music ",
    desc: "A full-stack music streaming web application inspired by Spotify. Stream free, legal music powered by the Jamendo API, create playlists, and enjoy real-time listening features.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Jamendo API"],
    accent: "#9333EA",
    github: "https://github.com/AdityaGore2960/Music-Nest",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        02 — Featured Projects
      </p>
      <h2
        id="projects-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Things I've <span className="text-accent">built.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col border border-gray-200 shadow-md rounded-xl p-7 hover:border-accent/30 hover:shadow-xl transition-all duration-300 bg-white h-full"
          >
            {/* Top row */}
            <div className="mb-4">
              <span
                className="text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded-sm"
                style={{ background: `${p.accent}18`, color: p.accent }}
              >
                {p.tag}
              </span>
            </div>

            <h3 className="font-sans font-black text-charcoal text-xl mb-2 group-hover:text-accent transition-colors duration-200">
              {p.title}
            </h3>
            <p className="text-mid-gray text-sm leading-relaxed mb-5">{p.desc}</p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-page-bg text-charcoal rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links / Buttons */}
            <div className="flex items-center gap-3 mt-auto">
              <a
                href={p.github}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-gray-200 rounded-md text-charcoal hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={p.live}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-charcoal text-white rounded-md hover:bg-accent hover:shadow-md transition-all duration-300"
              >
                <ExternalLink size={14} />
                <span>Live</span>
              </a>
            </div>

            {/* Hover accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
