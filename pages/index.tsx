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
      </main>
    </>
  );
}