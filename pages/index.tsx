import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA3CFF] to-[#2C3EFA]">
          Welcome to Vantyx.ai
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
          An AI consulting firm that helps you simplify the complex, automate the everyday, and stay way ahead of the curve.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#CA3CFF] text-white rounded-full shadow-md hover:opacity-90 transition duration-300">
          Book a Free Discovery Call
        </button>

        <section className="mt-24 w-full max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What We Help You Do
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 ease-in-out hover:scale-105 animate-fade-up delay-100">
              <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Launch</h3>
              <p className="text-gray-700">We build stunning, AI-integrated websites and handle the entire setup — domain, hosting, analytics, and SEO.</p>
            </div>

            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 ease-in-out hover:scale-105 animate-fade-up delay-200">
              <h3 className="text-xl font-semibold text-[#2C3EFA] mb-2">Grow</h3>
              <p className="text-gray-700">We manage your brand, automate your socials, and make sure your content strategy actually works.</p>
            </div>

            <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition transform duration-700 ease-in-out hover:scale-105 animate-fade-up delay-300">
              <h3 className="text-xl font-semibold text-[#CA3CFF] mb-2">Evolve</h3>
              <p className="text-gray-700">Want custom AI agents or smart workflows? We bring automation into your business without the buzzwords.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}