import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ChatWindow from "./ChatWindow"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Show the hint label after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Hide hint once user opens the chat
  function handleOpen() {
    setOpen(!open)
    setShowHint(false)
  }

  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "12px",
    }}>
      <AnimatePresence>
        {open && <ChatWindow onClose={() => setOpen(false)} />}
      </AnimatePresence>

      {/* Hint bubble */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#0a0a0a",
              border: "1px solid rgba(74,222,128,0.35)",
              borderRadius: "10px",
              padding: "10px 14px",
              maxWidth: "200px",
              position: "relative",
            }}
          >
            <p style={{
              color: "#d1d5db",
              fontFamily: "monospace",
              fontSize: "12px",
              margin: 0,
              lineHeight: 1.5,
            }}>
              Ask my AI assistant anything about me
            </p>
            {/* Arrow pointing down to button */}
            <div style={{
              position: "absolute",
              bottom: "-7px",
              right: "22px",
              width: "12px",
              height: "12px",
              background: "#0a0a0a",
              border: "1px solid rgba(74,222,128,0.35)",
              borderTop: "none",
              borderLeft: "none",
              transform: "rotate(45deg)",
            }} />
            {/* Dismiss */}
            <button
              onClick={() => setShowHint(false)}
              style={{
                position: "absolute",
                top: "6px",
                right: "8px",
                background: "none",
                border: "none",
                color: "#6b7280",
                cursor: "pointer",
                fontSize: "11px",
                lineHeight: 1,
                padding: 0,
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div style={{ position: "relative" }}>
        {/* Glow ring behind button */}
        <motion.div
          animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "1px solid rgba(74,222,128,0.5)",
            pointerEvents: "none",
          }}
        />

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: open
              ? "rgba(74,222,128,0.9)"
              : "rgba(74,222,128,0.12)",
            border: "1.5px solid rgba(74,222,128,0.7)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 24px rgba(74,222,128,0.25)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span style={{
            fontFamily: "monospace",
            fontSize: open ? "18px" : "15px",
            fontWeight: "bold",
            color: open ? "#000" : "#4ade80",
            letterSpacing: open ? "0" : "-1px",
          }}>
            {open ? "✕" : ">_"}
          </span>
        </motion.button>
      </div>
    </div>
  )
}