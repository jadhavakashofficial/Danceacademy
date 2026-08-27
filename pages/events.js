import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb';
import { upcomingEvent, isEventUpcoming } from '../data/upcomingEvent';

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

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DanceEvent',
  name: upcomingEvent.title,
  startDate: upcomingEvent.startsAt,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: `https://www.sanchaykathak.com${upcomingEvent.poster}`,
  description: `${upcomingEvent.title} presented by ${upcomingEvent.presenter}, conducted by ${upcomingEvent.conductedBy}. ${upcomingEvent.chiefGuestNote}.`,
  location: {
    '@type': 'Place',
    name: upcomingEvent.venue,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chinchwad',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: upcomingEvent.presenter,
    url: 'https://www.sanchaykathak.com',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: 'https://www.sanchaykathak.com/events',
  },
};

// Evaluated at build time so the section (and its Event schema) is in the static HTML.
export function getStaticProps() {
  return { props: { eventIsUpcoming: isEventUpcoming() } };
}

export default function Events({ eventIsUpcoming }) {
  // Start from the build-time value so hydration matches, then re-check against
  // the visitor's own clock in case the site hasn't been rebuilt since the event.
  const [showUpcoming, setShowUpcoming] = useState(eventIsUpcoming);
  useEffect(() => {
    setShowUpcoming(isEventUpcoming());
  }, []);

  return (
    <Layout>
      <Head>
        <title>Events & Performances | Sanchay Kathak Academy</title>
        <meta name="description" content="Explore performances and events by Sanchay Kathak Nrutya Academy — from international stages in Bangkok & Europe to prestigious national festivals." />
        <link rel="canonical" href="https://www.sanchaykathak.com/events" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sanchay Kathak Nrutya Academy" />
        <meta property="og:url" content="https://www.sanchaykathak.com/events" />
        <meta property="og:title" content="Events & Performances | Sanchay Kathak Nrutya Academy" />
        <meta property="og:description" content="International tours, national festivals, workshops, and record-breaking events by Sanchay Kathak Nrutya Academy." />
        <meta property="og:image" content="https://www.sanchaykathak.com/images/2430-scaled.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events & Performances | Sanchay Kathak Nrutya Academy" />
        <meta name="twitter:description" content="International tours, national festivals, and workshops by Sanchay Kathak Nrutya Academy." />
        <meta name="twitter:image" content="https://www.sanchaykathak.com/images/2430-scaled.jpg" />
        {eventIsUpcoming && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
          />
        )}
      </Head>
      
      <div className="pt-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Events' }]} />
        </div>
      </div>
      <div className="min-h-screen bg-[#FDF9F0] py-6 md:py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#C73664]/10 rounded-full filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-20 w-32 h-32 bg-[#B300B3]/10 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-[#C73664]/10 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] to-[#B300B3]">Events</span>
            </h1>
            <div className="w-40 h-1.5 bg-gradient-to-r from-[#C73664] to-[#B300B3] mx-auto rounded-full mb-6"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto relative z-10">
              Experience the magic of Kathak through our performances, workshops, and record-breaking events
            </p>
          </div>

          {/* Featured Upcoming Event */}
          {showUpcoming && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-[#120608] ring-1 ring-[#E7B84F]/25">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-black">
                  <Image
                    src={upcomingEvent.poster}
                    alt={`${upcomingEvent.title} poster — ${upcomingEvent.dateLabel} at ${upcomingEvent.venue}, ${upcomingEvent.venueArea}`}
                    width={1303}
                    height={1600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                <div className="lg:col-span-3 p-6 sm:p-8 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C73664] px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Upcoming Event
                  </span>

                  <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7B84F] to-[#C73664]">
                      {upcomingEvent.title}
                    </span>
                  </h2>
                  <p className="mt-1 text-base text-[#E7B84F]">{upcomingEvent.titleMarathi}</p>

                  <p className="mt-4 text-sm sm:text-base text-gray-300">
                    Presented by <span className="font-semibold text-white">{upcomingEvent.presenter}</span>,
                    conducted by <span className="font-semibold text-white">{upcomingEvent.conductedBy}</span>.
                    <br />
                    <span className="text-gray-400">{upcomingEvent.chiefGuestNote}</span>
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-[11px] uppercase tracking-wider text-[#E7B84F] font-semibold">Date</p>
                      <p className="mt-1 font-semibold">{upcomingEvent.dateLabel}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-[11px] uppercase tracking-wider text-[#E7B84F] font-semibold">Time</p>
                      <p className="mt-1 font-semibold">{upcomingEvent.timeLabel}</p>
                      <p className="text-xs text-gray-400">{upcomingEvent.seatingNote}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-[11px] uppercase tracking-wider text-[#E7B84F] font-semibold">Venue</p>
                      <p className="mt-1 font-semibold">{upcomingEvent.venue}</p>
                      <p className="text-xs text-gray-400">{upcomingEvent.venueArea}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#E7B84F] font-semibold">Chief Guests</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-300">
                        {upcomingEvent.guests.map((g) => (
                          <li key={g}>{g}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#E7B84F] font-semibold">Accompanists</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-300">
                        {upcomingEvent.accompanists.map((a) => (
                          <li key={a.role}>
                            <span className="text-gray-400">{a.role}:</span> {a.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6 inline-block rounded-lg bg-[#E7B84F]/10 px-3 py-2 text-xs text-[#E7B84F] ring-1 ring-[#E7B84F]/25">
                    {upcomingEvent.entry} · Do come and grace the occasion with your presence 🙏
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={upcomingEvent.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#C73664] to-[#B300B3] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:+91${upcomingEvent.phone}`}
                      className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/10 transition-colors"
                    >
                      Call {upcomingEvent.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

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