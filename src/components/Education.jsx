import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"
import { SectionWrapper, SectionHeading } from "./About"

function EducationCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-1/2 ${
          item.current ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" : "bg-gray-600"
        }`}
      />

      <div className="bg-gray-900/40 border border-gray-800 hover:border-green-500/20 rounded-lg p-5 transition-colors">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-white font-semibold">{item.degree}</h3>
          {item.current && (
            <span className="text-xs font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded bg-green-400/5">
              Current
            </span>
          )}
        </div>
        <p className="text-green-400 font-mono text-sm mb-1">{item.institution}</p>
        <p className="text-gray-600 font-mono text-xs mb-3">{item.period}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

function AccomplishmentCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/40 border border-gray-800 hover:border-green-500/30 rounded-lg p-5 transition-colors group"
    >
      <div className="flex items-start gap-4">
        <span className="text-green-400 font-mono text-lg mt-0.5">✦</span>
        <div>
          <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-500 font-mono text-xs mt-1 mb-2">
            {item.issuer} · {item.year}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading label="// where i've been" title="Education & Accomplishments" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education timeline */}
        <div>
          <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-6">
            Academic Background
          </h3>
          {portfolioData.education.map((item, i) => (
            <EducationCard key={item.degree} item={item} index={i} />
          ))}
        </div>

        {/* Accomplishments */}
        <div>
          <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-6">
            Accomplishments
          </h3>
          <div className="flex flex-col gap-4">
            {portfolioData.accomplishments.map((item, i) => (
              <AccomplishmentCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}