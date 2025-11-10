import { Link } from "react-router-dom"
import { Calendar, FileText, Bell, Clock } from "lucide-react"

export default function PatientDashboard({ user }) {
  if (!user || user.role !== "patient") {
    return <div className="max-w-7xl mx-auto px-4 py-8">Please log in as a patient.</div>
  }

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Rajesh Kumar", time: "2:30 PM Tomorrow", type: "Chat Consultation" },
    { id: 2, doctor: "Dr. Priya Singh", time: "10:00 AM Friday", type: "Video Call" },
  ]

  const prescriptions = [
    { id: 1, medication: "Aspirin 500mg", dosage: "Twice daily", doctor: "Dr. Rajesh Kumar", date: "2024-11-05" },
    { id: 2, medication: "Vitamin D", dosage: "Once daily", doctor: "Dr. Priya Singh", date: "2024-11-03" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary mb-2">Welcome back!</h1>
        <p className="text-neutral-600">Manage your health and appointments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <Calendar className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Upcoming Appointments</p>
          <p className="text-3xl font-bold text-secondary">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <FileText className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Active Prescriptions</p>
          <p className="text-3xl font-bold text-secondary">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <Bell className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Pending Reminders</p>
          <p className="text-3xl font-bold text-secondary">1</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <Clock className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Health Score</p>
          <p className="text-3xl font-bold text-secondary">82%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <h2 className="text-2xl font-bold text-secondary mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold text-secondary">{apt.doctor}</h3>
                    <p className="text-neutral-600 text-sm">{apt.type}</p>
                    <p className="text-neutral-500 text-sm flex items-center gap-2 mt-1">
                      <Clock size={16} /> {apt.time}
                    </p>
                  </div>
                  <Link
                    to={`/chat/${apt.id}`}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition"
                  >
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-bold text-secondary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/patient/symptoms"
                className="block w-full px-4 py-3 bg-primary text-white rounded-lg text-center font-semibold hover:bg-primary-dark transition"
              >
                Analyze Symptoms
              </Link>
              <button className="block w-full px-4 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary-light transition">
                Find a Doctor
              </button>
              <button className="block w-full px-4 py-3 border border-neutral-300 text-secondary rounded-lg font-semibold hover:bg-neutral-100 transition">
                View Medical History
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
        <h2 className="text-2xl font-bold text-secondary mb-6">Active Prescriptions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-semibold text-neutral-700">Medication</th>
                <th className="text-left py-3 px-4 font-semibold text-neutral-700">Dosage</th>
                <th className="text-left py-3 px-4 font-semibold text-neutral-700">Doctor</th>
                <th className="text-left py-3 px-4 font-semibold text-neutral-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((rx) => (
                <tr key={rx.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-3 px-4 font-semibold text-secondary">{rx.medication}</td>
                  <td className="py-3 px-4 text-neutral-600">{rx.dosage}</td>
                  <td className="py-3 px-4 text-neutral-600">{rx.doctor}</td>
                  <td className="py-3 px-4 text-neutral-600">{rx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
