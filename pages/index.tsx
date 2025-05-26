import Head from 'next/head';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold text-[#C2410C]">
  Vantyx.ai
</Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/services" className="transition duration-300 hover:text-[#C2410C] hover:scale-105">
  Services
</Link>
            <a href="#pricing" className="transition duration-300 hover:text-[#C2410C] hover:scale-105">Pricing</a>
            <a href="#about" className="transition duration-300 hover:text-[#C2410C] hover:scale-105">About Us</a>
            <a href="#contact" className="transition duration-300 hover:text-[#C2410C] hover:scale-105">Contact Us</a>
          </div>

          <button
            className="md:hidden text-[#C2410C] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center">
            <Link href="/services" className="transition duration-300 hover:text-[#C2410C] hover:scale-105">
  Services
</Link>
            <a href="#pricing" className="block transition duration-300 hover:text-[#C2410C] hover:scale-105">Pricing</a>
            <a href="#about" className="block transition duration-300 hover:text-[#C2410C] hover:scale-105">About Us</a>
            <a href="#contact" className="block transition duration-300 hover:text-[#C2410C] hover:scale-105">Contact Us</a>
          </div>
        )}
      </nav>

      <main className="min-h-screen px-6 text-[#1F2937] font-outfit bg-gradient-to-br from-white via-[#F5F3EF] to-[#f0f2ff]">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center pt-24 pb-16" data-aos="fade-up">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="w-full h-full opacity-10 animate-fade-in"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#C2410C" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
            Welcome to Vantyx.ai
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            An AI consulting firm that helps you simplify the complex, automate the everyday, and stay way ahead of the curve.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#C2410C] text-white rounded-full shadow-md hover:opacity-90 transition duration-300">
            Book a Free Discovery Call
          </button>
        </section> 

        {/* What We Help You Do */}
        <section className="mt-24 w-full max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Help You Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3 px-4">
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-[#C2410C] mb-2">Launch</h3>
              <p>We build sleek, AI-ready websites and handle the full setup — domain, hosting, SEO, analytics, and automation workflows.</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Grow</h3>
              <p>From content strategy to automated social posts, we help you create a presence that runs smoother — and smarter.</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-[#C2410C] mb-2">Evolve</h3>
              <p>Learn how to actually use AI. From agent creation to hands-on education, we’ll teach you how to make tech work for you.</p>
            </div>
          </div>
        </section>

        {/* Diagonal Section Divider */}
        <div className="-mt-1">
          <svg viewBox="0 0 1440 100" className="w-full -mb-1" preserveAspectRatio="none">
            <path fill="#D1D5DB" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>


          {/* Mission */}
          <section id="mission" className="mt-20 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Why Vantyx Exists</h2>
          <p className="text-lg leading-relaxed">
            Vantyx was built on one core belief — that AI should make your life easier, not more confusing.
            I'm here to bridge the gap between smart technology and real people. Whether you're a small business owner, creator, or just curious about AI,
            I'm making tools that are practical, personal, and built with intention.
          </p>
        </section>

        {/* About */}
        <section id="about" className="mt-24 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-[#C2410C]">Meet the Founder</h2>
          <p className="text-lg leading-relaxed">
            I’m Ty — big dude, big thinker, and a builder by nature. I’ve worked across tech and service roles,
            but helping people feel empowered by AI is what really clicks for me.
            I like systems, good design, and getting things done without the extra fluff.
            Vantyx is my way of sharing that with the world.
          </p>
        </section>

        {/* CTA */}
        <section id="contact" className="mt-32 mb-24 max-w-6xl mx-auto px-6" data-aos="zoom-in-up">
          <div className="rounded-3xl bg-gradient-to-r from-[#C2410C] to-[#1F2937] p-10 md:flex items-center justify-between shadow-lg">
            <div className="text-left text-white mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-3">Let’s Build Something Smart Together</h2>
              <p className="text-lg max-w-xl">
                Whether you’re just starting out or looking to level up, I’ve got tools that make life easier and work smarter. Let's talk possibilities.
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="inline-block bg-white text-[#C2410C] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
              >
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </section>
      
      </main>
    </>
  );
}