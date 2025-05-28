import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Vantyx.ai</title>
        <meta name="description" content="Let’s talk. Reach out to Vantyx.ai for project ideas, questions, or collaboration." />
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

        <section className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="100">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const name = (form.querySelector('#name') as HTMLInputElement).value;
              const email = (form.querySelector('#email') as HTMLInputElement).value;
              const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
              });

              if (res.ok) {
                alert('Message sent successfully!');
                form.reset();
              } else {
                alert('Something went wrong. Please try again later.');
              }
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C2410C] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="text-center mt-16 text-sm text-gray-600" data-aos="fade-up" data-aos-delay="200">
          <p>Or reach out directly at <a href="mailto:hello@vantyx.ai" className="text-[#C2410C] underline">hello@vantyx.ai</a></p>
        </section>
      </main>
    </Layout>
  );
}