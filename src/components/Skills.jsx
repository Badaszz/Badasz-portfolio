import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"
import { SectionWrapper, SectionHeading } from "./About"

// Individual skill tag
function SkillTag({ name, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="px-3 py-1.5 bg-gray-900 border border-green-500/20 rounded text-gray-300 text-xs font-mono hover:border-green-400 hover:text-green-400 transition-colors cursor-default"
    >
      {name}
    </motion.span>
  )
}

// Individual skill category card
function SkillCard({ category, icon, items, cardIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: cardIndex * 0.1 }}
      className="bg-gray-900/40 border border-gray-800 hover:border-green-500/40 rounded-lg p-6 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-white font-semibold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <SkillTag key={item} name={item} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading label="// what i work with" title="Skills & Technologies" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup, i) => (
          <SkillCard
            key={skillGroup.category}
            {...skillGroup}
            cardIndex={i}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}