import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: `rgba(${Math.floor(Math.random() * 50 + 180)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.random() * 0.2 + 0.1})`
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(245, 240, 235, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x -= particle.speed;
        if (particle.x < 0) {
          particle.x = canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.size = Math.random() * 5 + 1;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    }

    drawParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      <section className="relative min-h-screen overflow-hidden pt-12 md:pt-16">
        {/* Enhanced gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #FFE8DC, #C2E9FB, #FFD9C0, #00FFF7)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 25s ease infinite'
          }}
        ></div>

        {/* Dynamic wave pattern */}
        <div
          className="absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 C30,-10 70,110 100,50 L100,100 L0,100 Z' fill='%23C73664'/%3E%3C/svg%3E")`,
            backgroundSize: '1200px',
            backgroundPosition: 'bottom center',
            maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)'
          }}
        ></div>

        {/* Main content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-18 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Content Section */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8 z-10 pt-4 md:-mt-5">
              <div className="space-y-6 md:space-y-8">
                {/* Academy Logo */}
                <div className="flex justify-center md:justify-start animate-fadeInUp">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                    alt="Sanchay Kathak Nrutya Academy"
                    width={250}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <p className="text-center md:text-left font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Established in 1990
                </p>

                {/* Subheading */}
                <p
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl animate-fadeInUp"
                  style={{ color: '#2A4365', animationDelay: '0.3s', fontFamily: 'Poppins, sans-serif' }}
                >
                  <span className="font-bold">35+ Years</span> of Dance Excellence at Pimpri-Chinchwad's{' '}
                  <span className="font-bold text-[#C73664]">Premier Kathak Academy</span>
                </p>

                {/* Stats grid */}
                <div className="mt-8 grid grid-cols-2 gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  {[
                    { title: '35+ Years Excellence', icon: '🌟' },
                    { title: 'Global Recognition', icon: '🌏' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/95 p-3 sm:p-4 rounded-xl shadow-md border border-[#f0f0f0] text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group hover:bg-gradient-to-br hover:from-white hover:to-[#FFE8DC]"
                    >
                      <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                      <h3 className="font-bold text-[#0C1B33] text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h3>
                      <div className="mt-1 sm:mt-2 w-6 sm:w-8 h-0.5 bg-[#C73664] mx-auto rounded-full transition-all duration-300 group-hover:w-10 group-hover:bg-[#00A3A3]"></div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                  <Link
                    href="/contact"
                    className="group relative px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 overflow-hidden"
                    style={{ background: 'linear-gradient(90deg, #C73664, #B300B3)', fontFamily: 'Poppins, sans-serif', minWidth: '230px' }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#C73664]/0 to-[#C73664]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 text-[#FDF9F0] text-center">Start Your Kathak Journey</span>
                    <span className="relative z-10 text-[#FDF9F0] transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="/about"
                    className="group relative bg-white/95 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 border border-[#C73664] shadow-md hover:shadow-lg flex items-center justify-center space-x-2 overflow-hidden"
                    style={{ color: '#C73664', fontFamily: 'Poppins, sans-serif', minWidth: '180px' }}
                  >
                    <span className="absolute inset-0 bg-[#C73664]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">Meet Our Gurus</span>
                    <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="relative lg:ml-6 mt-8 md:mt-0 h-full flex flex-col justify-center">
              <div className="relative z-10 hidden md:grid grid-cols-2 gap-4 lg:gap-6 h-[520px]">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/FB_IMG_1705643899597.jpg"
                    alt="Kathak Performer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain rounded-2xl"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg"
                    alt="Kathak Performer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
              {/* Mobile slider */}
              <div className="md:hidden mt-6">
                <Swiper
                  grabCursor
                  centeredSlides
                  slidesPerView={1}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true, el: '.custom-pagination', bulletClass: 'swiper-bullet', bulletActiveClass: 'swiper-bullet-active' }}
                  modules={[Pagination, Autoplay]}
                  className="h-72"
                >
                  {[
                    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/FB_IMG_1705643899597.jpg',
                    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg'
                  ].map((src, idx) => (
                    <SwiperSlide key={idx} className="bg-transparent">
                      <div className="relative h-full w-full rounded-2xl overflow-hidden">
                        <Image src={src} alt="Kathak" fill sizes="100vw" className="object-contain" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="custom-pagination flex justify-center gap-2 mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#C73664] flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-[#C73664] rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>
    </>
  );
}

