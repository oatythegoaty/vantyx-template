// pages/contact.tsx
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Vantyx.ai</title>
        <meta
          name="description"
          content="Let’s talk. Reach out to Vantyx.ai for project ideas, questions, or collaboration."
        />
      </Head>

      <main className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-[#F5F3EF] to-[#f0f2ff] text-[#1F2937] font-outfit">
        <section className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#1F2937]">
            Let’s Talk
          </h1>
          <p className="text-lg mb-12 text-gray-700">
            Got a project in mind? Have questions? Just want to say hey? Use the form below or email me directly.
          </p>
        </section>

        <section
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C2410C] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-center text-gray-600 mt-2">{status}</p>}
          </form>
        </section>

        <section className="text-center mt-16 text-sm text-gray-600" data-aos="fade-up" data-aos-delay="200">
          <p>
            Or reach out directly at{' '}
            <a href="mailto:vantyx.ai@gmail.com" className="text-[#C2410C] underline">
              vantyx.ai@gmail.com
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}