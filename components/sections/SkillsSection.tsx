const skillGroups = [
  {
    category: "Languages",
    skills: [
      "Java",
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",

      "RBAC",

    ],
  },
  {
    category: "Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Google Colab",
    ],
  },
  {
    category: "Core CS",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems (OS)",
      "Database Management Systems (DBMS)",
      "Computer Networks (CN)",
    ],
  },
  {
    category: "Data Science & Analysis",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "ML Frameworks & Libraries",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "Hugging Face",
      "LangChain",
    ],
  },
  {
    category: "ML Concepts",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "LLM",
      "RAG",
      
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        03 — Skills
      </p>
      <h2
        id="skills-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        My <span className="text-accent">toolkit.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="group relative border border-gray-200 shadow-md rounded-xl p-7 bg-white hover:border-accent/30 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] font-black text-charcoal mb-5 group-hover:text-accent transition-colors duration-200">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold tracking-wider px-3 py-1.5 bg-page-bg text-mid-gray rounded-md group-hover:bg-accent/10 group-hover:text-charcoal transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
