import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      {/* Hero */}
      <section className="relative pt-24 pb-16 text-center overflow-hidden" data-aos="fade-up">
        {/* Floating Dot Background */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-full opacity-10"
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

        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
          Welcome to Vantyx.ai
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          An AI consulting firm that helps you simplify the complex, automate the everyday, and stay way ahead of the curve.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#C2410C] text-white rounded-full shadow-md hover:opacity-90 transition duration-300">
          Book a Free Discovery Call
        </button>
      </section>

      {/* What We Help You Do */}
      <section className="mt-24 w-full max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Help You Do</h2>
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

      {/* Section Divider (Wave) */}
      <div className="w-full overflow-hidden py-12 -mt-1" data-aos="fade-up">
        <svg viewBox="0 0 1440 100" className="w-full -mb-1" preserveAspectRatio="none">
          <path fill="#D1D5DB" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Mission */}
      <section id="mission" className="mt-20 max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Why Vantyx Exists</h2>
        <p className="text-lg leading-relaxed">
          Vantyx was built on one core belief — that AI should make your life easier, not more confusing.
          I'm here to bridge the gap between smart technology and real people. Whether you're a small business owner, creator, or just curious about AI,
          I'm making tools that are practical, personal, and built with intention.
        </p>
      </section>

      {/* About */}
      <section id="about" className="mt-24 max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-[#C2410C]">Meet the Founder</h2>
        <p className="text-lg leading-relaxed">
          I’m Ty — big dude, big thinker, and a builder by nature. I’ve worked across tech and service roles,
          but helping people feel empowered by AI is what really clicks for me.
          I like systems, good design, and getting things done without the extra fluff.
          Vantyx is my way of sharing that with the world.
        </p>
      </section>

      {/* CTA */}
      <section id="contact" className="mt-32 mb-24 max-w-6xl mx-auto px-6 text-center" data-aos="zoom-in-up">
        <div className="rounded-3xl bg-gradient-to-r from-[#C2410C] to-[#1F2937] p-10 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-3">Let’s Build Something Smart Together</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Whether you’re just starting out or looking to level up, I’ve got tools that make life easier and work smarter. Let's talk possibilities.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-[#C2410C] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Schedule a Discovery Call
          </a>
        </div>
      </section>
    </Layout>
  );
}