import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Healthcare at Your Fingertips</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Connect with qualified doctors, get AI-powered symptom analysis, and receive prescriptions—all from your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition"
          >
            See Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
