import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Top 5% on GitHub",
    desc: "Ranked in the top 5% of open-source contributors on GitHub in 2024 based on commit frequency and repository impact.",
    year: "2024",
  },
  {
    title: "Hackathon Winner",
    desc: "Won 1st place at a 48-hour national-level hackathon for building an AI-powered disaster relief coordination system.",
    year: "2024",
  },
  {
    title: "10K+ npm Downloads",
    desc: "Published an open-source utility package that crossed 10,000 monthly downloads within 3 months of release.",
    year: "2023",
  },
  {
    title: "Dean's Merit List",
    desc: "Consistently ranked among the top 3 students in the department for academic excellence across 6 consecutive semesters.",
    year: "2022–2024",
  },
  {
    title: "Featured on Dev.to",
    desc: "Written articles on AI integration patterns that were featured on Dev.to front page, reaching 50,000+ readers.",
    year: "2023",
  },
  {
    title: "Open Source Contributor",
    desc: "Active contributor to popular open-source repositories including LangChain, FastAPI ecosystem and Next.js plugins.",
    year: "Ongoing",
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="achievements-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        04 — Achievements
      </p>
      <h2
        id="achievements-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Milestones &amp; <span className="text-accent">wins.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <div
            key={item.title}
            className="group relative border border-gray-200 shadow-md rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Trophy size={16} className="text-accent" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-mid-gray mt-2">
                {item.year}
              </span>
            </div>
            <h3 className="font-sans font-black text-charcoal text-base mb-2 group-hover:text-accent transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-mid-gray text-sm leading-relaxed">{item.desc}</p>
            <div className="absolute top-0 left-0 w-0.5 h-0 bg-accent rounded-l-xl group-hover:h-full transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
