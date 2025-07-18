// pages/index.tsx
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      {/* Hero */}
      <section className="pt-24 pb-16 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
          Welcome to Vantyx.ai
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          An AI consulting firm that helps you simplify the complex, automate the everyday, and stay way ahead of the curve.
        </p>
        <a
          href="https://calendly.com/vantyx-ai/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-6 py-3 bg-[#C2410C] text-white rounded-full shadow-md hover:opacity-90 transition duration-300"
        >
          Book a Free Discovery Call
        </a>
      </section>

      {/* What We Help You Do */}
      <section className="mt-24 w-full max-w-6xl mx-auto text-center px-4" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Help You Do</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Grow with Automation</h3>
            <p>
              From scheduling content to automating repetitive tasks, I help you create smoother workflows with tools that make sense.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-[#C2410C] mb-2">Learn AI with Confidence</h3>
            <p>
              From hands-on education to real-world examples, my sessions help you understand and actually use AI in your life or business.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 100" className="w-full -mb-1" preserveAspectRatio="none">
          <path fill="#D1D5DB" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Mission */}
      <section className="mt-20 max-w-3xl mx-auto text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Why Vantyx Exists</h2>
        <p className="text-lg leading-relaxed">
          Vantyx was built on one core belief — that AI should make your life easier, not more confusing.
          I focus on making smart tools approachable and useful. Whether you're curious about AI, want to automate your workflow, or just need a better way to understand what's possible — I'll help you figure it out.
        </p>
      </section>

      {/* About */}
      <section className="mt-24 max-w-3xl mx-auto text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-[#C2410C]">Meet the Founder</h2>
        <p className="text-lg leading-relaxed">
          I’m Ty — big dude, big thinker, and a builder by nature. I’ve worked across tech and service roles,
          but helping people feel empowered by AI is what really clicks for me.
          I like systems, good design, and getting things done without the extra fluff.
          Vantyx is my way of sharing that with the world.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-32 mb-24 max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
        <div className="rounded-3xl bg-gradient-to-r from-[#C2410C] to-[#1F2937] p-10 md:flex items-center justify-between shadow-lg text-white">
          <div className="mb-6 md:mb-0 text-left">
            <h2 className="text-3xl font-bold mb-3">Let’s Explore AI Together</h2>
            <p className="text-lg max-w-xl">
              Curious about what AI can do for you? My sessions break down the complicated stuff in a way that actually makes sense. Let's chat and build something smart — no jargon, no pressure.
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://calendly.com/vantyx-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#C2410C] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}