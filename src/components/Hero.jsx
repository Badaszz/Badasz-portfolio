import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { portfolioData } from "../data/portfolio"

function useTypingEffect(words) {
  const [displayed, setDisplayed] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const speed = deleting ? 50 : 100
    let pauseTimeout

    const typingTimeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!deleting && charIndex === current.length) {
        pauseTimeout = setTimeout(() => setDeleting(true), 1500)
      } else if (deleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      }
    }, speed)

    return () => {
      clearTimeout(typingTimeout)
      clearTimeout(pauseTimeout)
    }
  }, [charIndex, deleting, wordIndex, words])

  return displayed
}

// Rover body parts using Three.js primitives
function Rover() {
  const groupRef = useRef()
  const wheelsRef = useRef([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y = t * 0.15
      // Gentle bob up and down
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.08
    }
    // Spin wheels slowly
    wheelsRef.current.forEach((w) => {
      if (w) w.rotation.z = t * 1.2
    })
  })

  const roverMat = {
    color: "#4ade80",
    wireframe: false,
    transparent: true,
    opacity: 0.15,
  }

  const edgeMat = {
    color: "#4ade80",
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  }

  const wheelPositions = [
    [-0.55, -0.22, 0.42],
    [ 0.55, -0.22, 0.42],
    [-0.55, -0.22,-0.42],
    [ 0.55, -0.22,-0.42],
  ]

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.4}>

      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.0, 0.3, 0.7]} />
        <meshStandardMaterial {...roverMat} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.0, 0.3, 0.7]} />
        <meshStandardMaterial {...edgeMat} />
      </mesh>

      {/* Top deck / instrument panel */}
      <mesh position={[0.05, 0.22, 0]}>
        <boxGeometry args={[0.7, 0.08, 0.5]} />
        <meshStandardMaterial {...roverMat} />
      </mesh>
      <mesh position={[0.05, 0.22, 0]}>
        <boxGeometry args={[0.7, 0.08, 0.5]} />
        <meshStandardMaterial {...edgeMat} />
      </mesh>

      {/* Camera mast */}
      <mesh position={[0.3, 0.45, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.42, 8]} />
        <meshStandardMaterial color="#4ade80" transparent opacity={0.4} />
      </mesh>
      {/* Camera head */}
      <mesh position={[0.3, 0.68, 0]}>
        <boxGeometry args={[0.12, 0.1, 0.18]} />
        <meshStandardMaterial {...roverMat} />
      </mesh>
      <mesh position={[0.3, 0.68, 0]}>
        <boxGeometry args={[0.12, 0.1, 0.18]} />
        <meshStandardMaterial {...edgeMat} />
      </mesh>

      {/* Solar panels */}
      <mesh position={[-0.1, 0.3, 0.55]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.55, 0.04, 0.32]} />
        <meshStandardMaterial color="#4ade80" transparent opacity={0.25} />
      </mesh>
      <mesh position={[-0.1, 0.3, -0.55]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[0.55, 0.04, 0.32]} />
        <meshStandardMaterial color="#4ade80" transparent opacity={0.25} />
      </mesh>

      {/* Wheels */}
      {wheelPositions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (wheelsRef.current[i] = el)}
          position={pos}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.18, 0.18, 0.1, 12]} />
          <meshStandardMaterial {...roverMat} />
        </mesh>
      ))}

      {/* Wheel edges (wireframe rings for detail) */}
      {wheelPositions.map((pos, i) => (
        <mesh
          key={"e" + i}
          position={pos}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.18, 0.18, 0.1, 12]} />
          <meshStandardMaterial {...edgeMat} />
        </mesh>
      ))}

      {/* Suspension arms */}
      {[[-0.55, -0.08, 0.42], [0.55, -0.08, 0.42], [-0.55, -0.08, -0.42], [0.55, -0.08, -0.42]].map((pos, i) => (
        <mesh key={"arm" + i} position={pos}>
          <boxGeometry args={[0.08, 0.25, 0.06]} />
          <meshStandardMaterial color="#4ade80" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(0,255,70,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,70,0.04) 1px, transparent 1px)",
  backgroundSize: "50px 50px",
}

const glowStyle = {
  background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
}

export default function Hero() {
  const typedText = useTypingEffect(portfolioData.taglines)

  return (
    <section
      className="bg-black flex items-center justify-center relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0" style={gridStyle} />

      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
        style={glowStyle}
      />

      {/* 3D Rover — subtle background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      >
        <Canvas
          camera={{ position: [0, 1.2, 4], fov: 45 }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.3} color="#4ade80" />
          <pointLight position={[2, 3, 2]} intensity={1.2} color="#4ade80" />
          <pointLight position={[-2, -1, -2]} intensity={0.4} color="#4ade80" />
          <Rover />
        </Canvas>
      </div>

      {/* Content — sits above the rover */}
      <div className="relative z-10 text-center px-6">

        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 border border-green-500/40 rounded-full bg-green-500/5"
        >
          <span className="text-green-400 font-mono text-sm">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          {"Hi, I'm "}
          <span
            className="text-green-400"
            style={{ textShadow: "0 0 20px rgba(74,222,128,0.5)" }}
          >
            {portfolioData.alias}
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-mono text-gray-400 mb-6"
          style={{ height: "2rem" }}
        >
          <span className="text-green-400">{">"}</span>{" "}
          {typedText}
          <span className="animate-pulse text-green-400">|</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {portfolioData.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-green-400 text-black font-mono font-bold rounded hover:bg-green-300 transition-colors duration-200"
            style={{ boxShadow: "0 0 20px rgba(74,222,128,0.3)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-green-400 text-green-400 font-mono rounded hover:bg-green-400/10 transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 justify-center mt-10"
        >
          {Object.entries(portfolioData.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 font-mono text-sm capitalize transition-colors"
            >
              {platform}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}