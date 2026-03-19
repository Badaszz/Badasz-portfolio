import Groq from "groq-sdk"
import { portfolioData } from "../../data/portfolio"

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})

export async function sendMessage(messages) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: portfolioData.systemPrompt },
      ...messages,
    ],
    max_tokens: 400,
    temperature: 0.7,
  })
  return response.choices[0].message.content
}