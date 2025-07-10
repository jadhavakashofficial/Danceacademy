import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

const textReviews = [
  { id: 1, name: 'Meera Krishnan', rating: 5, text: 'Sanchay Kathak is not just a dance academy; it preserves the essence of Kathak. The multi-gharana training gave me a comprehensive understanding.' },
  { id: 2, name: 'Aarav Gupta', rating: 5, text: 'From a shy 7-year-old to performing on international stages – this journey has been magical.' },
  { id: 3, name: 'Kavya Desai', rating: 5, text: 'The creative freedom and encouragement helped me become a choreographer myself.' }
];

const mediaCoverage = [
  'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_9244-scaled.jpg',
  'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg',
  'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2556-scaled.jpg'
];

export default function Reviews() {
  const [tab, setTab] = useState('written');

  return (
    <Layout>
      <Head>
        <title>Student Reviews | Sanchay Kathak Nrutya Academy</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Student Reviews</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setTab('written')}
            className={`px-4 py-2 rounded ${tab==='written' ? 'bg-[#C73664] text-white' : 'bg-white shadow'}`}
          >
            Written Reviews
          </button>
          <button
            onClick={() => setTab('media')}
            className={`px-4 py-2 rounded ${tab==='media' ? 'bg-[#C73664] text-white' : 'bg-white shadow'}`}
          >
            Media Coverage
          </button>
        </div>

        {tab === 'written' ? (
          <div className="space-y-6">
            {textReviews.map(r => (
              <div key={r.id} className="bg-white rounded-xl shadow p-4">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold mr-2">{r.name}</h3>
                  <div className="text-yellow-500 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < r.rating ? '★' : '☆'}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {mediaCoverage.map((url, i) => (
              <div key={i} className="relative w-full h-40 sm:h-48">
                <Image src={url} alt="Media" fill className="object-contain rounded-lg" />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
