import Layout from '../components/Layout';
import Head from 'next/head';

const events = [
  { id: 1, title: 'Thrissur Vishnumaya Devasthan Festival' },
  { id: 2, title: 'Bharat Ratna Pandit Bhimsen Joshi Mahotsav' },
  { id: 3, title: 'International Kathak Festival - Europe Tour' },
  { id: 4, title: 'Asha Bhosale Puraskar Celebration' },
  { id: 5, title: 'Sanchay Kathak Annual Mahotsav 2025' }
];

export default function Events() {
  return (
    <Layout>
      <Head>
        <title>Events | Sanchay Kathak Nrutya Academy</title>
        <meta name="description" content="List of key performances by Sanchay Kathak Nrutya Academy." />
      </Head>
      <div className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-6">Performances</h1>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
