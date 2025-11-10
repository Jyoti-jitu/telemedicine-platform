import { Link } from "react-router-dom"
import { Heart, Zap, Globe, Shield } from "lucide-react"

export default function Landing() {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-balance">
            Healthcare Access for Rural Communities
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto text-pretty">
            Connect with experienced doctors, get AI-powered symptom analysis, and manage your health from anywhere with
            TelaHealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/patient/dashboard"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Start as Patient
            </Link>
            <Link
              to="/doctor/dashboard"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary-light transition"
            >
              Join as Doctor
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <Heart className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Symptom Analysis</h3>
            <p className="text-neutral-600">Get instant AI-powered health insights before connecting with a doctor.</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Connections</h3>
            <p className="text-neutral-600">Connect with qualified doctors within minutes through chat or video.</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <Globe className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Local Language Support</h3>
            <p className="text-neutral-600">Available in multiple local languages for better understanding.</p>
          </div>
          <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-neutral-600">Your medical data is encrypted and protected at all times.</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-secondary">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Describe Your Symptoms</h4>
                    <p className="text-neutral-600">Tell our AI about your symptoms and health concerns.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Get AI Analysis</h4>
                    <p className="text-neutral-600">Receive preliminary analysis to help guide your consultation.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Connect with Doctor</h4>
                    <p className="text-neutral-600">Chat or video call with a qualified doctor instantly.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Get Prescription & Care Plan</h4>
                    <p className="text-neutral-600">
                      Receive digital prescriptions and reminders for your medications.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-12 text-white text-center">
              <p className="text-6xl mb-4">📱</p>
              <p className="text-lg font-semibold">Available on all devices</p>
              <p className="text-primary-light mt-4">
                Works seamlessly on phones, tablets, and desktops with low bandwidth support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
