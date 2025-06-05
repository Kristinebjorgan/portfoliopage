import { useEffect, useState } from "react";

export default function Home() {
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxFadeScroll = 300; // adjust to control speed
      const newOpacity = Math.max(1 - scrollY / maxFadeScroll, 0);
      setFade(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[200vh] bg-[#fdf9ed]">
      {/* Gold overlay */}
      <div
        className="absolute inset-0 bg-[#fdc751]/30 pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: fade }}
      />

      {/* Centered name */}
      <div
        className="relative z-20 h-screen flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: fade }}
      >
        <div className="flex gap-4 text-[#296f5c] text-3xl font-extralight tracking-wide">
          <span>Kristine</span>
          <span>Bjørgan</span>
        </div>
      </div>

      {/* Placeholder next section */}
      <div className="h-screen flex items-center bg-[#fdf9ed]  justify-center text-green text-xl">
        <section className="w-full min-h-screen py-32 px-8 md:px-16 flex justify-center">
          <div className="w-full max-w-4xl grid grid-cols-12 grid-rows-4 gap-4">
            {/* Projects */}
            <div className="col-span-5 row-span-3 bg-green text-offwhite p-12 flex items-end text-4xl font-light hover:scale-[1.01] transition-transform">
              Projects
            </div>

            {/* Papers */}
            <div className="col-span-7 row-span-2 bg-gold text-green p-12 flex items-start justify-end text-3xl font-light hover:scale-[1.01] transition-transform">
              Papers
            </div>

            {/* About Me */}
            <div className="col-start-6 col-span-7 row-span-1 bg-[#e6dcc4] text-green p-12 flex items-center justify-end text-2xl font-light hover:scale-[1.01] transition-transform">
              About Me
            </div>

            {/* Currently Building */}
            <div className="col-span-12 row-span-1 bg-[#f3e7c2] text-green p-12 flex items-center justify-start text-3xl font-light hover:scale-[1.01] transition-transform">
              Currently Building
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
