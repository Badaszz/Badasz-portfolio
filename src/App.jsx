import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ChatWidget from "./components/chatbot/ChatWidget"

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Blog />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}

export default App