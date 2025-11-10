"use client"

import { useState } from "react"
import { Send, Paperclip, Phone, Video } from "lucide-react"
import { useParams } from "react-router-dom"

export default function Chat({ user }) {
  const { appointmentId } = useParams()
  const [messages, setMessages] = useState([
    { id: 1, sender: "doctor", text: "Hello! How can I help you today?", timestamp: "10:30 AM" },
    { id: 2, sender: "patient", text: "I have been having headaches and fever for 2 days", timestamp: "10:31 AM" },
    { id: 3, sender: "doctor", text: "Have you taken any medications yet?", timestamp: "10:32 AM" },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: user?.role === "patient" ? "patient" : "doctor",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setInput("")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-screen flex flex-col">
      <div className="bg-white p-4 rounded-lg border border-neutral-200 mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-secondary">Consultation with Dr. Rajesh Kumar</h2>
          <p className="text-sm text-neutral-600">Active now</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-neutral-100 rounded-lg transition">
            <Phone size={20} className="text-primary" />
          </button>
          <button className="p-2 hover:bg-neutral-100 rounded-lg transition">
            <Video size={20} className="text-primary" />
          </button>
        </div>
      </div>

      <div className="flex-grow bg-white rounded-lg border border-neutral-200 p-6 overflow-y-auto mb-6">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "patient" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === "patient" ? "bg-primary text-white" : "bg-neutral-100 text-secondary"}`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === "patient" ? "text-primary-light" : "text-neutral-500"}`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-neutral-200 flex gap-2">
        <button className="p-2 hover:bg-neutral-100 rounded-lg transition">
          <Paperclip size={20} className="text-neutral-600" />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary"
        />
        <button
          onClick={handleSendMessage}
          disabled={!input.trim()}
          className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}
