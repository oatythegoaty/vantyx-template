import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      <main className="min-h-screen bg-white px-6 text-center text-gray-900 font-outfit">
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
              <p>We build stunning, AI-integrated websites and handle the entire setup — domain, hosting, analytics, and SEO.</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-[#2C3EFA] mb-2">Grow</h3>
              <p>We manage your brand, automate your socials, and make sure your content strategy actually works.</p>
            </div>
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Evolve</h3>
              <p>Want custom AI agents or smart workflows? We bring automation into your business without the buzzwords.</p>
            </div>
          </div>
        </section>

        {/* Why Vantyx Exists */}
        <section className="mt-32 max-w-4xl mx-auto px-6 py-16 bg-gradient-to-br from-[#FAFAFF] to-white rounded-3xl shadow-sm" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#2C3EFA] mb-4">Why Vantyx Exists</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I built Vantyx because AI shouldn't be complicated or out of reach. This is about making smart tools for real people. Whether you're running a business, building something new, or just curious — I’m here to help you level up without all the hype.
          </p>
        </section>

        {/* Meet the Founder */}
        <section className="mt-24 max-w-4xl mx-auto px-6 py-16 bg-[#F0F4FF] rounded-3xl shadow-sm" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#CA3CFF] mb-4">Meet the Founder</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I’m Ty — big guy, big thinker. I’ve worked in tech, support, and everywhere in between. But helping people feel confident using AI? That’s my lane. I build systems that work, websites that pop, and automations that actually help. No fluff. No overwhelm. Just solid results with some style.
          </p>
        </section>

      {/* CTA */}
<section className="mt-32 mb-24 max-w-6xl mx-auto px-6" data-aos="zoom-in-up">
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