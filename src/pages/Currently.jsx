import { useNavigate } from "react-router-dom";

export default function Currently() {
     const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-offwhite text-green px-6 md:px-20 py-16 flex flex-col items-center justify-center space-y-8">
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

      {/* DeLa Section */}
      <div className="bg-gold/20 text-green w-full max-w-4xl p-6 md:p-8 text-sm font-light leading-relaxed shadow-md transition-shadow duration-300">
        <p className="mb-4">
          I'm currently building DeLa; a visionary Web3 project reimagining how
          human labor is validated and valued.
        </p>
        <p className="mb-4">
          DeLa is born from a single question: <br />
          <strong>
            how do we give real value to real work in a digital economy?
          </strong>
        </p>
        <p className="mb-4">
          Its a rethinking of how labor is recognized, validated, and rewarded,
          through proof and integrity. At its core, DeLa aims to build a more
          sovereign, human-centered web for workers, bridging the gap between
          the future of the internet and the truth of human labor.
        </p>
        <p className="italic">
          DeLa is currently in early development. Curious minds and
          collaborators are welcome to reach out.
        </p>
      </div>

      {/* Bitcoin Project */}
      <div className="bg-gold/20 text-green w-full max-w-4xl p-6 md:p-8 text-sm font-light leading-relaxed shadow-md transition-shadow duration-300">
        <p>
          In collaboration with Lynbitcoin, we craft a dashboard experience for
          top tier Bitcoiners making it seamless to navigate between loans,
          collateral, and spending strategies.
        </p>
      </div>

      {/* Contact */}
      <div className="text-center mt-12">
        <a
          href="mailto:enit_sirkel@proton.me"
          className="inline-block px-6 py-3 text-green/80 hover:text-green hover:bg-gold/20 transition-colors duration-300 tracking-wide text-sm font-light"
        >
          Let's talk
        </a>
      </div>
    </div>
  );
}
