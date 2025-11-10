export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your account in minutes",
    },
    {
      number: 2,
      title: "Describe Symptoms",
      description: "Tell us what you're experiencing",
    },
    {
      number: 3,
      title: "Get AI Analysis",
      description: "Receive preliminary health insights",
    },
    {
      number: 4,
      title: "Consult Doctor",
      description: "Connect with a verified doctor",
    },
  ]

  return (
    <section className="py-20 px-4 bg-emerald-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-4 border-emerald-600">
                <span className="text-2xl font-bold text-emerald-600">{step.number}</span>
              </div>
              <h3 className="font-semibold text-center text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-center text-gray-600">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-12 h-0.5 bg-emerald-300 -translate-y-1/2 translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
