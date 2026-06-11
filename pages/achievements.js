import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';

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
        <title>Achievements & Awards | Sanchay Kathak Academy</title>
        <meta name="description" content="Awards and recognitions earned by Sanchay Kathak Nrutya Academy — Adarsh Nrutya Shikshak Puraskar, Kala Rang Puraskar, Best Choreographer 2024, and more." />
        <link rel="canonical" href="https://www.sanchaykathak.com/achievements" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sanchay Kathak Nrutya Academy" />
        <meta property="og:url" content="https://www.sanchaykathak.com/achievements" />
        <meta property="og:title" content="Achievements & Awards | Sanchay Kathak Nrutya Academy" />
        <meta property="og:description" content="Decades of recognition — national and international awards won by the founders and students of Sanchay Kathak Nrutya Academy." />
        <meta property="og:image" content="https://www.sanchaykathak.com/images/IMG-20250305-WA0030.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Achievements & Awards | Sanchay Kathak Nrutya Academy" />
        <meta name="twitter:description" content="National and international awards won by the founders and students of Sanchay Kathak Nrutya Academy." />
        <meta name="twitter:image" content="https://www.sanchaykathak.com/images/IMG-20250305-WA0030.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Awards won by Sanchay Kathak Nrutya Academy",
          "url": "https://www.sanchaykathak.com/achievements",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Adarsh Nrutya Shikshak Puraskar 2008" },
            { "@type": "ListItem", "position": 2, "name": "Sangeet Kalopasak Puraskar 2016" },
            { "@type": "ListItem", "position": 3, "name": "Kala Rang Puraskar 2018" },
            { "@type": "ListItem", "position": 4, "name": "Best Choreographer Award 2024" },
            { "@type": "ListItem", "position": 5, "name": "Varshant Sitara Puraskar 2021" }
          ]
        })}} />
      </Head>
      
      <div className="pt-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Achievements' }]} />
        </div>
      </div>
      <div className="min-h-screen bg-[#FDF9F0] py-6 md:py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#C73664]/10 rounded-full filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-20 w-32 h-32 bg-[#B300B3]/10 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-[#C73664]/10 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] to-[#B300B3]">Achievements</span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#C73664] to-[#B300B3] mx-auto rounded-full mb-6"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
              Celebrating excellence and recognition in the world of Kathak
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Vaishali's Awards */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1">
              <div className="relative flex flex-col items-center pt-10 pb-6 px-6">
                {/* Image container with proper positioning */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/1000926106.jpg"
                    alt="Guru Vaishali Palsule-Dhongade"
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 224px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">Guru Vaishali Palsule-Dhongade</h2>
                  <p className="text-[#C73664] italic mt-1">Founder & Director</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mx-auto my-4"></div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C73664]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C73664]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Awards & Recognitions</h3>
                </div>

                <ul className="space-y-3">
                  {vaishaliAwards.map(award => (
                    <li
                      key={award.id}
                      className="p-4 bg-[#FFF5ED] rounded-lg border border-[#FFE8DC] transition-all duration-200 hover:shadow-sm hover:border-[#C73664]/30"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-gray-800 font-medium">{award.title}</p>
                        <span className="bg-[#C73664]/10 text-[#C73664] text-sm px-2.5 py-1 rounded-full font-medium">
                          {award.year}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Rajashree's Awards */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 transform transition-all duration-300 hover:-translate-y-1">
              <div className="relative flex flex-col items-center pt-10 pb-6 px-6">
                {/* Image container with proper positioning */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/1000069339-scaled.jpg"
                    alt="Rajashree Dhongade"
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 224px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">Rajashree Dhongade</h2>
                  <p className="text-pink-600 italic mt-1">Principal & Choreographer</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto my-4"></div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Awards & Recognitions</h3>
                </div>
                
                <ul className="space-y-3">
                  {rajashreeAwards.map(award => (
                    <li 
                      key={award.id} 
                      className="p-4 bg-pink-50 rounded-lg border border-pink-100 transition-all duration-200 hover:shadow-sm hover:border-pink-200"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-gray-800 font-medium">{award.title}</p>
                        <span className="bg-pink-100 text-pink-800 text-sm px-2.5 py-1 rounded-full font-medium">
                          {award.year}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience Our Legacy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Join us to learn from award-winning instructors
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-md transform transition-transform hover:scale-105">
                Enroll Now
              </Link>
              <Link href="/gallery" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-full shadow-md transform transition-transform hover:scale-105 hover:bg-indigo-50">
                View Gallery
              </Link>
            </div>
          </div>
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