"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import PatientDashboard from "./pages/PatientDashboard"
import SymptomAnalyzer from "./pages/SymptomAnalyzer"
import DoctorDashboard from "./pages/DoctorDashboard"
import Chat from "./pages/Chat"
import "./App.css"

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Navbar user={user} setUser={setUser} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/patient/dashboard" element={<PatientDashboard user={user} />} />
            <Route path="/patient/symptoms" element={<SymptomAnalyzer user={user} />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard user={user} />} />
            <Route path="/chat/:appointmentId" element={<Chat user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
