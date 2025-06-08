import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

return (
  <div className="relative min-h-screen bg-offwhite text-green px-6 md:px-20 py-16 flex items-center justify-center">
    {/* Back Button */}
    <button
      onClick={() => navigate(-1)}
      className="absolute top-6 left-6 text-green/40 hover:text-green transition-colors duration-200"
      aria-label="Go back"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    {/* Main content box */}
    <div className="bg-gold/20 w-full max-w-4xl p-8 md:p-10 text-sm font-light tracking-wide leading-loose shadow-md transition-shadow duration-300">
      <div className="space-y-5">
        <p>
          At heart, I am a creator. Whether its interfaces, applications,
          ecosystems, or ideas; I'm driven by the urge to shape whats needed
          while challenging whats assumed. Naturally born with a with a defiance
          toward the conventional, my work flows from deep curiosity as I
          balance structure with imagination and code with concept.
        </p>
        <p>
          I thrive in the intersection of frontend development, UX design, and
          blockchain innovation. With a mind wired for systems and a soul
          anchored in purpose, I build digital experiences that are intuitive,
          ethically aware, and future-oriented.
        </p>
        <p>
          I recently completed my formal studies in frontend development,
          building on a foundation of education and experience in project
          management. This blend gives me a unique perspective: aesthetic logic,
          structural clarity, and strategic execution.
        </p>
        <p>
          I'm currently building DeLa; a visionary Web3 project reimagining how
          human labor is validated and valued. Designed to bridge the gap
          between the future of the internet and the truth of human labor, DeLa
          reflects my commitment to decentralized tools that empower.
        </p>
        <p>
          This portfolio is a testament of my evolving philosophy on design,
          technology, decentralization and future of web. I move between
          idealism and execution, always building with purpose, clarity, and
          with a unwavering belief in a more intelligent, equal and
          humancentered internet-world.
        </p>
      </div>

      <div className="mt-8 text-sm text-green/70 hover:text-green transition-colors duration-200">
        <a
          href="https://github.com/Kristinebjorgan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          github
        </a>
      </div>
    </div>
  </div>
);
}
