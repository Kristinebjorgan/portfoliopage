import projects from "../data/projects";
import { useNavigate } from "react-router-dom";


export default function Projects() {
      const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-offwhite text-green px-6 md:px-24 py-32 flex justify-center">
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

      {/* project grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="group relative bg-transparent hover:bg-gold/30 transition-all duration-200 hover:scale-[1.01] min-h-[180px] flex items-center justify-center text-center"
          >
            <div className="opacity-25 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 ease-in-out px-4">
              <h2 className="text-base font-light">{project.title}</h2>
              <p className="text-xs opacity-60 mt-1">{project.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
