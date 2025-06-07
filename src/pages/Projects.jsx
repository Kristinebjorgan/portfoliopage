import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-offwhite text-green px-6 md:px-24 py-32 flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="group relative bg-transparent border border-green/10 hover:bg-green/30 transition-all duration-200 hover:scale-[1.01] min-h-[180px] flex items-center justify-center text-center"
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
