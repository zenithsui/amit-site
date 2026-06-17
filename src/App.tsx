import { motion } from "framer-motion";

const discoverLinks = ["Nothing", "Nothing", "Nothing", "Nothing", "Nothing"];
const missionLinks = ["Nothing", "Nothing", "Nothing", "Nothing"];
const conciergeLinks = ["Nothing", "Nothing", "Nothing", "Nothing"];

export default function App() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-black">
      <video
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col min-h-[115vh]">
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="text-white/50 text-xs uppercase tracking-[0.3em]">Welcome to</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-6xl md:text-8xl font-light tracking-tight mb-8 bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Amit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          >
            Always Anytime For Collaboration
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="https://amitproject14.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm tracking-wide hover:bg-white/10 transition-colors inline-block"
            >
              About Me
            </a>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-5">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 120 0 C 120 63.513 68.513 115.186 5.09 119.899 L 0 120 L 0 0 Z M 256 0 L 256 120 L 250.91 119.899 C 187.487 115.186 136 63.513 136 0 Z" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                I am Amit, a 15-year-old entrepreneur looking to collaborate with business owners.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Discover</h4>
                <ul className="text-xs space-y-2">
                  {discoverLinks.map((link, i) => (
                    <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">The Mission</h4>
                <ul className="text-xs space-y-2">
                  {missionLinks.map((link, i) => (
                    <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Concierge</h4>
                <ul className="text-xs space-y-2">
                  {conciergeLinks.map((link, i) => (
                    <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-center">
            <p className="text-[10px] uppercase tracking-widest opacity-50">
              © {new Date().getFullYear()} Amit — All rights reserved
            </p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
