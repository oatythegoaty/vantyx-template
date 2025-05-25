import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vantyx.ai</title>
        <meta name="description" content="Your AI-powered partner" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen bg-white text-black">
        <h1 className="text-4xl font-bold text-center text-[#CA3CFF]">Welcome to Vantyx.ai</h1>
        <p className="mt-4 text-lg text-center">Your AI consulting firm — powered by simplicity, built for scale.</p>
      </main>
    </>
  );
}