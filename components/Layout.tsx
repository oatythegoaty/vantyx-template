import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold text-[#C2410C]">
            Vantyx.ai
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/services" className="hover:text-[#C2410C] transition">Services</Link>
            <Link href="/pricing" className="hover:text-[#C2410C] transition">Pricing</Link>
            <Link href="/about" className="hover:text-[#C2410C] transition">About Us</Link>
            <Link href="/contact" className="hover:text-[#C2410C] transition">Contact</Link>
          </div>

          <button
            className="md:hidden text-[#C2410C] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-center">
            <Link href="/services" className="block hover:text-[#C2410C] transition">Services</Link>
            <Link href="/pricing" className="block hover:text-[#C2410C] transition">Pricing</Link>
            <Link href="/about" className="block hover:text-[#C2410C] transition">About Us</Link>
            <Link href="/contact" className="block hover:text-[#C2410C] transition">Contact</Link>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="min-h-screen px-6 text-[#1F2937] font-outfit bg-gradient-to-br from-white via-[#F5F3EF] to-[#f0f2ff] pb-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}