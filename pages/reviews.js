import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';

const textReviews = [
  {
    id: 1,
    name: 'Meera Krishnan',
    role: 'International Performer',
    initial: 'M',
    accent: '#C73664',
    bg: 'from-[#C73664]/10 to-[#B300B3]/5',
    border: 'border-[#C73664]/20',
    rating: 5,
    text: 'Sanchay Kathak is not just a dance academy — it preserves the very essence of Kathak. The multi-gharana training gave me a comprehensive understanding of this beautiful classical art form. I grew from a student to a performer on international stages.'
  },
  {
    id: 2,
    name: 'Aarav Gupta',
    role: 'International Performer',
    initial: 'A',
    accent: '#0C1B33',
    bg: 'from-[#0C1B33]/10 to-[#2A4365]/5',
    border: 'border-[#0C1B33]/15',
    rating: 5,
    text: 'From a shy 7-year-old to performing on international stages — this journey has been truly magical. The patient guidance of Guruma and the systematic training transformed me completely. I owe everything to this wonderful academy.'
  },
  {
    id: 3,
    name: 'Kavya Desai',
    role: 'Choreographer',
    initial: 'K',
    accent: '#00A3A3',
    bg: 'from-[#00A3A3]/10 to-[#007A7A]/5',
    border: 'border-[#00A3A3]/20',
    rating: 5,
    text: 'The creative freedom and encouragement at Sanchay Kathak helped me discover my own artistic voice. Today I am a choreographer myself, and I owe it all to this nurturing environment that believed in me when I doubted myself.'
  }
];

const mediaCoverage = [
  { url: '/images/IMG_9244-scaled.jpg', label: '35 Years Celebration' },
  { url: '/images/2430-scaled.jpg', label: 'Media Feature' },
  { url: '/images/2556-scaled.jpg', label: 'Press Coverage' }
];

const stats = [
  { number: '1000+', label: 'Students Trained' },
  { number: '35+', label: 'Years of Excellence' },
  { number: '5★', label: 'Average Rating' }
];

export default function Reviews() {
  const [tab, setTab] = useState('written');

  return (
    <Layout>
      <Head>
        <title>Student Reviews | Sanchay Kathak Academy</title>
        <meta name="description" content="Read what students say about Sanchay Kathak Nrutya Academy — from beginners to international performers, see how our training transforms lives." />
        <link rel="canonical" href="https://www.sanchaykathak.com/reviews" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sanchay Kathak Nrutya Academy" />
        <meta property="og:url" content="https://www.sanchaykathak.com/reviews" />
        <meta property="og:title" content="Student Reviews | Sanchay Kathak Nrutya Academy" />
        <meta property="og:description" content="From beginners to international performers — read how Sanchay Kathak Nrutya Academy transforms lives through dance." />
        <meta property="og:image" content="https://www.sanchaykathak.com/images/Sanchay-1.png" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Reviews | Sanchay Kathak Nrutya Academy" />
        <meta name="twitter:description" content="From beginners to international performers — student journeys at Sanchay Kathak Nrutya Academy." />
        <meta name="twitter:image" content="https://www.sanchaykathak.com/images/Sanchay-1.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Student Reviews — Sanchay Kathak Nrutya Academy",
          "url": "https://www.sanchaykathak.com/reviews",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Review by Meera Krishnan — International Performer" },
            { "@type": "ListItem", "position": 2, "name": "Review by Aarav Gupta — International Performer" },
            { "@type": "ListItem", "position": 3, "name": "Review by Kavya Desai — Choreographer" }
          ]
        })}} />
      </Head>

      {/* Breadcrumb */}
      <div className="pt-14 bg-[#0C1B33]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Reviews' }]} dark={true} />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#0C1B33] via-[#1a2d4d] to-[#0C1B33] text-white pt-8 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {['♪', '♫', '♩', '♬', '♪', '♫'].map((note, i) => (
            <span
              key={i}
              className="absolute text-4xl select-none"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                transform: `rotate(${-15 + i * 10}deg)`
              }}
            >
              {note}
            </span>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#C73664]/20 border border-[#C73664]/40 text-[#ff8aac] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            ⭐ Student Stories
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Voices of Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] to-[#ff8aac]">
              Community
            </span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Real stories from students whose lives have been transformed through the art of Kathak
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 sm:gap-16 mt-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#C73664]">{s.number}</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex">
            <button
              onClick={() => setTab('written')}
              className={`flex-1 sm:flex-none px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                tab === 'written'
                  ? 'border-[#C73664] text-[#C73664]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              ✍️ Student Reviews
            </button>
            <button
              onClick={() => setTab('media')}
              className={`flex-1 sm:flex-none px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                tab === 'media'
                  ? 'border-[#C73664] text-[#C73664]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              📰 Media Coverage
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-amber-50/30 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 py-12">

          {tab === 'written' && (
            <div className="space-y-6">
              {textReviews.map((r, i) => (
                <div
                  key={r.id}
                  className={`bg-gradient-to-br ${r.bg} border ${r.border} rounded-2xl p-6 sm:p-8 relative transition-all duration-300 hover:shadow-lg`}
                >
                  {/* Large quote mark */}
                  <div className="absolute top-4 right-6 text-6xl font-serif leading-none select-none opacity-20" style={{ color: r.accent }}>
                    "
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md"
                      style={{ background: `linear-gradient(135deg, ${r.accent}, ${r.accent}aa)` }}
                    >
                      {r.initial}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 pr-8">
                        "{r.text}"
                      </p>

                      <div>
                        <p className="font-bold text-[#0C1B33]">{r.name}</p>
                        <p className="text-sm font-medium" style={{ color: r.accent }}>{r.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="text-center pt-6">
                <p className="text-gray-500 mb-4 text-sm">Ready to start your own story?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Begin Your Journey
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {tab === 'media' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#0C1B33] mb-2">In the Media</h2>
                <p className="text-gray-500 text-sm">Press coverage and media features of Sanchay Kathak Nrutya Academy</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {mediaCoverage.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={item.url}
                        alt={item.label}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-sm font-semibold text-[#0C1B33]">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">Sanchay Kathak Nrutya Academy</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-10">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#C73664] text-[#C73664] font-semibold rounded-full hover:bg-[#C73664] hover:text-white transition-all duration-300"
                >
                  View Full Gallery
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
