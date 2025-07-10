import Layout from '../components/Layout';
import Head from 'next/head';

const vaishaliAwards = [
  { id: 1, title: 'Adarsh Nrutya Shikshak Puraskar', year: '2008' },
  { id: 2, title: 'Yuva Kathak Nrutya Kalakar', year: '2009' },
  { id: 3, title: 'Sangeet Kalopasak Puraskar', year: '2016' },
  { id: 4, title: 'Kala Rang Puraskar', year: '2018' },
  { id: 5, title: 'Kalarpan Puraskar', year: '2019' }
];

const rajashreeAwards = [
  { id: 1, title: 'Kalarang Puraskar', year: '2018' },
  { id: 2, title: 'Nrityavishkar Award', year: '2019' },
  { id: 3, title: 'Best Choreographer', year: '2024' },
  { id: 4, title: 'Varshant Sitara Puraskar', year: '2021' },
  { id: 5, title: 'Nehru Yuva Kendra Champion', year: '2020-22' }
];

export default function Achievements() {
  return (
    <Layout>
      <Head>
        <title>Achievements | Sanchay Kathak Nrutya Academy</title>
        <meta name="description" content="Awards and recognitions of the academy" />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <h1 className="text-3xl font-bold text-center mb-4">Awards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">Guru Vaishali Palsule-Dhongade</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {vaishaliAwards.map(a => (
                <li key={a.id}>{a.title} ({a.year})</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">Rajashree Dhongade</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {rajashreeAwards.map(a => (
                <li key={a.id}>{a.title} ({a.year})</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
