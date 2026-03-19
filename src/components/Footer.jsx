import { portfolioData } from "../data/portfolio"

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-8 text-center">
      <p className="text-gray-700 font-mono text-sm">
        <span className="text-green-400">&lt;</span>
        {portfolioData.alias}
        <span className="text-green-400"> /&gt;</span>
        {" "}· Built with React + Tailwind · {new Date().getFullYear()}
      </p>
    </footer>
  )
}