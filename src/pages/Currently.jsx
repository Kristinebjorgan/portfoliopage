export default function Currently() {
  return (
    <div className="h-screen overflow-hidden bg-offwhite text-green px-6 md:px-20 py-16 flex flex-col items-center justify-center space-y-8">
      {/* DeLa Section */}
      <div className="bg-green/10 w-full max-w-4xl p-6 md:p-8 text-sm font-light leading-relaxed shadow-md transition-shadow duration-300">
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
      <div className="bg-green/10 w-full max-w-4xl p-6 md:p-8 text-sm font-light leading-relaxed shadow-md transition-shadow duration-300">
        <p>
          In collaboration with Lynbitcoin, we craft a dashboard experience for
          top tier Bitcoiners making it seamless to navigate between loans,
          collateral, and spending strategies.
        </p>
      </div>

      {/* Contact */}
      {/* Contact Card */}
      <div className="text-center mt-12">
        <a
          href="mailto:enit_sirkel@proton.me"
          className="inline-block px-6 py-3 text-green/80 hover:text-green hover:bg-green/10 transition-colors duration-300 tracking-wide text-sm font-light"
        >
          Let's talk
        </a>
      </div>
    </div>
  );
}
