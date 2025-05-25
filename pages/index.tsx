import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      <main className="min-h-screen bg-white px-6 text-center text-gray-900">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center pt-24 pb-16">
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
        <section className="mt-24 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Help You Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3 px-4">
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 ease-in-out hover:scale-105 animate-fade-up delay-100">
              <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Launch</h3>
              <p>We build stunning, AI-integrated websites and handle the entire setup — domain, hosting, analytics, and SEO.</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 ease-in-out hover:scale-105 animate-fade-up delay-200">
              <h3 className="text-xl font-semibold text-[#2C3EFA] mb-2">Grow</h3>
              <p>We manage your brand, automate your socials, and make sure your content strategy actually works.</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 ease-in-out hover:scale-105 animate-fade-up delay-300">
              <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Evolve</h3>
              <p>Want custom AI agents or smart workflows? We bring automation into your business without the buzzwords.</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Vantyx Exists</h2>
          <p className="text-lg leading-relaxed">
            Vantyx was built on one core belief — that AI should make your life easier, not more confusing. I'm here to bridge the gap between smart technology and real people. Whether you're a small business owner, creator, or just curious about AI, I'm making tools that are practical, personal, and built with intention.
          </p>
        </section>

        {/* About You */}
        <section className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
          <p className="text-lg leading-relaxed">
            I’m Ty — big dude, big thinker, and a builder by nature. I’ve worked across tech and service roles, but helping people feel empowered by AI is what really clicks for me. I like systems, good design, and getting things done without the extra fluff. Vantyx is my way of sharing that with the world.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-32 mb-24 max-w-xl mx-auto bg-[#F9F9F9] p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Let’s Build Something Smart Together</h2>
          <p className="text-base mb-6">
            Whether you’re just starting out or looking to level up, I’ve got tools that can make your life a lot easier. Let’s talk and see what’s possible.
          </p>
          <button className="px-6 py-3 bg-[#2C3EFA] text-white rounded-full hover:opacity-90 transition duration-300">
            Schedule a Discovery Call
          </button>
        </section>
      </main>
    </>
  );
}