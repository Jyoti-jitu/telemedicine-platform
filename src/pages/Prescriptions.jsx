"use client"

import { useState } from "react"
import { Pill, AlertCircle, CheckCircle } from "lucide-react"

export default function Prescriptions({ user }) {
  const [prescriptions] = useState([
    {
      id: 1,
      medication: "Aspirin 500mg",
      dosage: "1 tablet",
      frequency: "Twice daily",
      duration: "7 days",
      doctor: "Dr. Raj Kumar",
      date: "2024-01-10",
      status: "Active",
      instructions: "Take after food",
    },
    {
      id: 2,
      medication: "Vitamin D3 1000 IU",
      dosage: "1 capsule",
      frequency: "Once daily",
      duration: "30 days",
      doctor: "Dr. Priya Singh",
      date: "2024-01-08",
      status: "Active",
      instructions: "Take with breakfast",
    },
    {
      id: 3,
      medication: "Antibiotic Amoxicillin 500mg",
      dosage: "1 tablet",
      frequency: "Three times daily",
      duration: "5 days",
      doctor: "Dr. Raj Kumar",
      date: "2024-01-05",
      status: "Completed",
      instructions: "Complete the full course",
    },
  ])

  const [reminders, setReminders] = useState([
    { id: 1, medication: "Aspirin 500mg", time: "9:00 AM", enabled: true },
    { id: 2, medication: "Aspirin 500mg", time: "9:00 PM", enabled: true },
    { id: 3, medication: "Vitamin D3 1000 IU", time: "8:00 AM", enabled: true },
  ])

  const toggleReminder = (id) => {
    setReminders(reminders.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <Pill className="text-emerald-500" /> My Prescriptions
        </h1>
        <p className="text-gray-600">Manage your medications and reminders</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {prescriptions.map((rx) => (
          <div key={rx.id} className="card p-6 border-l-4 border-emerald-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-lg">{rx.medication}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${rx.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
              >
                {rx.status}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <p>
                <span className="font-semibold">Dosage:</span> {rx.dosage}
              </p>
              <p>
                <span className="font-semibold">Frequency:</span> {rx.frequency}
              </p>
              <p>
                <span className="font-semibold">Duration:</span> {rx.duration}
              </p>
              <p>
                <span className="font-semibold">Instructions:</span> {rx.instructions}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              By {rx.doctor} on {rx.date}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <AlertCircle className="text-orange-500" /> Medication Reminders
        </h2>
        <div className="space-y-3">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="card p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CheckCircle className={reminder.enabled ? "text-green-500" : "text-gray-300"} size={24} />
                <div>
                  <p className="font-semibold">{reminder.medication}</p>
                  <p className="text-gray-600 text-sm">{reminder.time}</p>
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={reminder.enabled}
                  onChange={() => toggleReminder(reminder.id)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-gray-600">{reminder.enabled ? "On" : "Off"}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
