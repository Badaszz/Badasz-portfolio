import { useState } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"
import { SectionWrapper, SectionHeading } from "./About"

const socialIcons = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")

    try {
      // Using Formspree 
      const res = await fetch("https://formspree.io/f/xqeynnwq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeading label="// let's connect" title="Get In Touch" />

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left — message + socials */}
        <div className="space-y-8">
          <p className="text-gray-400 leading-relaxed">
            {portfolioData.contact.message}
          </p>

          {/* Email direct link */}
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-flex items-center gap-2 text-green-400 font-mono text-sm hover:underline"
          >
            <span>↗</span>
            {portfolioData.contact.email}
          </a>

          {/* Social links */}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-800">
            <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
              Find me on
            </p>
            <div className="flex gap-4">
              {Object.entries(portfolioData.socials).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center rounded border border-gray-800 text-gray-500 hover:border-green-400 hover:text-green-400 transition-colors"
                >
                  {socialIcons[platform] ?? (
                    <span className="font-mono text-xs capitalize">{platform[0]}</span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {[
            { name: "name", type: "text", placeholder: "Your name" },
            { name: "email", type: "email", placeholder: "your@email.com" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              required
              className="bg-gray-900/60 border border-gray-800 focus:border-green-400 rounded px-4 py-3 text-gray-300 placeholder-gray-700 font-mono text-sm outline-none transition-colors"
            />
          ))}

          <textarea
            name="message"
            placeholder="What's on your mind?"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-gray-900/60 border border-gray-800 focus:border-green-400 rounded px-4 py-3 text-gray-300 placeholder-gray-700 font-mono text-sm outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 bg-green-400 text-black font-mono font-bold rounded hover:bg-green-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 0 20px rgba(74,222,128,0.2)" }}
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {/* Feedback messages */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-mono text-sm text-center"
            >
              Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 font-mono text-sm text-center"
            >
              Something went wrong. Try emailing me directly.
            </motion.p>
          )}
        </form>
      </div>
    </SectionWrapper>
  )
}