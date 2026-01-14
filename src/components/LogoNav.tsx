'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LogoNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-2xl border border-white/20 z-50 max-w-4xl w-[95vw]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#facc15] to-yellow-400 bg-clip-text text-transparent">
            KV
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">Home</Link>
            <Link href="/about" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">About</Link>
            <Link href="/services" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">Services</Link>
            <Link href="/products" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">Store</Link>
            <Link href="/blog" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">Blog</Link>
            <Link href="/news" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">News</Link>
            <Link href="/contact" className="text-white hover:text-[#facc15] px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-all">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-[#facc15] p-2 rounded-xl hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}
      {isOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-slate-900/98 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl z-50 py-6 px-4 max-h-[60vh] overflow-y-auto">
          <div className="space-y-3">
            <Link href="/" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              🏠 Home
            </Link>
            <Link href="/about" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              👤 About
            </Link>
            <Link href="/services" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              ⚡ Services
            </Link>
            <Link href="/products" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              🛒 Store
            </Link>
            <Link href="/blog" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              📝 Blog
            </Link>
            <Link href="/news" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              📰 News
            </Link>
            <Link href="/contact" className="block text-white hover:text-[#facc15] hover:bg-white/10 px-6 py-4 rounded-xl text-lg font-semibold transition-all" onClick={() => setIsOpen(false)}>
              📞 Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
