export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">MediConnect</h3>
            <p className="text-sm">Making healthcare accessible to everyone, everywhere.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2025 MediConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
