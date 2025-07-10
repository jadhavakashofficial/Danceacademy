import Image from 'next/image';

export default function GurusSection() {
  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 100%)', overflow: 'hidden' }}
    >
      {/* Floating bubbles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#C73664]/10 animate-float blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#00FFF7]/10 animate-float animation-delay-2000 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#B300B3]/8 animate-float animation-delay-1500 blur-2xl"></div>

      {/* Animated notes */}
      <div className="absolute inset-0 z-0 opacity-8">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#C73664] text-2xl opacity-0"
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
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="text-[#C73664] font-bold text-sm uppercase tracking-widest mb-2 inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C73664]/20">
              <span className="animate-pulse">♪</span> Living Legends <span className="animate-pulse animation-delay-1000">♫</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#0C1B33]">Our Esteemed </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] animate-gradient-x">
              Kathak Gurus
            </span>
          </h2>
        </div>

        {/* Gurus grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: 'Guru Vaishali Palsule-Dhongade',
              img: 'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/vaishali-palsule.png'
            },
            {
              name: 'Rajashree Dhongade',
              img: 'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/rajashree-dhongade.png'
            }
          ].map((guru, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg">
                <Image src={guru.img} alt={guru.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#0C1B33]">{guru.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-25px) rotate(2deg); }
          66% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes floatNote {
          0% { opacity: 0; transform: translateY(100vh) rotate(0deg); }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-100px) rotate(360deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 4s ease infinite; }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
      `}</style>
    </section>
  );
}

