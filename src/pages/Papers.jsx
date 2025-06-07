import { useNavigate, Link } from "react-router-dom";
import papers from "../data/papers";

export default function Papers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-offwhite text-green px-6 md:px-16 py-32">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-green/40 hover:text-green hover:bg-gold/20 transition-colors duration-200"
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

      <div className="space-y-10 max-w-4xl mx-auto">
        {papers.map((paper) => (
          <Link
            key={paper.id}
            to={`/papers/${paper.id}`}
            className="block group bg-transparent hover:bg-gold/20 transition-all duration-200 ease-in-out hover:scale-[1.01] p-6 md:p-8 shadow-sm"
          >
            <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-200 space-y-2">
              <h2 className="text-lg font-light">{paper.title}</h2>
              <p className="text-sm">
                {paper.year} · {paper.subtitle}
              </p>
              <p className="text-sm leading-relaxed">{paper.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
