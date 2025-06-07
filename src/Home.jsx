import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxFadeScroll = 350;
      const newOpacity = Math.max(1 - scrollY / maxFadeScroll, 0);
      setFade(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[200vh] bg-offwhite">
      {/* Gold overlay */}
      <div
        className="absolute inset-0 bg-gold/30 pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: fade }}
      />

      {/* Centered name with arrow */}
      <div
        className="relative z-20 h-screen flex flex-col items-center justify-center transition-opacity duration-300"
        style={{ opacity: fade }}
      >
        <div className="flex gap-4 text-green text-3xl font-extralight tracking-wide">
          <span>Kristine</span>
          <span>Bjørgan</span>
        </div>

        {/* arrow */}
        <div className="mt-4 text-green/40">
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Category Grid */}
      <div className="h-screen flex items-center justify-center">
        <section className="w-full min-h-screen py-32 px-8 md:px-24 flex justify-center">
          <div className="w-full max-w-5xl grid grid-cols-12 grid-rows-4 gap-4 text-green">
            {/* Projects */}
            <Link
              to="/projects"
              className="col-span-5 row-span-3 group relative bg-transparent transition-all duration-200 ease-in-out hover:bg-green/30 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-100 ease-in-out text-lg font-light">
                projects
              </div>
            </Link>

            {/* Papers */}
            <Link
              to="/papers"
              className="col-span-7 row-span-2 group relative bg-transparent transition-all duration-200 ease-in-out hover:bg-green/30 hover:scale-[1.02] delay-200"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-100 ease-in-out text-base font-light">
                papers
              </div>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="col-start-6 col-span-7 row-span-1 group relative bg-transparent transition-all duration-200 ease-in-out hover:bg-green/30 hover:scale-[1.02] delay-300"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-100 ease-in-out text-sm font-light">
                about
              </div>
            </Link>

            {/* Currently */}
            <Link
              to="/currently"
              className="col-span-12 row-span-1 group relative bg-transparent transition-all duration-200 ease-in-out hover:bg-green/30 hover:scale-[1.02] delay-500"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-100 ease-in-out text-base font-light">
                currently
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
