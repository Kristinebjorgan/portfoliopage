import papers from "../data/papers";

export default function Papers() {
  return (
    <div className="min-h-screen bg-offwhite text-green px-6 md:px-16 py-32">
      <h1 className="text-2xl font-light mb-16 tracking-wide">Papers</h1>

      <div className="space-y-8">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="group relative bg-transparent transition-all duration-200 ease-in-out hover:bg-green/30 hover:scale-[1.01] p-8"
          >
            <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-150">
              <h2 className="text-lg font-light">
                {paper.path ? (
                  <a
                    href={paper.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {paper.title}
                  </a>
                ) : (
                  paper.title
                )}
              </h2>
              <p className="text-sm mt-1">
                {paper.year} · {paper.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
