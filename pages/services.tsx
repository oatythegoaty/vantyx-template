import Head from 'next/head';
import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Our Services | Vantyx.ai</title>
        <meta name="description" content="Explore what Vantyx.ai offers to help you launch, grow, and automate with AI." />
      </Head>

      <div className="max-w-5xl mx-auto text-center pt-16">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
          What We Offer
        </h1>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Whether you're just getting started or looking to scale smart, here’s how we help bring AI into your world — without making it weird.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Website Creation */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-[#C2410C]">Website Creation</h2>
          <p className="text-base mb-4">
            From layout to launch — we design responsive, AI-ready sites that reflect your brand and get you noticed.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Custom design</li>
            <li>SEO-optimized</li>
            <li>Domain + hosting support</li>
          </ul>
        </div>

        {/* Social & Branding */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-[#1F2937]">Social & Branding</h2>
          <p className="text-base mb-4">
            We create consistent branding and automated social strategies that save time and boost engagement.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Content templates & assets</li>
            <li>Scheduled posting automation</li>
            <li>Hashtag & audience strategy</li>
          </ul>
        </div>

        {/* AI Agent Creation */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-[#C2410C]">AI Agent Creation</h2>
          <p className="text-base mb-4">
            Need a custom AI chatbot, voice agent, or automation tool? We build agents that feel helpful — not robotic.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Custom-trained agents</li>
            <li>Voice or text interfaces</li>
            <li>Integrations with tools you use</li>
          </ul>
        </div>

        {/* AI Education */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-[#1F2937]">AI Education</h2>
          <p className="text-base mb-4">
            Whether it's a team workshop or a 1:1 crash course — we break down AI in plain language so you can actually use it.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            <li>Live walkthroughs or videos</li>
            <li>Team training decks</li>
            <li>Ongoing support and updates</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-20 mb-10">
        <a
          href="https://calendly.com/vantyx-ai/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C2410C] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
        >
          Schedule a Discovery Call
        </a>
      </div>
    </Layout>
  );
}