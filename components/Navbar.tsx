"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="text-xl font-bold text-slate-900">MediConnect</span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/features" className="text-gray-600 hover:text-emerald-600 transition">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Sign Up
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/login" className="block px-4 py-2 text-gray-600">
              Login
            </Link>
            <Link href="/register" className="block px-4 py-2 text-gray-600">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
