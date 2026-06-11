import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page Not Found | Sanchay Kathak Nrutya Academy</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 100%)' }}
      >
        <div className="mb-6 text-8xl select-none">🕉️</div>

        <h1 className="text-7xl font-extrabold text-[#C73664] mb-2">404</h1>
        <h2 className="text-2xl font-bold text-[#0C1B33] mb-4">
          This page has taken a different step
        </h2>
        <p className="text-[#2E2E2E] max-w-md mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Let's guide you back to the rhythm.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-8 py-3 rounded-xl font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: 'linear-gradient(90deg, #C73664, #B300B3)' }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl font-bold text-[#C73664] border-2 border-[#C73664] transition-all duration-300 hover:bg-[#C73664] hover:text-white hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-16 flex gap-8 text-[#C73664]/40 text-4xl select-none">
          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>♪</span>
          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>♫</span>
          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>♪</span>
        </div>
      </div>
    </Layout>
  );
}
