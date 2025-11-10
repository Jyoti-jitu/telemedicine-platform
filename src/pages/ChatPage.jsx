"use client"

import { useState } from "react"
import { Send, Phone, Video } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useAuth } from "../context/AuthContext"

function ChatPage() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      text: "Hello! How are you feeling today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "patient",
      text: "Hi Doctor, I have been experiencing a persistent cough for 3 days.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "doctor",
      text: "I see. Can you describe the cough? Is it dry or with phlegm?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "patient",
      text: "It is a dry cough, mostly at night. No fever though.",
      time: "10:35 AM",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "patient",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, message])
      setNewMessage("")

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "doctor",
            text: "Based on your symptoms, I recommend drinking warm water with honey and getting adequate rest. If it persists beyond a week, please visit for a physical examination.",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-light">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
            <div className="bg-primary-500 text-white p-4 flex justify-between items-center">
              <div>
                <h2 className="font-semibold">Dr. Rajesh Kumar</h2>
                <p className="text-sm text-primary-100">General Physician</p>
              </div>
              <div className="flex gap-3">
                <button className="p-2 hover:bg-primary-600 rounded-lg transition">
                  <Phone size={20} />
                </button>
                <button className="p-2 hover:bg-primary-600 rounded-lg transition">
                  <Video size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "patient" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "patient" ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "patient" ? "text-primary-100" : "text-gray-600"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ChatPage
