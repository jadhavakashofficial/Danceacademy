import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Achievement cards data
  const achievementCards = [
    { 
      id: 1, 
      title: "Best Kathak Dance Academy In Pune", 
      icon: "🏆",
      bgColor: "from-[#FFF4E6] to-[#FFE8D1]"
    },
    { 
      id: 2, 
      title: "Global Recognization", 
      icon: "🌍",
      bgColor: "from-[#E6F7FF] to-[#D1F0FF]"
    },
    { 
      id: 3, 
      title: "35+ Years Of Experience", 
      icon: "📅",
      bgColor: "from-[#F0F9FF] to-[#E1F3FF]"
    },
    { 
      id: 4, 
      title: "Award Winning Academy", 
      icon: "🏅",
      bgColor: "from-[#FFF8E6] to-[#FFF1D1]"
    },
    { 
      id: 5, 
      title: "4+ Prestigious Affiliations", 
      icon: "🤝",
      bgColor: "from-[#F0F5FF] to-[#E1EAFF]"
    },
    { 
      id: 6, 
      title: "30+ Visharad Graduates", 
      icon: "🎓",
      bgColor: "from-[#F9F0FF] to-[#F2E1FF]"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-20 lg:pt-24 bg-gradient-to-br from-[#FFE8DC] via-[#C2E9FB] to-[#FFD9C0]">
      {/* Cleaner background with subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23C73664' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '40px',
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content - Centered and responsive */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
            <div className="mb-6 w-full max-w-xs md:max-w-md">
              {/* Responsive logo with consistent padding */}
              <div className="flex justify-center lg:justify-start mb-4 px-4">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                  alt="Sanchay Kathak Nrutya Academy"
                  width={isMobile ? 200 : 260}
                  height={isMobile ? 80 : 100}
                  className="object-contain transition-all"
                  priority
                />
              </div>
              
              {/* Established text with cleaner design */}
              <div className="mb-8 text-center lg:text-left">
                <div className="inline-block relative">
                  <p className="text-[#2A4365] text-base md:text-lg font-medium tracking-wide relative z-10">
                    Established in 1990
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C73664] rounded-full"></div>
                </div>
              </div>
              
              {/* CTA Buttons with consistent spacing */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group relative px-5 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(90deg, #C73664, #B300B3)', 
                    fontFamily: 'Poppins, sans-serif',
                    minWidth: '160px'
                  }}
                >
                  <span className="relative z-10 text-white text-center">Start Journey</span>
                  <span className="relative z-10 text-white transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/about"
                  className="group relative bg-white px-5 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 border border-[#C73664] shadow-sm hover:shadow-md flex items-center justify-center space-x-2 overflow-hidden"
                  style={{ 
                    color: '#C73664', 
                    fontFamily: 'Poppins, sans-serif',
                    minWidth: '160px'
                  }}
                >
                  <span className="relative z-10">Meet Gurus</span>
                  <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Achievement Cards - Desktop Only */}
              <div className="hidden md:grid grid-cols-2 gap-3 mt-8">
                {achievementCards.map((card) => (
                  <div 
                    key={card.id}
                    className={`bg-gradient-to-br ${card.bgColor} rounded-xl p-3 shadow-sm border border-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{card.icon}</span>
                      <span className="text-xs font-medium text-[#2A4365]">{card.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Gallery - Improved responsiveness */}
          <div className="w-full lg:w-3/5 flex justify-center">
            {/* Desktop: Two images with proper headroom */}
            <div className="hidden md:grid grid-cols-2 gap-6 w-full max-w-2xl">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-300 hover:scale-[1.02]">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/FB_IMG_1705643899597.jpg"
                  alt="Kathak Performer"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-300 hover:scale-[1.02]">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg"
                  alt="Kathak Performer"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            
            {/* Mobile: Slider with proper headroom */}
            <div className="md:hidden w-full max-w-md aspect-[3/4] h-auto max-h-[80vh]">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ 
                  delay: 4000, 
                  disableOnInteraction: false 
                }}
                loop={true}
                speed={1500}
                className="h-full w-full rounded-xl overflow-hidden border-4 border-white shadow-xl"
              >
                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <Image 
                      src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/FB_IMG_1705643899597.jpg"
                      alt="Kathak Performer"
                      fill
                      sizes="100vw"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <Image 
                      src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg"
                      alt="Kathak Performer"
                      fill
                      sizes="100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#C73664] opacity-10 blur-xl z-0"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-[#2A4365] opacity-10 blur-xl z-0"></div>
      
      {/* Scroll indicator - subtle */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-[#C73664] flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-[#C73664] rounded-full animate-bounce"></div>
        </div>
      </div>
      
      {/* Global styles */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </section>
  );
}