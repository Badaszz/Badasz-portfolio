import { useState, useEffect } from "react"
import { portfolioData } from "../data/portfolio"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Listen for scroll to add background blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md border-b border-green-500/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-green-400 font-mono font-bold text-xl tracking-widest">
          &lt;Badasz /&gt;
        </span>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8">
          {portfolioData.navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-green-400 font-mono text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400 font-mono text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-black/95 border-t border-green-500/20 px-6 py-4 flex flex-col gap-4">
          {portfolioData.navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-green-400 font-mono text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}