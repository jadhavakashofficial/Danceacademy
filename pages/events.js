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
  'Fusion works: "Moods of Kathak", "Krishnayan", "Nritya Sarita", "Kathak ke Rang Radha Ke Sang"'
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
        <meta name="description" content="Upcoming and past events by Sanchay Kathak Nrutya Academy." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 py-6 md:py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-20 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Events</span>
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto relative z-10">
              Experience the magic of Kathak through our performances, workshops, and record-breaking events
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Recent Highlights */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1">
              <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
                <div className="flex items-center">
                  <div className="bg-white p-2.5 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white ml-4">Recent Highlights (2024)</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-100 relative">
                {recentHighlights.map((e, i) => (
                  <li key={i} className="p-4 hover:bg-indigo-50 transition-all duration-200 group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-4 group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 group-hover:text-indigo-700 transition-colors">{e}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* International Performances */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1">
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-600 p-5">
                <div className="flex items-center">
                  <div className="bg-white p-2.5 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white ml-4">International Performances</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-100 relative">
                {internationalShows.map((e, i) => (
                  <li key={i} className="p-4 hover:bg-blue-50 transition-all duration-200 group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-4 group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 group-hover:text-blue-700 transition-colors">{e}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* National Events */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1">
              <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 p-5">
                <div className="flex items-center">
                  <div className="bg-white p-2.5 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white ml-4">Prestigious National Events</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-100 relative">
                {nationalEvents.map((e, i) => (
                  <li key={i} className="p-4 hover:bg-amber-50 transition-all duration-200 group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold mr-4 group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 group-hover:text-amber-700 transition-colors">{e}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Workshops */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1">
              <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-5">
                <div className="flex items-center">
                  <div className="bg-white p-2.5 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white ml-4">Workshops & Special Choreographies</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-100 relative">
                {workshops.map((e, i) => (
                  <li key={i} className="p-4 hover:bg-emerald-50 transition-all duration-200 group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mr-4 group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 group-hover:text-emerald-700 transition-colors">{e}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Record Events - Full width */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
              <div className="relative bg-gradient-to-r from-rose-500 to-pink-600 p-5">
                <div className="flex items-center">
                  <div className="bg-white p-2.5 rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white ml-4">Record-Breaking Events</h2>
                </div>
              </div>
              <div className="p-6 relative">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recordEvents.map((e, i) => (
                    <li key={i} className="bg-gradient-to-br from-white to-rose-50 p-5 rounded-xl shadow-sm border border-rose-100 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-bold mr-3 group-hover:scale-110 transition-transform">
                          {i + 1}
                        </div>
                        <span className="text-gray-700 group-hover:text-rose-700 transition-colors">{e}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
        
         
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-10px, 15px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </Layout>
  );
}