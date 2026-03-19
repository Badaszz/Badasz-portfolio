import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sendMessage } from "./groqClient"

const SUGGESTIONS = [
  "What projects has Badasz built?",
  "What are his skills?",
  "What is he working on now?",
  "What are his career goals?",
]

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! I'm Badasz's AI assistant. Ask me anything about him — his projects, skills, background, whatever you want to know.",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function handleSend(text) {
    const userText = text || input.trim()
    if (!userText || loading) return
    setInput("")

    const newMessages = [...messages, { role: "user", content: userText }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const reply = await sendMessage(
        newMessages.filter((m) => m.role !== "system")
      )
      setMessages([...newMessages, { role: "assistant", content: reply }])
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Hmm, something went wrong on my end. Try again!" },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "absolute",
        bottom: "70px",
        right: "0",
        width: "340px",
        background: "#0a0a0a",
        border: "1px solid rgba(74,222,128,0.2)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 0 40px rgba(74,222,128,0.08)",
      }}
    >
      {/* Header */}
      <div style={{
        padding: "12px 16px",
        borderBottom: "1px solid rgba(74,222,128,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(74,222,128,0.03)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#4ade80",
            boxShadow: "0 0 6px rgba(74,222,128,0.8)",
            display: "inline-block",
          }} />
          <span style={{ color: "#4ade80", fontFamily: "monospace", fontSize: "13px" }}>
            badasz_assistant
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "none", border: "none", color: "#6b7280",
            cursor: "pointer", fontSize: "16px", lineHeight: 1,
            padding: "2px 4px",
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: "auto", padding: "16px",
        display: "flex", flexDirection: "column", gap: "12px",
        maxHeight: "340px", minHeight: "200px",
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div style={{
              maxWidth: "80%",
              padding: "8px 12px",
              borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              background: msg.role === "user"
                ? "rgba(74,222,128,0.15)"
                : "rgba(255,255,255,0.04)",
              border: msg.role === "user"
                ? "1px solid rgba(74,222,128,0.3)"
                : "1px solid rgba(255,255,255,0.06)",
              color: msg.role === "user" ? "#4ade80" : "#d1d5db",
              fontFamily: "monospace",
              fontSize: "12.5px",
              lineHeight: "1.6",
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              padding: "8px 14px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px 12px 12px 2px",
              color: "#4ade80",
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "2px",
            }}>
              ···
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions — only on first message */}
      {messages.length === 1 && (
        <div style={{
          padding: "0 12px 12px",
          display: "flex", flexWrap: "wrap", gap: "6px",
        }}>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleSend(s)}
              style={{
                padding: "4px 10px",
                background: "rgba(74,222,128,0.05)",
                border: "1px solid rgba(74,222,128,0.2)",
                borderRadius: "20px",
                color: "#6b7280",
                fontFamily: "monospace",
                fontSize: "11px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#4ade80"
                e.target.style.borderColor = "rgba(74,222,128,0.5)"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#6b7280"
                e.target.style.borderColor = "rgba(74,222,128,0.2)"
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{
        padding: "12px",
        borderTop: "1px solid rgba(74,222,128,0.1)",
        display: "flex", gap: "8px",
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about Badasz..."
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: "6px",
            padding: "8px 12px",
            color: "#d1d5db",
            fontFamily: "monospace",
            fontSize: "12px",
            outline: "none",
          }}
        />
        <button
          onClick={() => handleSend()}
          disabled={loading || !input.trim()}
          style={{
            padding: "8px 14px",
            background: loading || !input.trim()
              ? "rgba(74,222,128,0.1)"
              : "rgba(74,222,128,0.8)",
            border: "none",
            borderRadius: "6px",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "12px",
            fontWeight: "bold",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          →
        </button>
      </div>
    </motion.div>
  )
}