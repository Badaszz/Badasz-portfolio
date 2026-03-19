import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"

// Reusable animated section wrapper — we'll use this everywhere
export function SectionWrapper({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {children}
    </motion.section>
  )
}

// Reusable section heading
export function SectionHeading({ label, title }) {
  return (
    <div className="mb-12">
      <span className="text-green-400 font-mono text-sm tracking-widest uppercase">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
        {title}
      </h2>
      <div className="mt-3 w-16 h-0.5 bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
    </div>
  )
}

export default function About() {
  const { about, alias, location } = portfolioData

  return (
    <SectionWrapper id="about">
      <SectionHeading label="// who am i" title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Text side */}
        <div className="space-y-5">
          <p className="text-gray-300 leading-relaxed">{about.intro}</p>
          <p className="text-gray-300 leading-relaxed">{about.focus}</p>
          <p className="text-gray-300 leading-relaxed">{about.goal}</p>

          {/* Quick facts */}
          <div className="mt-6 space-y-2 font-mono text-sm">
            {[
              ["Location", location],
              ["Current Role", "ML Engineer @ Babban Gona"],
              ["Interests", "Robotics, MLOps, Full Stack, Chess, Anime"],
              ["Status", "Open to opportunities 🟢"],
            ].map(([key, value]) => (
              <div key={key} className="flex gap-3">
                <span className="text-green-400 min-w-30">{key}:</span>
                <span className="text-gray-400">{value}</span>
              </div>
            ))}
          </div>

          {/* CV Button */}
          <a
            href="/assets/cv.pdf"
            download
            className="inline-block mt-4 px-6 py-2.5 border border-green-400 text-green-400 font-mono text-sm rounded hover:bg-green-400/10 transition-colors"
          >
            ↓ Download CV
          </a>
        </div>

        {/* Visual side — terminal card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gray-900/60 border border-green-500/20 rounded-lg p-6 font-mono text-sm"
        >
          {/* Terminal top bar */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-500 text-xs">badasz@portfolio:~</span>
          </div>

          {/* Terminal content */}
          {[
            { cmd: "whoami", out: alias },
            { cmd: "cat role.txt", out: "ML Engineer & AI Builder" },
            { cmd: "cat stack.txt", out: "Python | React | ROS2 | Docker" },
            { cmd: "cat currently.txt", out: "Building cool things in Lagos 🇳🇬" },
            { cmd: "cat goal.txt", out: "Robotics PhD abroad 🚀" },
          ].map(({ cmd, out }) => (
            <div key={cmd} className="mb-3">
              <p>
                <span className="text-green-400">$ </span>
                <span className="text-white">{cmd}</span>
              </p>
              <p className="text-gray-400 ml-2">{out}</p>
            </div>
          ))}

          <p className="mt-2">
            <span className="text-green-400">$ </span>
            <span className="animate-pulse text-green-400">▊</span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}