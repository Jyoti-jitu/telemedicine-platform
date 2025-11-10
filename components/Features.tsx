export default function Features() {
  const features = [
    {
      icon: "👨‍⚕️",
      title: "Connect with Doctors",
      description: "Chat, voice, or video call with verified healthcare professionals",
    },
    {
      icon: "🤖",
      title: "AI Symptom Analysis",
      description: "Get preliminary health insights before consulting a doctor",
    },
    {
      icon: "💊",
      title: "Digital Prescriptions",
      description: "Receive, manage, and refill prescriptions electronically",
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description: "Never miss medication with personalized reminders",
    },
    {
      icon: "🌍",
      title: "Local Language Support",
      description: "Available in Hindi, Telugu, Tamil, Kannada, and more",
    },
    {
      icon: "🛡️",
      title: "Secure & Private",
      description: "Your health data is encrypted and protected",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose MediConnect?</h2>
          <p className="text-lg text-gray-600">Everything you need for better rural healthcare</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
