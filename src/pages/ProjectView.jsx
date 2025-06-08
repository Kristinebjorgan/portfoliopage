import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-green bg-offwhite px-6">
        <div className="text-center space-y-4">
          <p className="text-xl">Project not found</p>
          <button
            onClick={() => navigate(-1)}
            className="text-green/40 hover:text-green text-sm"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite text-green px-6 md:px-20 py-24">
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

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-light">{project.title}</h1>
        <p className="text-sm opacity-70">{project.subtitle}</p>
        <p className="text-sm leading-relaxed">{project.description}</p>

        {/* Meta */}
        <div className="text-sm text-green/50 space-y-1 mt-4">
          {project.type && <p>Type: {project.type}</p>}
          {project.year && <p>Year: {project.year}</p>}
          {project.grade && <p>Grade: {project.grade}</p>}
          {project.tags?.length > 0 && (
            <p>
              {project.tags.map((tag, i) => (
                <span key={i} className="mr-2">
                  #{tag}
                </span>
              ))}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green/70 hover:text-green"
            >
              GitHub
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green/70 hover:text-green"
            >
              Live Site
            </a>
          )}
          {project.report && (
            <a
              href={project.report}
              download
              className="underline text-green/70 hover:text-green"
            >
              Download Report
            </a>
          )}
          {project.designfile && (
            <a
              href={project.designfile}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green/70 hover:text-green"
            >
              Design File
            </a>
          )}
        </div>

        {/* Images */}
        {project.images?.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="rounded border border-green/20 shadow-sm hover:shadow-md transition-shadow duration-200"
              />
            ))}
          </div>
        )}

        {/* Feedback */}
        {project.feedback?.filter((f) => f.quote && f.source).length > 0 && (
          <div className="mt-10 space-y-4 text-sm text-green/70 italic">
            {project.feedback
              .filter((f) => f.quote && f.source)
              .map((f, idx) => (
                <blockquote key={idx} className="border-l-2 border-green pl-4">
                  “{f.quote}”
                  <span className="block not-italic font-light mt-1">
                    – {f.source}
                  </span>
                </blockquote>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
