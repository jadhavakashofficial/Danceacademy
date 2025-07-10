import Layout from '../components/Layout';
import Head from 'next/head';

const recentHighlights = [
  'Thrissur Vishnumaya Devasthan, Kerala – India\'s longest dance festival',
  'Vithoba Devasthan, Kochi – Mesmerizing Kathak performance',
  'Bharat Ratna Pandit Bhimsen Joshi Sangeet Academy Vardhapan Din Mahotsav',
  'Vaishali ji as special invited artist at Vithoba Devasthan, Kochi'
];

const internationalShows = [
  'Bangkok & Singapore (ABSS Competitions) – Award-winning performances',
  'Europe Tour – Germany, Austria, Netherlands, Paris',
  'Dubai – Students represented Indian classical dance'
];

const nationalEvents = [
  'Pune Festival – featured for three consecutive years',
  'Asha Bhosale Puraskar compositions showcase',
  'Sawarkar Sangeet Mahotsav',
  'Yuva Kathak Mohotsav & Indo-Asian Festival'
];

const workshops = [
  'Kathak Workshop (Sangeet Mohotsav 2017)',
  'Kathak Kirtan (2019) – Sankar Maharaj Sangeet Mohotsav, Pune',
  'Fusion works: “Moods of Kathak”, “Krishnayan”, “Nritya Sarita”, “Kathak ke Rang Radha Ke Sang”'
];

const recordEvents = [
  'Universal Records Forum – Longest dance festival (Thrissur, Kerala)',
  'Limca Book of Records – Nrutya Chakra event',
  'World Records Book of India – Nrutyachakra recognition'
];

export default function Events() {
  return (
    <Layout>
      <Head>
        <title>Events | Sanchay Kathak Nrutya Academy</title>
        <meta name="description" content="List of key performances by Sanchay Kathak Nrutya Academy." />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <h1 className="text-2xl font-bold text-center">Performances</h1>
        <section>
          <h2 className="text-xl font-semibold mb-2">Recent Highlights (2024)</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {recentHighlights.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">International Performances</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {internationalShows.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Prestigious National Events</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {nationalEvents.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Workshops & Special Choreographies</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {workshops.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Record-Breaking Events</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {recordEvents.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
