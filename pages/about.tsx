// pages/about.tsx
import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us | Vantyx.ai</title>
        <meta name="description" content="Learn more about the story behind Vantyx.ai and the person building it." />
      </Head>

      <main className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-[#F5F3EF] to-[#f0f2ff] text-[#1F2937] font-outfit">
        <section className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
            Meet the Human Behind the Tech
          </h1>
          <p className="text-lg mb-12 text-gray-700">
            Vantyx is built by someone who gets it — the overwhelm, the curiosity, the need to just make something work. 
            I’m not here to complicate your life. I’m here to simplify it with tools that actually help.
          </p>
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left" data-aos="zoom-in-up" data-aos-delay="100">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#C2410C]">Hey, I’m Ty 👋</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              I’m a builder, strategist, and problem-solver at heart. With a background that blends tech, creativity, and service — 
              I launched Vantyx to help people like me bring their ideas to life with a little help from AI.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              I care about clean systems, clarity, and building things that feel real — not robotic. If I can take the weight off your shoulders 
              and put something smart and functional in its place, we both win.
            </p>
          </div>

          <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Random things I love:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Clean design and funny jokes</li>
              <li>Early mornings and late night ideas</li>
              <li>Helping people feel less overwhelmed</li>
              <li>Systems that actually make sense</li>
              <li>Giving things personality — like this site</li>
            </ul>
          </div>
        </section>

        <section className="text-center mt-24" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">This isn’t some big agency. It’s personal.</h2>
          <p className="text-base text-gray-700 max-w-xl mx-auto mb-6">
            You’ll get me in your inbox, your corner, and your strategy calls. That’s the vibe.
            Let’s build something that’s actually useful — and actually fun.
          </p>
          <a
            href="https://calendly.com/vantyx-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C2410C] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Book a Free Discovery Call
          </a>
        </section>
      </main>
    </Layout>
  );
}