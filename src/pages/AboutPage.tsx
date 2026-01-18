import Header from "../components/Header";

function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <section className="mx-auto max-w-7xl px-12 py-24">
          <h2 className="mb-12 text-4xl font-bold text-white">About Me</h2>
          <div className="mb-12">
            <p className="max-w-4xl text-lg leading-relaxed text-white/80">
              I’m a Data Scientist with experience in data analysis, modeling,
              and problem-solving, currently expanding my expertise into
              full-stack web development. My interest in web development comes
              from a desire to build complete, data-driven applications where
              insights, logic, and user experience work together. I enjoy
              translating data and business requirements into functional,
              reliable software solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 2 - Skills */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Core Skills
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <strong>Programming & Data:</strong> Python, SQL, Data
                  Analysis
                </li>
                <li>
                  <strong>Front-End:</strong> JavaScript, React, HTML, CSS
                </li>
                <li>
                  <strong>Back-End:</strong> Node.js, REST APIs
                </li>
                <li>
                  <strong>Tools:</strong> Git, Version Control, API Integration
                </li>
              </ul>
            </div>

            {/* Card 3 - Values */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Key Values
              </h3>
              <ul className="space-y-4 text-white/80">
                <li>
                  <strong>Timeliness:</strong> Delivering work on time through
                  clear planning and efficient execution.
                </li>
                <li>
                  <strong>Attention to Detail:</strong> Ensuring accuracy and
                  consistency in both data and application behavior.
                </li>
                <li>
                  <strong>Clear Communication:</strong> Maintaining transparent
                  and effective collaboration with teams and stakeholders.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutPage;
