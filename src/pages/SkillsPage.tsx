import Header from "../components/Header";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCogs,
} from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { MdApi, MdIntegrationInstructions } from "react-icons/md";
import { SiTableau } from "react-icons/si";
import { SiGoogledatastudio } from "react-icons/si";
import { SiPlotly } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

/* ---------- Reusable Components ---------- */

function SkillCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-8 backdrop-blur transition hover:bg-white/15 h-[340px] text-center">
      <h3 className="mb-6 text-xl font-semibold text-white">{title}</h3>
      <ul className="space-y-4 items-center">{children}</ul>
    </div>
  );
}

function Skill({
  icon,
  iconSrc,
  label,
}: {
  icon?: React.ReactNode;
  iconSrc?: string;
  label: string;
}) {
  return (
    <li className="flex items-center justify-center gap-3 text-white/80">
      {icon ? (
        <span className="text-xl text-red-400">{icon}</span>
      ) : (
        <img src={iconSrc} alt={label} className="h-8 w-8" />
      )}
      <span>{label}</span>
    </li>
  );
}

function SkillsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b2a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-600/50 blur-[140px]" />
        <div className="absolute -left-56 -bottom-56 h-[640px] w-[640px] rounded-full bg-pink-600/40 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <div className="grid gap-8 md:grid-cols-3 mx-auto mt-20 max-w-7xl items-center px-12 ">
          {/* Front-End Card */}
          <SkillCard title="Front-End">
            <Skill icon={<FaHtml5 />} label="HTML5" />
            <Skill icon={<FaCss3Alt />} label="CSS3" />
            <Skill icon={<FaJs />} label="JavaScript (ES6+)" />
            <Skill icon={<FaReact />} label="React" />
            <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
          </SkillCard>

          {/* Back-End Card */}
          <SkillCard title="Back-End">
            <Skill icon={<FaNodeJs />} label="Node.js" />
            <Skill icon={<MdApi />} label="RESTful APIs" />
            <Skill icon={<FaPython />} label="Python (Data & Backend)" />
            <Skill icon={<FaDatabase />} label="SQL (PostgreSQL / MySQL)" />
            <Skill icon={<SiExpress />} label="Express.js" />
          </SkillCard>

          {/* DevOps & Tools Card */}
          <SkillCard title="DevOps & Tools">
            <Skill icon={<FaGitAlt />} label="Git & GitHub" />
            <Skill icon={<FaDocker />} label="Docker" />
            <Skill icon={<FaCogs />} label="CI/CD Fundamentals" />
            <Skill
              icon={<DiGoogleCloudPlatform />}
              label="GCP (Foundational)"
            />
            <Skill
              icon={<MdIntegrationInstructions />}
              label="API Integration"
            />
          </SkillCard>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mx-auto mt-20 max-w-7xl items-center px-12 pb-12">
          <SkillCard title="Machine Learning Algorithm">
            <Skill icon={<SiTensorflow />} label="Tensorflow" />
            <Skill icon={<SiTensorflow />} label="Neural Network" />
            <Skill icon={<SiTensorflow />} label="Logistic Regression" />
            <Skill icon={<SiTensorflow />} label="XGBoost" />
            <Skill icon={<SiTensorflow />} label="Decision Tree" />
            <Skill icon={<SiTensorflow />} label="K-NN" />
          </SkillCard>
          <SkillCard title="Data Visualization">
            <Skill icon={<SiTableau />} label="Tableau" />
            <Skill icon={<FaCss3Alt />} label="Power BI" />
            <Skill icon={<SiGoogledatastudio />} label="Google Data Studio" />
            <Skill icon={<SiPlotly />} label="Plotly" />
            <Skill
              icon={<PiMicrosoftExcelLogoFill />}
              label="Microsoft Excel"
            />
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
