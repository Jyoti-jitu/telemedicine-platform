"use client"

import { useState } from "react"
import { Brain, Send } from "lucide-react"

export default function SymptomAnalyzer({ user }) {
  const [symptoms, setSymptoms] = useState("")
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return

    setLoading(true)
    // Simulated AI analysis - replace with actual API call
    setTimeout(() => {
      setAnalysis({
        severity: "Moderate",
        commonCauses: ["Common Cold", "Flu", "Allergies"],
        recommendations: [
          "Stay hydrated and get adequate rest",
          "Monitor your temperature regularly",
          "Avoid strenuous activities for 2-3 days",
          "Consult with a doctor if symptoms persist",
        ],
        urgency: "Non-urgent - Schedule appointment within 24-48 hours",
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-secondary mb-2 flex items-center gap-3">
          <Brain className="w-10 h-10 text-primary" />
          AI Symptom Analyzer
        </h1>
        <p className="text-neutral-600">Describe your symptoms and get AI-powered health insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <label className="block text-sm font-semibold text-secondary mb-3">Describe Your Symptoms</label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Example: I have been experiencing a headache, sore throat, and mild fever for the past 2 days. The headache is worse in the morning..."
              className="w-full h-32 p-4 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light resize-none"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !symptoms.trim()}
              className="mt-4 w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {loading ? "Analyzing..." : "Analyze Symptoms"}
            </button>
          </div>

          {analysis && (
            <div className="mt-8 bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-bold text-secondary mb-6">Analysis Results</h2>

              <div className="mb-8 p-4 bg-primary-light rounded-lg border border-primary">
                <p className="text-sm text-neutral-700 mb-2">Severity Assessment</p>
                <p className="text-2xl font-bold text-primary-dark">{analysis.severity}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-secondary mb-4">Possible Causes</h3>
                <ul className="space-y-2">
                  {analysis.commonCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-neutral-700">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-secondary mb-4">Recommended Actions</h3>
                <ul className="space-y-2">
                  {analysis.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-neutral-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border border-accent">
                <p className="text-sm font-semibold text-neutral-900 mb-1">Urgency Level</p>
                <p className="text-neutral-700">{analysis.urgency}</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-secondary mb-4">Tips for Better Results</h3>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">1.</span>
                <span>Be as specific as possible about your symptoms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">2.</span>
                <span>Mention when symptoms started</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">3.</span>
                <span>Include any relevant medical history</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">4.</span>
                <span>Mention any medications you're taking</span>
              </li>
            </ul>
            <p className="text-xs text-neutral-500 mt-6 p-4 bg-neutral-50 rounded border border-neutral-200">
              This analysis is for informational purposes only and should not replace professional medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
