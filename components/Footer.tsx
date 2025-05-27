// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Vantyx.ai — All rights reserved.</p>
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/pricing" className="hover:text-white transition">Pricing</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}