import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import papers from "../data/papers";


export default function PaperView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = papers.find((p) => p.id === id);
  const availableLangs = Object.keys(paper?.files || {});
  const [lang, setLang] = useState(availableLangs[0] || "en");
  const [numPages, setNumPages] = useState(null);

  if (!paper) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-green bg-offwhite px-6">
        <p className="text-xl mb-4">Paper not found</p>
        <button
          onClick={() => navigate(-1)}
          className="text-green/40 hover:text-green text-sm"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite text-green px-6 md:px-16 py-24">
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

      {/* Paper info */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-xl font-light">{paper.title}</h1>
        <p className="text-sm opacity-70">{paper.subtitle}</p>
        <p className="text-sm leading-relaxed mt-4">{paper.description}</p>

        {/* Language selector */}
        {availableLangs.length > 1 && (
          <div className="mt-4 text-sm space-x-2">
            {availableLangs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded ${
                  lang === l
                    ? "bg-green text-offwhite"
                    : "bg-transparent text-green/50 hover:text-green"
                } transition-colors duration-200 text-xs`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        )}

<div className="mt-10 border border-green/20 rounded-lg shadow-md overflow-hidden bg-white">
  {/* Preview header */}
  <div className="bg-gold/10 text-green text-sm font-light px-5 py-3 border-b border-green/10 tracking-wide">
    Preview (PDF)
  </div>

  {/* PDF preview */}
  <div className="w-full h-[80vh]">
    <embed
      src={paper.files?.[lang]}
      type="application/pdf"
      className="w-full h-full"
    />
  </div>
    </div>
    </div>
    </div>
  );
}
