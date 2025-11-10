"use client"

import { useState } from "react"
import { Download, Calendar, Pill } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function PrescriptionPage() {
  const [prescriptions] = useState([
    {
      id: 1,
      doctorName: "Dr. Rajesh Kumar",
      date: "2024-01-08",
      medicines: [
        { name: "Paracetamol", dosage: "500mg", frequency: "Twice daily", duration: "5 days" },
        { name: "Cough Syrup", dosage: "10ml", frequency: "Thrice daily", duration: "7 days" },
      ],
      notes: "Rest well and stay hydrated. Contact if symptoms persist.",
    },
    {
      id: 2,
      doctorName: "Dr. Priya Singh",
      date: "2024-01-05",
      medicines: [
        { name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", duration: "30 days" },
        { name: "Calcium Tablets", dosage: "500mg", frequency: "Twice daily", duration: "30 days" },
      ],
      notes: "Maintain a balanced diet with dairy products.",
    },
  ])

  const [reminders] = useState([
    { medicine: "Paracetamol", nextDue: "2024-01-15 2:00 PM", status: "Upcoming" },
    { medicine: "Vitamin D3", nextDue: "2024-01-15 8:00 AM", status: "Upcoming" },
  ])

  return (
    <div className="min-h-screen flex flex-col bg-neutral-light">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-3xl mb-2">Your Prescriptions</h1>
            <p className="text-gray-600">View and manage all your prescriptions and medication reminders</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {prescriptions.map((rx) => (
                <div key={rx.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="font-display text-lg font-bold">{rx.doctorName}</h2>
                      <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                        <Calendar size={14} /> {rx.date}
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                      <Download size={18} /> Download
                    </button>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Medicines</h3>
                    <div className="space-y-3">
                      {rx.medicines.map((med, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start gap-3">
                            <Pill className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{med.name}</p>
                              <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                                <p>Dosage: {med.dosage}</p>
                                <p>Frequency: {med.frequency}</p>
                                <p>Duration: {med.duration}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {rx.notes && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <span className="font-semibold">Notes:</span> {rx.notes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="font-display text-lg font-bold mb-4">Medication Reminders</h2>
                <div className="space-y-3">
                  {reminders.map((reminder, idx) => (
                    <div key={idx} className="border-l-4 border-primary-500 bg-primary-50 p-4 rounded">
                      <p className="font-semibold text-sm text-gray-900">{reminder.medicine}</p>
                      <p className="text-xs text-gray-600 mt-1">Next Dose: {reminder.nextDue}</p>
                      <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-primary-200 text-primary-800 rounded">
                        {reminder.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 mt-6">
                <h3 className="font-semibold mb-2 text-gray-900">Prescription Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Always take medicines as prescribed</li>
                  <li>• Set daily reminders for medications</li>
                  <li>• Avoid missing doses</li>
                  <li>• Consult doctor before stopping medicine</li>
                  <li>• Store medicines in cool, dry place</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PrescriptionPage
