const certifications = [
  {
    name: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco",
    completion: "2025",
    link: "https://www.credly.com/earner/earned/badge/a56b035b-e596-48cf-a399-4902c60b886d",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    completion: "2025",
    link: "https://www.credly.com/earner/earned/badge/c5643292-069d-4dfb-bcfb-544090987ffd",
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "AWS",
    completion: "2025",
    link: "https://www.credly.com/earner/earned/badge/1db9e205-e365-41be-9721-b326a9f12087",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
    issuer: "AWS",
    completion: "2025",
    link: "https://www.credly.com/earner/earned/badge/bbf3a098-40b9-4186-b273-172831e18026",
  },
  {
    name: "AI/ML Hackathon 2.0",
    issuer: "myOnSite HealthCare",
    completion: "2025",
    link: "https://www.linkedin.com/posts/aditya-gore-370897333_hackathon-ai-machinelearning-activity-7345680155450781697-NhMO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP1WkQB6dOrAfpBmSuZlhWhe841r72iFVQ",
  },
  {
    name: "PU Code Hackathon 2.0",
    issuer: "Parul University",
    completion: "2025",
    link: "https://www.linkedin.com/posts/aditya-gore-370897333_hackathon-pucodehackathon-innovation-activity-7370879296258748416-jhem?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFP1WkQB6dOrAfpBmSuZlhWhe841r72iFVQ",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 border-t-2 border-charcoal scroll-mt-20"
      aria-labelledby="certifications-heading"
    >
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
        05 — Certifications & Badges
      </p>
      <h2
        id="certifications-heading"
        className="font-serif font-black text-charcoal leading-tight mb-12"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Verified <span className="text-accent">credentials.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="group flex flex-col border border-gray-200 shadow-md rounded-xl p-5 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🏅</span>
              <h3 className="font-sans font-bold text-charcoal text-sm leading-snug group-hover:text-accent transition-colors duration-200">
                {cert.name}
              </h3>
            </div>

            <p className="text-sm text-charcoal font-medium mb-1">
              {cert.issuer}
            </p>

            <p className="text-xs text-mid-gray mb-4">
              Completed: {cert.completion}
            </p>

            <div className="mt-auto pt-2">
              <a
                href={cert.link}
                className="text-xs font-bold uppercase tracking-widest text-accent hover:text-charcoal transition-colors duration-200"
              >
                [View Credential]
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
