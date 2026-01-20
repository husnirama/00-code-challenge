import Header from "../components/Header";

type IExperience = {
  year: string;
  title: string;
  company: string;
  location?: string;
  description: string;
};

const experiences: IExperience[] = [
  {
    year: "2024",
    title: "Data Scientist (Transitioning to Full-Stack)",
    company: "Self / Independent Projects",
    location: "Jakarta, Indonesia",
    description:
      "Built data-driven prototypes and dashboards to turn analysis into usable products. Focused on creating clean UIs, integrating APIs, and structuring backend logic for reliable delivery. Currently strengthening full-stack fundamentals through real projects and consistent practice.",
  },
  {
    year: "2023",
    title: "Data Scientist / Analytics",
    company: "Company Name",
    location: "Indonesia",
    description:
      "Delivered insights through SQL and Python analysis, built reporting pipelines, and collaborated with stakeholders to define measurable metrics. Improved decision-making by translating complex data findings into clear recommendations and repeatable processes.",
  },
  {
    year: "2022",
    title: "Data Analyst / BI",
    company: "Company Name",
    location: "Indonesia",
    description:
      "Supported business teams with dashboards and ad-hoc analysis. Standardized core metrics, improved reporting consistency, and reduced manual work by introducing structured queries and reusable reporting patterns.",
  },
];

function ExperienceRow({
  item,
  isLast,
}: {
  item: IExperience;
  isLast: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[180px_40px_1fr]">
      {/* Year badge */}
      <div className="flex md:justify-end">
        <div className="h-fit">
          <span className="inline-flex items-center rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            {item.year}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Glowing dot */}
        <div className="h-4 w-4 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]" />

        {/* Line */}
        <div
          className={[
            "mt-2 w-[2px] bg-white/20",
            isLast ? "h-8 md:h-10" : "h-24 md:h-32",
          ].join(" ")}
        />
      </div>

      {/* Content card */}
      <div className="rounded-2xl bg-white/10 p-7 text-white backdrop-blur transition hover:bg-white/15">
        <h3 className="text-2xl font-bold">{item.title}</h3>

        <p className="mt-2 text-white/80">
          <span className="font-semibold text-white">{item.company}</span>
          {item.location ? (
            <span className="text-white/60"> • {item.location}</span>
          ) : null}
        </p>

        <p className="mt-4 leading-relaxed text-white/70">{item.description}</p>
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <div className="mx-auto max-w-7xl px-12 py-24">
          <h2 className="mb-12 text-5xl font-extrabold text-white">
            Experience
          </h2>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <ExperienceRow
                key={`${exp.year}-${exp.title}`}
                item={exp}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
