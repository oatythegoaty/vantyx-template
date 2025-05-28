import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>Pricing | Vantyx.ai</title>
        <meta name="description" content="See pricing for our AI-powered services. Flat, fair, and built to grow with you." />
      </Head>

      <main className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-[#F5F3EF] to-[#f0f2ff] text-[#1F2937] font-outfit text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg mb-16 max-w-xl mx-auto text-gray-700">
          No surprise fees. Just clean, flexible options that scale with your goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition scale-105 border-2 border-[#C2410C]">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-2">Monthly Plan</h2>
            <p className="text-gray-600 mb-4">Everything you need to build and grow your digital presence.</p>
            <p className="text-3xl font-bold mb-4">$235/mo</p>
            <ul className="text-sm text-left text-gray-700 list-disc pl-5 space-y-2 mb-6">
              <li>Website creation (1–5 pages)</li>
              <li>Advanced SEO setup</li>
              <li>Social media automation setup</li>
              <li>Ongoing support + unlimited edits</li>
              <li>Monitoring + optimization</li>
            </ul>
            <Link href="/contact" className="inline-block bg-[#1F2937] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
              Get Started
            </Link>
          </div>

          {/* AI Education */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-[#C2410C] mb-2">AI Education</h2>
            <p className="text-gray-600 mb-4">Fun, hands-on sessions to get you comfortable with AI tools.</p>
            <p className="text-3xl font-bold mb-4">$50 <span className="text-sm font-normal">per session</span></p>
            <ul className="text-sm text-left text-gray-700 list-disc pl-5 space-y-2 mb-6">
              <li>Live 1:1 Zoom or Google Meet session (45 min)</li>
              <li>Beginner-friendly walkthroughs</li>
              <li>Real-world tools & use cases</li>
              <li>Interactive and supportive format</li>
            </ul>
            <Link href="/contact" className="inline-block bg-[#C2410C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
              Book a Session
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <p className="text-lg mb-4">Need something more custom?</p>
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