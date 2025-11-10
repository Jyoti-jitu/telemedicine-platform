import { Users, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function DoctorDashboard({ user }) {
  if (!user || user.role !== "doctor") {
    return <div className="max-w-7xl mx-auto px-4 py-8">Please log in as a doctor.</div>
  }

  const patientQueue = [
    { id: 1, name: "Rajesh Patel", condition: "Headache & Fever", waitTime: "5 min", priority: "Normal" },
    { id: 2, name: "Meera Singh", condition: "Cough & Sore Throat", waitTime: "12 min", priority: "High" },
    { id: 3, name: "Amit Kumar", condition: "General Checkup", waitTime: "18 min", priority: "Normal" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary mb-2">Doctor Dashboard</h1>
        <p className="text-neutral-600">Manage patients and consultations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <Users className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Patients Today</p>
          <p className="text-3xl font-bold text-secondary">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <Clock className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Avg Wait Time</p>
          <p className="text-3xl font-bold text-secondary">8 min</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <CheckCircle className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Completed</p>
          <p className="text-3xl font-bold text-secondary">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
          <AlertCircle className="w-8 h-8 text-primary mb-2" />
          <p className="text-neutral-600 text-sm">Urgent Cases</p>
          <p className="text-3xl font-bold text-secondary">1</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
        <h2 className="text-2xl font-bold text-secondary mb-6">Patient Queue</h2>
        <div className="space-y-3">
          {patientQueue.map((patient) => (
            <div
              key={patient.id}
              className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 flex justify-between items-center hover:bg-neutral-100 transition cursor-pointer"
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-secondary">{patient.name}</h3>
                <p className="text-neutral-600 text-sm">{patient.condition}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${patient.priority === "High" ? "text-red-600" : "text-neutral-600"}`}
                >
                  {patient.priority}
                </p>
                <p className="text-neutral-500 text-sm">Wait: {patient.waitTime}</p>
              </div>
              <button className="ml-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition">
                Consult
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
