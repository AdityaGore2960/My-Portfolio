"use client";

import { Github, GitCommit, GitPullRequest, Star } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Commits (2024)", value: "847" },
  { icon: GitPullRequest, label: "Pull Requests", value: "213" },
  { icon: Star, label: "Stars Earned", value: "1.2K" },
  { icon: Github, label: "Repositories", value: "56" },
];

const contributions = [
  { month: "Jan", count: 42 },
  { month: "Feb", count: 68 },
  { month: "Mar", count: 55 },
  { month: "Apr", count: 90 },
  { month: "May", count: 73 },
  { month: "Jun", count: 110 },
  { month: "Jul", count: 95 },
  { month: "Aug", count: 88 },
  { month: "Sep", count: 120 },
  { month: "Oct", count: 76 },
  { month: "Nov", count: 60 },
  { month: "Dec", count: 48 },
];

const pinnedRepos = [
  { name: "localgpt-enterprise", desc: "Offline RAG platform with FastAPI & Qdrant", stars: 284, lang: "Python" },
  { name: "nova-ai", desc: "Multi-provider AI chat via AIML API", stars: 178, lang: "TypeScript" },
  { name: "netstream", desc: "Video streaming platform with adaptive bitrate", stars: 134, lang: "JavaScript" },
  { name: "nexus-mind", desc: "AI SaaS on Vercel + Render with CI/CD", stars: 97, lang: "TypeScript" },
];

const maxCount = Math.max(...contributions.map((c) => c.count));

const langColor: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#2b7489",
  JavaScript: "#f1e05a",
};

export default function GithubSection() {
  return (
    <section
      id="github"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="github-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        06 — GitHub Activity
      </p>
      <h2
        id="github-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Open-source <span className="text-accent">presence.</span>
      </h2>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="border border-gray-200 shadow-sm rounded-xl p-5 bg-white text-center hover:border-accent/30 hover:shadow-md transition-all duration-200"
          >
            <Icon size={20} className="text-accent mx-auto mb-2" />
            <p className="font-black text-2xl text-charcoal">{value}</p>
            <p className="text-xs text-mid-gray mt-1 uppercase tracking-widest font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Contribution bar chart */}
      <div className="border border-gray-200 shadow-md rounded-xl p-6 bg-white mb-8">
        <p className="text-xs uppercase tracking-[0.25em] font-bold text-mid-gray mb-5">
          Monthly Contributions — 2024
        </p>
        <div className="flex items-end gap-2 h-28">
          {contributions.map((c) => (
            <div key={c.month} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm transition-all duration-500"
                style={{
                  height: `${(c.count / maxCount) * 100}%`,
                  background: "linear-gradient(180deg, #9333EA, #c084fc40)",
                  minHeight: "4px",
                }}
              />
              <span className="text-[9px] text-mid-gray font-semibold">{c.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned repos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {pinnedRepos.map((repo) => (
          <a
            key={repo.name}
            href={`https://github.com/aditya/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-gray-200 shadow-md rounded-xl p-5 bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Github size={14} className="text-mid-gray" />
              <span className="text-sm font-bold text-charcoal group-hover:text-accent transition-colors duration-200">
                {repo.name}
              </span>
            </div>
            <p className="text-xs text-mid-gray leading-relaxed flex-1 mb-3">
              {repo.desc}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: langColor[repo.lang] ?? "#888" }}
                />
                <span className="text-[11px] text-mid-gray font-medium">
                  {repo.lang}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={12} className="text-mid-gray" />
                <span className="text-[11px] text-mid-gray font-semibold">
                  {repo.stars}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
