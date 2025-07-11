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

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-20 lg:pt-24 bg-gradient-to-br from-[#FFE8DC] via-[#C2E9FB] to-[#FFD9C0]">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 C30,30 70,70 100,50' stroke='%23C73664' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '300px',
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Left Content - Slightly reduced size */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
            <div className="mb-6 w-full max-w-xs">
              {/* Responsive logo - slightly smaller */}
              <div className="flex justify-center mb-4">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                  alt="Sanchay Kathak Nrutya Academy"
                  width={isMobile ? 200 : 240}
                  height={isMobile ? 80 : 96}
                  className="object-contain transition-all"
                  priority
                />
              </div>
              
              {/* Established text - smaller and elegant */}
              <div className="mb-8 text-center">
                <div className="inline-block relative">
                  <p className="text-[#2A4365] text-base md:text-lg font-medium tracking-wide relative z-10">
                    Established in 1990
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-[#C73664] rounded-full"></div>
                </div>
              </div>
              
              {/* CTA Buttons - reduced size */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="group relative px-4 py-2.5 rounded-lg font-bold text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 overflow-hidden"
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
                  className="group relative bg-white px-4 py-2.5 rounded-lg font-bold text-sm md:text-base transition-all duration-300 border border-[#C73664] shadow-sm hover:shadow-md flex items-center justify-center space-x-2 overflow-hidden"
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
            </div>
          </div>
          
          {/* Right Images - Increased size */}
          <div className="w-full lg:w-3/5 flex justify-center">
            {/* Desktop: Two larger images */}
            <div className="hidden md:grid grid-cols-2 gap-5 w-full max-w-2xl">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-300 hover:scale-[1.02]">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/FB_IMG_1705643899597.jpg"
                  alt="Kathak Performer"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-300 hover:scale-[1.02]">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg"
                  alt="Kathak Performer"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Mobile: Single image slider */}
            <div className="md:hidden w-full max-w-md h-[320px]">
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
                      className="object-cover"
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
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      
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