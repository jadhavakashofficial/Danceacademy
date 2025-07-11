import Image from 'next/image';

export default function GurusSection() {
  const gurus = [
    {
      name: 'Guru Vaishali Palsule-Dhongade',
      image: 'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926102.jpg',
      role: 'Founder',
      qualifications: [
        'M.A. in Kathak from Lalit Kala Kendra',
        'Nritya Visharad from Gandharva Mahavidyalaya',
        'Trained across three major Gharanas'
      ]
    },
    {
      name: 'Rajashree Dhongade',
      image: 'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2398-scaled.jpg',
      role: 'Instructor',
      qualifications: [
        'UGC-NET qualified with 95% score',
        'M.A. in Kathak from Pune University',
        'Visharad & Nrityalankar with 1st Rank'
      ]
    }
  ];

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 100%)' }}
    >
      {/* Decorative elements with reduced opacity */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#C73664]/5 animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#00FFF7]/5 animate-float animation-delay-2000 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#B300B3]/5 animate-float animation-delay-1500 blur-2xl"></div>

      {/* Subtle musical notes */}
      <div className="absolute inset-0 z-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#C73664]/30 text-2xl"
            style={{
              animation: `floatNote ${10 + Math.random() * 8}s linear infinite ${Math.random() * 6}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${0.9 + Math.random() * 1.5}rem`
            }}
          >
            {Math.random() > 0.5 ? '♫' : '♪'}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <span className="text-[#C73664] font-bold text-sm uppercase tracking-widest mb-2 inline-block bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C73664]/20">
              <span>♪</span> Living Legends <span>♫</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#0C1B33]">Our Esteemed </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3]">
              Kathak Gurus
            </span>
          </h2>
          <div className="max-w-2xl mx-auto mt-4">
            <p className="text-lg text-[#2A4365]/90">
              Masters preserving and advancing the art of Kathak through generations
            </p>
          </div>
        </div>

        {/* Gurus grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {gurus.map((guru, i) => (
            <div 
              key={i} 
              className="bg-gradient-to-br from-white to-[#FFF9F5] rounded-2xl overflow-hidden shadow-xl border border-[#FFE8DC] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image container */}
                <div className="w-full md:w-2/5 flex justify-center items-center p-6">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src={guru.image} 
                      alt={guru.name} 
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: 'top center' }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white text-sm font-semibold py-1 px-3 rounded-full">
                      {guru.role}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0C1B33] mb-4">{guru.name}</h3>
                  
                  <div className="space-y-3">
                    {guru.qualifications.map((qualification, j) => (
                      <div key={j} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-[#C73664]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-[#2A4365]">{qualification}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatNote {
          0% { opacity: 0; transform: translateY(100vh) rotate(0deg); }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-100px) rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}