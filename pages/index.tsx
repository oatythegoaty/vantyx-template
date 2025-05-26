import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
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
    <h1 className="text-xl font-bold text-[#CA3CFF]">Vantyx.ai</h1>
    
    <div className="hidden md:flex space-x-6">
      <a href="#mission" className="text-gray-700 hover:text-[#CA3CFF] font-medium transition">Mission</a>
      <a href="#about" className="text-gray-700 hover:text-[#CA3CFF] font-medium transition">About</a>
      <a href="#contact" className="text-gray-700 hover:text-[#CA3CFF] font-medium transition">Contact</a>
    </div>

    {/* Mobile Menu Button (non-functional for now) */}
    <button className="md:hidden text-[#2C3EFA] focus:outline-none">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>

      <main className="min-h-screen px-6 text-center text-gray-900 font-outfit bg-gradient-to-br from-white via-[#FAF9FF] to-[#f0f2ff]">

        {/* Hero */}
        <section className="flex flex-col items-center justify-center pt-24 pb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA3CFF] to-[#2C3EFA]">
            Welcome to Vantyx.ai
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            An AI consulting firm that helps you simplify the complex, automate the everyday, and stay way ahead of the curve.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#CA3CFF] text-white rounded-full shadow-md hover:opacity-90 transition duration-300">
            Book a Free Discovery Call
          </button>
        </section>

        {/* What We Do */}
        <section className="mt-24 w-full max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Help You Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3 px-4">
  <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="100">
    <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Launch</h3>
    <p>We build sleek, AI-ready websites and handle the full setup — domain, hosting, SEO, analytics, and automation workflows.</p>
  </div>
  <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="200">
    <h3 className="text-xl font-semibold text-[#2C3EFA] mb-2">Grow</h3>
    <p>From content strategy to automated social posts, we help you create a presence that runs smoother — and smarter.</p>
  </div>
  <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="300">
    <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Evolve</h3>
    <p>Learn how to actually use AI. From agent creation to hands-on education, we’ll teach you how to make tech work for you.</p>
  </div> 
          </div>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center py-12" data-aos="fade-up">
          <div className="w-20 h-1 bg-gradient-to-r from-[#CA3CFF] via-[#2C3EFA] to-[#CA3CFF] rounded-full opacity-70" />
        </div>

        {/* Mission */}
        <section id="mission" className="mt-20 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-[#2C3EFA]">Why Vantyx Exists</h2>
          <p className="text-lg leading-relaxed">
            Vantyx was built on one core belief — that AI should make your life easier, not more confusing.
            I'm here to bridge the gap between smart technology and real people. Whether you're a small business owner, creator, or just curious about AI,
            I'm making tools that are practical, personal, and built with intention.
          </p>
        </section>

        {/* About */}
        <section id="about" className="mt-24 max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-[#CA3CFF]">Meet the Founder</h2>
          <p className="text-lg leading-relaxed">
            I’m Ty — big dude, big thinker, and a builder by nature. I’ve worked across tech and service roles,
            but helping people feel empowered by AI is what really clicks for me.
            I like systems, good design, and getting things done without the extra fluff.
            Vantyx is my way of sharing that with the world.
          </p>
        </section>

        {/* CTA */}
        <section id="contact" className="mt-32 mb-24 max-w-6xl mx-auto px-6" data-aos="zoom-in-up">
  <div className="rounded-3xl bg-gradient-to-r from-[#CA3CFF] to-[#2C3EFA] p-10 md:flex items-center justify-between shadow-lg">
    <div className="text-left text-white mb-6 md:mb-0">
      <h2 className="text-3xl font-bold mb-3">Let’s Build Something Smart Together</h2>
      <p className="text-lg max-w-xl">
        Whether you’re just starting out or looking to level up, I’ve got tools that make life easier and work smarter. Let's talk possibilities.
      </p>
    </div>
    <div className="text-center">
      <a
        href="#"
        className="inline-block bg-white text-[#2C3EFA] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
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