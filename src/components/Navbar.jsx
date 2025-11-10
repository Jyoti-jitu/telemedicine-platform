"use client"

import { Link, useNavigate } from "react-router-dom"
import { Menu, X, LogOut } from "lucide-react"
import { useState } from "react"

export default function Navbar({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate("/")
  }

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-secondary hidden sm:inline">TelaHealth</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {!user ? (
              <>
                <Link to="/" className="text-neutral-700 hover:text-primary transition">
                  Home
                </Link>
                <button
                  onClick={() => setUser({ role: "patient" })}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                >
                  Login as Patient
                </button>
                <button
                  onClick={() => setUser({ role: "doctor" })}
                  className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary-light transition"
                >
                  Login as Doctor
                </button>
              </>
            ) : (
              <>
                <span className="text-neutral-700">Welcome, {user.role}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-neutral-700 hover:text-primary transition"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link to="/" className="text-neutral-700 hover:text-primary">
              Home
            </Link>
            {!user ? (
              <>
                <button
                  onClick={() => {
                    setUser({ role: "patient" })
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg text-left"
                >
                  Login as Patient
                </button>
                <button
                  onClick={() => {
                    setUser({ role: "doctor" })
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-2 border border-primary text-primary rounded-lg text-left"
                >
                  Login as Doctor
                </button>
              </>
            ) : (
              <button onClick={handleLogout} className="text-neutral-700 text-left flex items-center gap-2">
                <LogOut size={20} /> Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
