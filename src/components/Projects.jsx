import { useState } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"
import { SectionWrapper, SectionHeading } from "./About"

const statusColors = {
  Completed: "text-green-400 border-green-400/40 bg-green-400/5",
  "In Progress": "text-yellow-400 border-yellow-400/40 bg-yellow-400/5",
  Building: "text-blue-400 border-blue-400/40 bg-blue-400/5",
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/40 border border-gray-800 hover:border-green-500/40 rounded-lg p-6 flex flex-col gap-4 transition-colors duration-300 group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <span
          className={`text-xs font-mono px-2 py-1 rounded border shrink-0 ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 bg-gray-800 text-gray-400 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2 border-t border-gray-800">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 font-mono text-xs transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 font-mono text-xs transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const categories = ["All", "ML", "AI Engineering", "Robotics"]

  const filtered =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter)

  return (
    <SectionWrapper id="projects">
      <SectionHeading label="// what i've built" title="Projects" />

      {/* Filter buttons */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded font-mono text-sm border transition-colors duration-200 ${
              activeFilter === cat
                ? "bg-green-400 text-black border-green-400"
                : "text-gray-400 border-gray-700 hover:border-green-400 hover:text-green-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}