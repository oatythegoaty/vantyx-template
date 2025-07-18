import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Pricing | Vantyx.ai</title>
        <meta name="description" content="Flat, fair pricing for AI education, automation, and support — without the fine print." />
      </Head>

      <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-white via-[#F5F3EF] to-[#f0f2ff] text-[#1F2937] font-outfit text-center">
        <h1 data-aos="fade-up" className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
          Simple, Transparent Pricing
        </h1>
        <p data-aos="fade-up" className="text-lg mb-16 max-w-xl mx-auto text-gray-700">
          We like to keep things simple — and human. No shady fees. No techy confusion. Just honest pricing for real results.
        </p>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto justify-center">
          {/* AI Education */}
          <div data-aos="zoom-in" className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition border-2 border-[#1F2937]">
            <h2 className="text-2xl font-bold text-[#C2410C] mb-2">AI Education</h2>
            <p className="text-gray-700 mb-4">Learn how to actually use AI — in real life. These hands-on sessions are designed for beginners and curious minds alike.</p>
            <p className="text-3xl font-bold mb-4">$49 <span className="text-sm font-normal text-gray-700">per session</span></p>
            <ul className="text-sm text-left text-gray-700 list-disc pl-5 space-y-2 mb-6">
              <li>Live 1:1 Zoom or Google Meet session (45 min)</li>
              <li>Beginner-friendly walkthroughs</li>
              <li>Real-world tools & use cases</li>
              <li>Interactive and supportive format</li>
            </ul>
            <div className="text-center">
              <a
                href="https://calendly.com/vantyx-ai/ai-education"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C2410C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="text-center mt-16">
          <p className="text-lg mb-2">Still figuring things out?</p>
          <p className="text-base text-gray-700 mb-4">
            Book a free 30-minute call. We’ll talk through your ideas and see what makes the most sense — no pressure, no weird sales stuff.
          </p>
          <a
            href="https://calendly.com/vantyx-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C2410C] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Book a Free Consultation
          </a>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center mt-12">
          <p className="text-lg mb-4">Need something more custom?</p>
          <p className="text-base text-gray-700 mb-4 max-w-xl mx-auto">
            Whether you’re looking for AI education sessions, social media management, or custom AI agent ideas — we’re open to building what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1F2937] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Let’s Talk About It
          </Link>
        </div>
      </main>
    </Layout>
  );
}