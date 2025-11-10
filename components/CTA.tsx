import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Control of Your Health?</h2>
        <p className="text-lg text-emerald-100 mb-8">
          Join thousands of rural patients already using MediConnect for better healthcare access
        </p>
        <Link
          href="/register"
          className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition"
        >
          Start Your Free Consultation
        </Link>
      </div>
    </section>
  )
}
