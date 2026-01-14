'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LogoNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-navy via-slate-800 to-navy backdrop-blur-xl rounded-2xl px-4 py-2 md:px-6 md:py-3 shadow-2xl border border-white/20 z-50 max-w-2xl w-[90vw]">
      <div className="flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-thrive-gold via-thrive-orange to-thrive-red bg-clip-text text-transparent">
          KV
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 text-sm">
          <Link href="/" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">Home</Link>
          <Link href="/about" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">About</Link>
          <Link href="/services" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">Services</Link>
          <Link href="/products" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">Store</Link>
          <Link href="/blog" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">Blog</Link>
          <Link href="/news" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">News</Link>
          <Link href="/contact" className="text-white hover:text-thrive-gold transition-colors px-2 py-1 rounded hover:bg-white/10">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-3xl font-bold text-white hover:text-thrive-gold"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/20">
          <div className="grid grid-cols-2 gap-2">
            <Link href="/" className="text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold">Home</Link>
            <Link href="/about" className="text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold">About</Link>
            <Link href="/services" className="text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold">Services</Link>
            <Link href="/products" className="text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold">Store</Link>
            <Link href="/blog" className="text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold">Blog</Link>
            <Link href="/news" className="text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold">News</Link>
            <Link href="/contact" className="flex-1 text-center text-white hover:text-thrive-gold py-3 px-2 rounded-xl hover:bg-white/10 font-semibold block md:hidden">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
