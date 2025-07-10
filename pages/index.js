// pages/index.js
import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, EffectFade, Navigation } from 'swiper/modules';
import Lightbox from "yet-another-react-lightbox";
import HeroSection from '../components/home/HeroSection';
import GurusSection from '../components/home/GurusSection';
import ContactSection from '../components/home/ContactSection';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import "yet-another-react-lightbox/styles.css"; 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  
  const galleryImages = [
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-1-scaled.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000069339-scaled.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926100.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3095.png",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3584.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926106.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-1-scaled.jpg"
  ];

  const achievementsImages = [
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20250305-WA0030.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20231007-WA0047.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20230412-WA0087.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_20240720_131132_031.webp",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20190903-WA0000.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20191005-WA0038.jpg",
    "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_20230713_145409_280.webp"
  ];

  const testimonials = [
    {
      id: 1,
      text: "Sanchay Kathak Academy transformed my understanding of classical dance. The multi-gharana training helped me develop a versatile style.",
      name: "Priya Sharma",
      achievement: "International Performer"
    },
    {
      id: 2,
      text: "The holistic approach combining dance, music, and rhythm theory gave me a complete artistic foundation. I'm now pursuing Kathak professionally.",
      name: "Rohan Deshpande",
      achievement: "Nritya Visharad Graduate"
    },
    {
      id: 3,
      text: "Training under Rajashree ma'am was life-changing. Her attention to detail and connection to tradition while encouraging creativity is remarkable.",
      name: "Ananya Patel",
      achievement: "World Record Holder"
    },
    {
      id: 4,
      text: "Performing at international festivals with the academy opened incredible opportunities. The training prepared me for global stages.",
      name: "Siddharth Joshi",
      achievement: "International Award Winner"
    },
    {
      id: 5,
      text: "The academy's lineage and connection to legendary masters makes the training authentic and deeply rooted in tradition.",
      name: "Meera Krishnan",
      achievement: "Nritya Alankar Achiever"
    },
    {
      id: 6,
      text: "From my first lesson at age 7 to now as a professional performer, Sanchay Kathak has been my artistic home and family.",
      name: "Aarav Gupta",
      achievement: "International Performer"
    }
  ];

  const programs = {
    beginners: {
      title: "For Beginners (Age 4+)",
      items: [
        "Basic footwork and postures",
        "Fundamental rhythm training",
        "Simple compositions and stories"
      ]
    },
    intermediate: {
      title: "Intermediate Level",
      items: [
        "Advanced techniques and compositions",
        "Abhinaya (expression) training",
        "Preparation for examinations"
      ]
    },
    advanced: {
      title: "Advanced & Professional",
      items: [
        "Complete Gharana repertoire",
        "Performance preparation",
        "Teacher training programs"
      ]
    },
    special: {
      title: "Special Programs",
      items: [
        "Kathak-Kirtan Fusion - Unique spiritual dance form",
        "Music Training - Tabla, Harmonium, Violin",
        "Examination Preparation - ABGMV, University certifications"
      ]
    }
  };

  // Open gallery lightbox
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Layout>
      <Head>
        <title>Sanchay Kathak Nrutya Academy | Pioneer Kathak Institute in Pimpri-Chinchwad</title>
        <meta name="description" content="Join Pimpri-Chinchwad's first Kathak academy with 35+ years of excellence. Training across Banaras, Lucknow & Jaipur Gharanas under renowned maestros." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <style jsx global>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(199, 54, 100, 0.7);
            }
            70% {
              transform: scale(1.02);
              box-shadow: 0 0 0 10px rgba(199, 54, 100, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(199, 54, 100, 0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-pulse {
            animation: pulse 2s infinite;
          }
          
          .flip-card {
            perspective: 1000px;
          }
          
          .flip-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          
          .flip-card-front, .flip-card-back {
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
          
          .parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          
          .tilt-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .tilt-hover:hover {
            transform: rotate(1deg) scale(1.02);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
          }

          .feature-card {
            transition: all 0.3s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
          }

          .program-tab {
            transition: all 0.3s ease;
          }

          .program-tab.active {
            background: linear-gradient(135deg, #C73664, #0C1B33);
            color: white;
          }

          .achievement-card {
            transition: all 0.3s ease;
          }

          .achievement-card:hover {
            transform: scale(1.03);
          }
        `}</style>
      </Head>

      <HeroSection />

<section 
  className="py-12 md:py-16 relative overflow-hidden"
  style={{ 
    background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 100%)',
    overflow: 'hidden'
  }}
>
  {/* Animated musical notes */}
  <div className="absolute inset-0 z-0 opacity-20">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i}
        className="absolute text-[#C73664] text-4xl opacity-0"
        style={{
          animation: `floatNote ${8 + Math.random() * 10}s linear infinite ${Math.random() * 5}s`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${1 + Math.random() * 3}rem`,
        }}
      >
        {Math.random() > 0.5 ? '♫' : '♪'}
      </div>
    ))}
  </div>
  
  {/* Floating liquid bubbles */}
  <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-[#C73664]/10 animate-float blur-xl"></div>
  <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[#00FFF7]/10 animate-float animation-delay-2000 blur-xl"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="text-center mb-16">
      <span className="text-[#C73664] font-bold text-sm uppercase tracking-widest mb-2 inline-block">
        <span className="animate-pulse">♪</span> Eternal Dance Legacy <span className="animate-pulse animation-delay-1000">♫</span>
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-[#0C1B33]">Where Tradition </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] animate-gradient-x">
          Meets Soul
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] mx-auto rounded-full transform transition-all duration-1000 hover:scale-x-150"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Founder Card - Enhanced Liquid Glass */}
      <div className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-[#FFFAF5]/70 backdrop-blur-2xl rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-105"></div>
        
        {/* Enhanced liquid wave effect */}
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#C73664]/10 rounded-full animate-float animation-delay-3000"></div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-[#00A3A3]/20 rounded-full animate-pulse"></div>
        
        <div className="relative z-10 h-full p-8 flex flex-col">
          <div className="flex items-start mb-6">
            <div className="bg-gradient-to-r from-[#C73664] to-[#B300B3] w-16 h-16 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0C1B33] mb-2 group-hover:text-[#C73664] transition-colors duration-300">Visionary Foundation</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>
          
          <div className="space-y-5 flex-grow">
            <p className="text-[#2E2E2E] leading-relaxed transform transition-all duration-300 group-hover:translate-x-2">
              Founded in <span className="font-bold text-[#C73664] bg-[#C73664]/10 px-2 py-1 rounded-lg">1990</span> by renowned Kathak exponent 
              <span className="font-bold text-[#0C1B33]"> Mrs. Vaishali Palsule-Dhongade</span>, 
              Sanchay stands as the <span className="font-bold text-[#B300B3] bg-[#B300B3]/10 px-2 py-1 rounded-lg">first Kathak academy</span> in Pimpri-Chinchwad.
            </p>
            <p className="text-[#2E2E2E] leading-relaxed transform transition-all duration-300 group-hover:translate-x-2">
              What began as a single institution has flourished into 
              <span className="font-bold text-[#00A3A3] bg-[#00A3A3]/10 px-2 py-1 rounded-lg"> three thriving branches</span>, 
              nurturing generations who carry forward India's dance heritage.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-[#ffffff]/30">
            <div className="flex items-center transform transition-all duration-300 group-hover:translate-x-2">
              <div className="bg-[#0C1B33]/5 p-3 rounded-lg mr-4 animate-pulse group-hover:bg-[#C73664]/10 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C73664]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[#2E2E2E] font-medium">3 branches across the region</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced liquid effect */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] rounded-full transform transition-all duration-1000 group-hover:h-3 group-hover:-translate-y-1 group-hover:shadow-lg"></div>
      </div>
      
      {/* Stats Card - Enhanced Holographic Display */}
      <div className="relative group perspective-1000 overflow-hidden">
        <div className="relative h-full transform transition-all duration-700 group-hover:rotate-y-3 group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFFAF5] to-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
          
          {/* Enhanced holographic grid */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{
            backgroundImage: `linear-gradient(rgba(199, 54, 100, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(199, 54, 100, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}></div>
          
          <div className="relative z-10 h-full p-8">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] w-16 h-16 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C1B33] group-hover:text-[#00A3A3] transition-colors duration-300">Decades of Excellence</h3>
                <p className="text-[#2E2E2E] mt-1">Milestones in Kathak education</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              {[
                {value: "35+", label: "Years of service", color: "#C73664", icon: "🕰️"},
                {value: "30+", label: "Visharad graduates", color: "#00A3A3", icon: "🎓"},
                {value: "4+", label: "Prestigious Affiliations", color: "#0C1B33", icon: "🏛️"}
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/90 p-5 rounded-2xl border border-white shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl group/stat"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <span 
                      className="text-3xl mr-3 transition-transform duration-500 group-hover/stat:scale-150 group-hover/stat:rotate-12" 
                      style={{ color: stat.color }}
                    >
                      {stat.icon}
                    </span>
                    <div>
                      <h4 
                        className="text-3xl font-extrabold mb-1 transition-all duration-500 group-hover/stat:text-4xl"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </h4>
                      <p className="text-[#2E2E2E] text-sm font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#C73664] animate-ping"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#00A3A3] animate-ping animation-delay-2000"></div>
        <div className="absolute top-1/2 left-6 w-1 h-1 rounded-full bg-[#B300B3] animate-ping animation-delay-1000"></div>
      </div>
      
      {/* Logo Card - Enhanced Center Stage */}
      <div className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFAF5] to-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-700">
          {/* Enhanced animated gradient background */}
          <div className="absolute -inset-20 bg-gradient-to-r from-[#C73664]/10 via-[#B300B3]/10 to-[#00A3A3]/10 animate-gradient-xy rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
        </div>
        
        {/* Floating logo container */}
        <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center">
          <div className="text-center mb-8 transform transition-all duration-700 group-hover:-translate-y-3">
            <h3 className="text-2xl font-bold text-[#0C1B33] mb-2 group-hover:text-[#C73664] transition-colors duration-300">Sanchay Kathak Dance Academy</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] mx-auto rounded-full mb-4 transition-all duration-500 group-hover:w-24"></div>
            <p className="text-[#2E2E2E] max-w-xs mx-auto group-hover:text-[#0C1B33] transition-colors duration-300">
              Symbolizing the eternal rhythm of Kathak
            </p>
          </div>
          
          {/* Enhanced Logo with golden frame and shine effect */}
          <div className="relative w-full max-w-md h-40 mb-8 transform transition-all duration-700 group-hover:scale-115 group-hover:-translate-y-2">
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat z-10"
                 style={{ 
                   backgroundImage: 'url(https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png)',
                   filter: 'drop-shadow(0 10px 20px rgba(199, 54, 100, 0.3))'
                 }}>
            </div>
            
            {/* Enhanced golden frame */}
            <div className="absolute inset-0 border-8 border-transparent border-t-[#FFD700]/40 border-r-[#FFD700]/60 border-b-[#FFD700]/40 border-l-[#FFD700]/60 rounded-xl z-20 pointer-events-none group-hover:border-[#FFD700]/80 transition-all duration-500"></div>
            
            {/* Enhanced animated shine */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-30"></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#FFD700] rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#C73664] rounded-full animate-ping animation-delay-1000 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Enhanced color spectrum */}
          <div className="flex space-x-4 mt-4">
            {["#C73664", "#00A3A3", "#B300B3", "#0C1B33"].map((color, i) => (
              <div 
                key={i}
                className="w-6 h-6 rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:-translate-y-3 hover:scale-175 cursor-pointer"
                style={{ 
                  backgroundColor: color,
                  animation: `pulseColor 2s infinite ${i * 0.3}s`,
                  animationDelay: `${i * 200}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Enhanced floating mini notes */}
        <div className="absolute top-4 left-4 text-[#C73664] text-xl animate-float animation-delay-1000 group-hover:scale-125 transition-transform duration-300">♪</div>
        <div className="absolute bottom-4 right-4 text-[#00A3A3] text-xl animate-float animation-delay-3000 group-hover:scale-125 transition-transform duration-300">♫</div>
        <div className="absolute top-1/2 right-4 text-[#B300B3] text-lg animate-float animation-delay-2000 opacity-0 group-hover:opacity-100 transition-opacity duration-500">♬</div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-20px) rotate(2deg); }
      66% { transform: translateY(-10px) rotate(-2deg); }
    }
    
    @keyframes floatNote {
      0% { 
        opacity: 0;
        transform: translateY(100vh) rotate(0deg);
      }
      10% { 
        opacity: 1;
      }
      90% { 
        opacity: 1;
      }
      100% { 
        opacity: 0;
        transform: translateY(-100px) rotate(360deg);
      }
    }
    
    @keyframes gradient-x {
      0%, 100% {
        background-size: 200% 200%;
        background-position: left center;
      }
      50% {
        background-size: 200% 200%;
        background-position: right center;
      }
    }
    
    @keyframes gradient-xy {
      0%, 100% {
        transform: translate(0%, 0%) rotate(0deg);
      }
      25% {
        transform: translate(10%, 10%) rotate(90deg);
      }
      50% {
        transform: translate(0%, 20%) rotate(180deg);
      }
      75% {
        transform: translate(-10%, 10%) rotate(270deg);
      }
    }
    
    @keyframes pulseColor {
      0%, 100% { 
        transform: scale(1);
        opacity: 1;
      }
      50% { 
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    .animate-gradient-x {
      animation: gradient-x 3s ease infinite;
    }
    
    .animate-gradient-xy {
      animation: gradient-xy 8s ease-in-out infinite;
    }
    
    .perspective-1000 {
      perspective: 1000px;
    }
    
    .rotate-y-3 {
      transform: rotateY(3deg);
    }
    
    .shadow-3xl {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
  `}</style>
</section>

      <GurusSection />

<section 
  className="py-12 relative overflow-hidden"
  style={{ 
    background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF8F0 25%, #FFFCF7 50%, #FFF5ED 75%, #FDF9F0 100%)',
  }}
>
  {/* Clean Professional Background with Subtle Curve */}
  <div className="absolute inset-0">
    {/* Single elegant curve with faded gradient */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(199, 54, 100, 0.08) 0%, 
            rgba(179, 0, 179, 0.06) 25%, 
            rgba(0, 163, 163, 0.04) 50%, 
            rgba(255, 215, 0, 0.02) 75%, 
            transparent 100%
          )
        `
      }}
    ></div>
    
    {/* Subtle curved overlay */}
    <div 
      className="absolute inset-0 opacity-40"
      style={{
        background: `
          radial-gradient(ellipse 150% 100% at 20% 0%, 
            rgba(199, 54, 100, 0.05) 0%, 
            transparent 60%
          ),
          radial-gradient(ellipse 120% 80% at 80% 100%, 
            rgba(0, 163, 163, 0.03) 0%, 
            transparent 50%
          )
        `
      }}
    ></div>
    
    {/* Minimal floating elements */}
    {[...Array(3)].map((_, i) => (
      <div 
        key={i}
        className="absolute opacity-0 animate-particle-float"
        style={{
          top: `${30 + i * 20}%`,
          left: `${20 + i * 30}%`,
          animationDelay: `${i * 3}s`,
          animationDuration: '15s'
        }}
      >
        <div 
          className="w-1 h-1 rounded-full blur-sm"
          style={{ backgroundColor: ['#C73664', '#00A3A3', '#B300B3'][i] + '20' }}
        ></div>
      </div>
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    {/* Sophisticated Header */}
    <div className="text-center mb-16">
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C73664]/5 via-[#B300B3]/5 to-[#00A3A3]/5 rounded-full blur-xl"></div>
        <span className="relative inline-block px-8 py-3 bg-white/60 backdrop-blur-xl text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-[#C73664]/10 shadow-lg">
          Why Choose Us
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        <span className="relative inline-block text-[#0C1B33]">
          Excellence Through
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] rounded-full animate-gradient-slide"></div>
        </span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] animate-text-shimmer mt-2">
          Tradition
        </span>
      </h2>
      
      <p className="text-lg text-[#2E2E2E] max-w-2xl mx-auto leading-relaxed font-light">
        Discover what makes Sanchay the premier choice for 
        <span className="font-semibold text-[#C73664]"> authentic Kathak education</span>
      </p>
    </div>

    {/* Next-Level Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: '🕉️',
          title: 'Comprehensive Gharana Training',
          desc: 'Master all three major Kathak traditions with authentic lineage',
          accent: '#C73664',
          pattern: 'radial-gradient(circle at 25% 25%, #C7366460 2px, transparent 2px)',
          patternSize: '25px 25px'
        },
        {
          icon: '📚',
          title: 'Scholarly Approach',
          desc: 'Academic excellence combined with practical mastery',
          accent: '#00A3A3',
          pattern: 'linear-gradient(45deg, #00A3A340 1px, transparent 1px)',
          patternSize: '20px 20px'
        },
        {
          icon: '🌏',
          title: 'International Exposure',
          desc: 'Students perform globally and win prestigious awards',
          accent: '#B300B3',
          pattern: 'linear-gradient(#B300B330 1px, transparent 1px), linear-gradient(90deg, #B300B330 1px, transparent 1px)',
          patternSize: '15px 15px'
        },
        {
          icon: '🎵',
          title: 'Music Integration',
          desc: 'Training in Tabla, Harmonium, and Violin alongside dance',
          accent: '#FFD700',
          pattern: 'radial-gradient(ellipse at center, #FFD70040 0%, transparent 50%)',
          patternSize: '40px 40px'
        },
        {
          icon: '🏛️',
          title: 'Prestigious Affiliations',
          desc: 'Dr. D.Y. Patil College, ABGMV, Tilak Maharashtra partnerships',
          accent: '#0C1B33',
          pattern: 'conic-gradient(from 0deg, #0C1B3340, transparent, #0C1B3340)',
          patternSize: '30px 30px'
        },
        {
          icon: '📈',
          title: 'Proven Track Record',
          desc: '30+ Nritya Visharad graduates, international winners',
          accent: '#00FFF7',
          pattern: 'linear-gradient(90deg, #00FFF740 50%, transparent 50%)',
          patternSize: '25px 25px'
        },
        {
          icon: '📍',
          title: 'Multiple Locations',
          desc: 'Convenient branches across Pimpri-Chinchwad region',
          accent: '#C73664',
          pattern: 'radial-gradient(ellipse at 20% 80%, #C7366440 0%, transparent 50%)',
          patternSize: '35px 35px'
        },
        {
          icon: '👥',
          title: 'Legacy of Excellence',
          desc: '35+ years of nurturing talent and preserving culture',
          accent: '#B300B3',
          pattern: 'conic-gradient(from 45deg, #B300B340, transparent, #B300B340)',
          patternSize: '28px 28px'
        }
      ].map((feature, index) => (
        <div 
          key={index} 
          className="group relative animate-fade-in-up"
          style={{ 
            animationDelay: `${index * 50}ms`
          }}
        >
          {/* Sophisticated background layers */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"></div>
          
          {/* Dynamic pattern overlay */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
            style={{
              backgroundImage: feature.pattern,
              backgroundSize: feature.patternSize
            }}
          ></div>
          
          {/* Main card with premium glass effect */}
          <div className="relative bg-white/70 backdrop-blur-xl p-7 rounded-3xl border border-white/40 shadow-xl transform transition-all duration-400 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col group-hover:bg-white/80">
            
            {/* Floating glow effect */}
            <div 
              className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-400 blur-xl -z-10"
              style={{ backgroundColor: feature.accent + '20' }}
            ></div>
            
            {/* Premium icon container */}
            <div className="relative mb-6 flex items-center justify-between">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-400 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.accent}20, ${feature.accent}40)`
                }}
              >
                {/* Icon shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span 
                  className="text-2xl relative z-10 filter drop-shadow-sm transition-all duration-300 group-hover:scale-110"
                  style={{ color: feature.accent }}
                >
                  {feature.icon}
                </span>
              </div>
              
              {/* Status indicator */}
              <div className="flex space-x-1">
                <div 
                  className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: feature.accent }}
                ></div>
                <div 
                  className="w-1 h-1 rounded-full opacity-40 group-hover:opacity-80 transition-all duration-500"
                  style={{ backgroundColor: feature.accent }}
                ></div>
              </div>
            </div>
            
            {/* Enhanced content */}
            <div className="flex-grow">
              <h3 
                className="text-lg font-bold mb-4 text-[#0C1B33] transition-all duration-300 leading-tight group-hover:tracking-wide"
                style={{ 
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {feature.title}
              </h3>
              <p className="text-[#2E2E2E] text-sm leading-relaxed group-hover:text-[#0C1B33] transition-colors duration-300 font-light">
                {feature.desc}
              </p>
            </div>
            
            {/* Progressive accent system */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div 
                  className="w-0 h-0.5 rounded-full transition-all duration-700 group-hover:w-16"
                  style={{ backgroundColor: feature.accent }}
                ></div>
                <div 
                  className="w-0 h-0.5 rounded-full transition-all duration-1000 group-hover:w-8 opacity-60"
                  style={{ backgroundColor: feature.accent }}
                ></div>
              </div>
            </div>
            
            {/* Floating micro-elements */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div 
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: feature.accent }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Elegant Footer */}
    <div className="text-center mt-20">
      <div className="inline-flex items-center space-x-4 mb-6">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#C73664]/30 rounded-full"></div>
        <div className="flex space-x-2">
          {['#C73664', '#00A3A3', '#B300B3', '#FFD700'].map((color, i) => (
            <div 
              key={i}
              className="w-3 h-3 rounded-full transform hover:scale-125 transition-all duration-300 cursor-pointer relative"
              style={{ backgroundColor: color + '60' }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: color,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '2s'
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#C73664]/30 rounded-full"></div>
      </div>
      <p className="text-[#C73664]/60 text-xs tracking-[0.25em] font-semibold uppercase">
        Sanchay Kathak Gurukul
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes mesh-float {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
      }
      33% { 
        transform: translateY(-20px) translateX(15px) rotate(1deg) scale(1.05); 
      }
      66% { 
        transform: translateY(-10px) translateX(-10px) rotate(-1deg) scale(0.95); 
      }
    }
    
    @keyframes particle-float {
      0% { 
        opacity: 0;
        transform: translateY(20px) scale(0.5);
      }
      20% { 
        opacity: 1;
        transform: translateY(0px) scale(1);
      }
      80% { 
        opacity: 1;
        transform: translateY(-20px) scale(1);
      }
      100% { 
        opacity: 0;
        transform: translateY(-40px) scale(0.5);
      }
    }
    
    @keyframes gradient-slide {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 100% 0;
      }
    }
    
    @keyframes text-shimmer {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-mesh-float {
      animation: mesh-float 10s ease-in-out infinite;
    }
    
    .animate-particle-float {
      animation: particle-float linear infinite;
    }
    
    .animate-gradient-slide {
      background-size: 200% 100%;
      animation: gradient-slide 3s ease-in-out infinite;
    }
    
    .animate-text-shimmer {
      background-size: 200% auto;
      animation: text-shimmer 3s linear infinite;
    }
    
    @keyframes wave-dance {
      0% {
        transform: translateX(0) translateY(0) rotate(0deg);
      }
      25% {
        transform: translateX(10px) translateY(-5px) rotate(1deg);
      }
      50% {
        transform: translateX(0) translateY(-10px) rotate(0deg);
      }
      75% {
        transform: translateX(-10px) translateY(-5px) rotate(-1deg);
      }
      100% {
        transform: translateX(0) translateY(0) rotate(0deg);
      }
    }
    
    @keyframes float-note {
      0%, 100% {
        transform: translateY(0px) rotate(0deg) scale(1);
        opacity: 0.4;
      }
      50% {
        transform: translateY(-20px) rotate(180deg) scale(1.1);
        opacity: 0.8;
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .animate-wave-dance {
      animation: wave-dance 8s ease-in-out infinite;
    }
    
    .animate-float-note {
      animation: float-note 12s ease-in-out infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>

     

<section 
  className="py-16 relative overflow-hidden"
  style={{ 
    background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF8F0 25%, #FFFCF7 50%, #FFF5ED 75%, #FDF9F0 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 18s ease-in-out infinite'
  }}
>
  {/* Enhanced Background Elements */}
  <div className="absolute inset-0">
    {/* Music Icons Animation */}
    <div className="absolute top-0 right-0 w-16 h-full overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-[200%] animate-musicIcons">
        <div className="w-full h-1/2 flex flex-col items-center justify-around">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-2xl opacity-15 transform rotate-12">🎵</div>
          ))}
        </div>
        <div className="w-full h-1/2 flex flex-col items-center justify-around">
          {[...Array(8)].map((_, i) => (
            <div key={i+8} className="text-2xl opacity-15 transform -rotate-6">🎵</div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Floating Blobs */}
    <div className="absolute top-20 left-16 w-72 h-72 bg-gradient-to-br from-[#C73664]/8 via-[#B300B3]/6 to-transparent rounded-full blur-3xl animate-float-slow"></div>
    <div className="absolute bottom-24 right-20 w-80 h-80 bg-gradient-to-tl from-[#00A3A3]/6 via-[#00FFF7]/8 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
    <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-[#FFD700]/5 via-[#C73664]/7 to-transparent rounded-full blur-2xl animate-float-slow animation-delay-1500"></div>
    
    {/* Subtle Background Pattern */}
    <div 
      className="absolute inset-0 opacity-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(199, 54, 100, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '200px 200px, 150px 150px'
      }}
    ></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    {/* Enhanced Header */}
    <div className="text-center mb-10">
      <div className="inline-block relative mb-3">
        <span className="inline-block px-6 py-2 bg-white/60 backdrop-blur-xl text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-[#C73664]/15 shadow-lg">
          Visual Journey
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
        <span className="block text-2xl md:text-3xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] animate-shimmer">
          Moments Captured
        </span>
        <span className="text-[#0C1B33] relative">
          In Grace & Excellence
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-[#C73664] via-[#FFD700] to-[#00A3A3] rounded-full animate-pulse"></div>
        </span>
      </h2>
      
      <p className="text-base text-[#2E2E2E] max-w-2xl mx-auto leading-relaxed font-light">
        A visual celebration of our performances, training sessions, and cultural expressions
      </p>
    </div>

    {/* Top 8 Gallery Grid */}
    <div className="gallery-grid-container mt-[7px] mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {[
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739429006284.jpeg",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430044988.jpeg",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430747623-scaled.jpeg",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739432659613.jpeg",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739431559767.jpeg",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233828980.png",
          "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750240970773.png"
        ].map((image, index) => (
          <div 
            key={index} 
            className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-[#0C1B33]/5 rounded-xl" style={{ minHeight: '220px' }}>
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div className="text-white transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-bold text-lg">Performance {index + 1}</h3>
                <p className="text-sm opacity-80">Sanchay Kathak Academy</p>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ 
                boxShadow: '0 0 25px #C100C5',
              }}
            ></div>
            
            {/* View Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C73664] to-[#C100C5] rounded-full flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* View Full Gallery Button */}
    <div className="text-center">
      <Link 
        href="/gallery"
        className="inline-block group relative px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        style={{ 
          background: 'linear-gradient(90deg, #C73664, #C100C5)',
          color: '#FDF9F0'
        }}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          style={{ background: '#FF4D6D' }}
        ></div>
        <span className="relative z-10">View Full Gallery</span>
        <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
      </Link>
    </div>
  </div>

  {/* Lightbox Implementation */}
  {isOpen && (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        className="absolute top-6 right-6 text-white text-4xl z-10 hover:text-[#FFD700] transition-colors"
        onClick={() => setIsOpen(false)}
      >
        &times;
      </button>
      
      <button 
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white z-10 w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-[#C73664] transition-colors"
        onClick={() => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)}
      >
        <span className="text-3xl">‹</span>
      </button>
      
      <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center">
        <img 
          src={galleryImages[photoIndex]} 
          alt={`Gallery image ${photoIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <button 
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white z-10 w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-[#C73664] transition-colors"
        onClick={() => setPhotoIndex((photoIndex + 1) % galleryImages.length)}
      >
        <span className="text-3xl">›</span>
      </button>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${idx === photoIndex ? 'bg-[#C100C5]' : 'bg-white/30'}`}
              onClick={() => setPhotoIndex(idx)}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )}

  <style jsx>{`
    @keyframes gradientShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    
    @keyframes float-slow {
      0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
      }
      33% {
        transform: translateY(-15px) translateX(10px) rotate(1deg) scale(1.02);
      }
      66% {
        transform: translateY(-8px) translateX(-8px) rotate(-1deg) scale(0.98);
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }
    
    @keyframes moveIcons {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-50%);
      }
    }
    
    .animate-float-slow {
      animation: float-slow 12s ease-in-out infinite;
    }
    
    .animate-shimmer {
      background-size: 200% auto;
      animation: shimmer 4s linear infinite;
    }
    
    .animate-musicIcons {
      animation: moveIcons 20s linear infinite;
    }
    
    .animation-delay-1500 {
      animation-delay: 1.5s;
    }
    
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    /* Gallery Grid Styles */
    .gallery-grid-container {
      position: relative;
      margin-top: 7px;
    }
    
    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.1);
      height: 100%;
      min-height: 220px;
      border: 1px solid rgba(199, 54, 100, 0.1);
    }
    
    .gallery-item:hover {
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
      z-index: 10;
      border-color: rgba(199, 54, 100, 0.3);
    }
    
    /* Responsive adjustments */
    @media (max-width: 1024px) {
      .gallery-grid-container {
        padding: 0 1rem;
      }
    }
    
    @media (max-width: 768px) {
      .gallery-grid-container {
        padding: 0;
      }
      
      .gallery-item {
        min-height: 200px;
      }
    }
    
    @media (max-width: 480px) {
      .gallery-item {
        min-height: 180px;
      }
      
      .gallery-grid-container {
        margin-top: 7px;
      }
    }
  `}</style>
</section>

      <section 
  className="py-6 relative overflow-hidden"
  style={{ 
    background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF8F0 25%, #FFFCF7 50%, #FFF5ED 75%, #FDF9F0 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 18s ease-in-out infinite'
  }}
>
  {/* Enhanced Background Elements with Music Animation */}
  <div className="absolute inset-0">
    {/* Music Icons Animation - Right Side */}
    <div className="absolute top-0 right-0 w-16 h-full overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-[200%] animate-musicIcons">
        {/* First set of icons */}
        <div className="w-full h-1/2 flex flex-col items-center justify-around">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-2xl opacity-15 transform rotate-12">🎵</div>
          ))}
        </div>
        {/* Second set (duplicate) */}
        <div className="w-full h-1/2 flex flex-col items-center justify-around">
          {[...Array(8)].map((_, i) => (
            <div key={i+8} className="text-2xl opacity-15 transform -rotate-6">🎵</div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="absolute top-20 left-16 w-72 h-72 bg-gradient-to-br from-[#C73664]/8 via-[#B300B3]/6 to-transparent rounded-full blur-3xl animate-float-slow"></div>
    <div className="absolute bottom-24 right-20 w-80 h-80 bg-gradient-to-tl from-[#00A3A3]/6 via-[#00FFF7]/8 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
    <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-r from-[#FFD700]/5 via-[#C73664]/7 to-transparent rounded-full blur-2xl animate-float-slow animation-delay-1500"></div>
    
    <div 
      className="absolute inset-0 opacity-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(199, 54, 100, 0.08) 0%, transparent 50%)
        `,
        backgroundSize: '200px 200px, 150px 150px'
      }}
    ></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    {/* Enhanced Header */}
    <div className="text-center mb-6">
      <div className="inline-block relative mb-3">
        <span className="inline-block px-6 py-2 bg-white/60 backdrop-blur-xl text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-[#C73664]/15 shadow-lg">
          Recognition & Awards
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
        <span className="block text-2xl md:text-3xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] animate-shimmer">
          Awards That Speak
        </span>
        <span className="text-[#0C1B33] relative">
          Our Excellence
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-[#C73664] via-[#FFD700] to-[#00A3A3] rounded-full animate-pulse"></div>
        </span>
      </h2>
      
      <p className="text-base text-[#2E2E2E] max-w-2xl mx-auto leading-relaxed font-light">
        Celebrating decades of excellence, recognition, and cultural preservation
      </p>
    </div>

    {/* First Row - Academy Achievements & Founder's Accolades */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
      {/* Academy Achievements Card */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-br from-[#C73664]/20 via-[#FFD700]/15 to-[#00A3A3]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-[#0C1B33] to-[#1a2a4a] p-6 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-102 group-hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mr-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-2xl">🏆</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#FFD700] group-hover:text-white transition-colors duration-300">Academy Achievements</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full mt-1"></div>
            </div>
          </div>
          
          <ul className="space-y-4">
            {[
              'First Kathak Academy in Pimpri-Chinchwad (1990)',
              '30+ Nritya Visharad graduates',
              'Students winning international competitions',
              'Featured at prestigious platforms like Asha Bhosale Puraskar'
            ].map((achievement, index) => (
              <li key={index} className="flex items-start group/item">
                <div className="flex-shrink-0 w-6 h-6 bg-[#FFD700]/20 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#FFD700]/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                </div>
                <span className="text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transition-all duration-700 group-hover:w-full"></div>
        </div>
      </div>

      {/* Founder's Accolades Card */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-br from-[#C73664]/20 via-[#B300B3]/15 to-[#00A3A3]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-[#0C1B33] to-[#2a1a4a] p-6 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-102 group-hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-2xl flex items-center justify-center mr-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-2xl">🥇</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#FFD700] group-hover:text-white transition-colors duration-300">Founder's Accolades</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"></div>
            </div>
          </div>
          
          <ul className="space-y-4">
            {[
              'Adarsh Nrutya Shikshak Puraskar (2008)',
              'Sangeet Kalopasak Puraskar (2016)',
              'Kala Rang Puraskar (2018)',
              'Featured on Doordarshan and major festivals'
            ].map((accolade, index) => (
              <li key={index} className="flex items-start group/item">
                <div className="flex-shrink-0 w-6 h-6 bg-[#C73664]/20 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-[#C73664]/40 transition-all duration-300">
                  <div className="w-2 h-2 bg-[#C73664] rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                </div>
                <span className="text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {accolade}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] transition-all duration-700 group-hover:w-full"></div>
        </div>
      </div>
    </div>

    {/* Second Row - Enhanced Media Coverage Slider */}
    <div className="relative">
      {/* Media coverage card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] rounded-xl flex items-center justify-center mr-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6">
              <span className="text-xl">📺</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0C1B33] mb-1">Media Coverage & Recognition</h3>
              <p className="text-[#2E2E2E] text-sm">Featured in news and cultural platforms</p>
            </div>
          </div>
          
          {/* Enhanced slider controls */}
          <div className="flex space-x-2">
            <button className="slider-prev w-9 h-9 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
              <span className="text-sm">‹</span>
            </button>
            <button className="slider-next w-9 h-9 bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
              <span className="text-sm">›</span>
            </button>
          </div>
        </div>

        {/* Premium Image Slider - Fixed Structure */}
        <div className="media-slider-container relative overflow-hidden rounded-xl mb-5 h-[380px] bg-[#0C1B33]/5">
          <div className="media-slider-wrapper w-full h-full overflow-hidden">
            <div className="media-slider flex h-full transition-transform duration-700 ease-in-out">
              {[
                { 
                  title: "Cultural Recognition Award", 
                  desc: "Prestigious honor for cultural preservation",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20250305-WA0030.jpg"
                },
                { 
                  title: "International Performance", 
                  desc: "Global stage recognition",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20231007-WA0047.jpg"
                },
                { 
                  title: "Excellence in Arts Award", 
                  desc: "Outstanding contribution to dance",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20230412-WA0087.jpg"
                },
                { 
                  title: "Media Coverage Feature", 
                  desc: "National television highlight",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_20240720_131132_031.webp"
                },
                { 
                  title: "Traditional Festival Performance", 
                  desc: "Cultural celebration showcase",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20190903-WA0000.jpg"
                },
                { 
                  title: "Achievement Recognition", 
                  desc: "Distinguished service award",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20191005-WA0038.jpg"
                },
                { 
                  title: "Student Success Story", 
                  desc: "Competition victory celebration",
                  image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_20230713_145409_280.webp"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="media-slide flex-shrink-0 w-full h-full relative"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-xl shadow-xl group">
                    {/* Image container with proper aspect ratio */}
                    <div className="relative w-full h-full bg-gradient-to-br from-[#0C1B33]/10 to-[#0C1B33]/20">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    
                    {/* Enhanced overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B33]/90 via-[#0C1B33]/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Premium content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center mb-2">
                          <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2 animate-pulse"></div>
                          <p className="font-semibold text-lg tracking-wide">{item.title}</p>
                        </div>
                        <p className="opacity-0 group-hover:opacity-100 text-sm leading-relaxed transition-opacity duration-500 delay-200 max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      <div className="w-3 h-3 bg-[#FFD700] rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Award icon overlay */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-8 h-8 bg-[#FFD700]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-[#0C1B33] text-sm">🏆</span>
                      </div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FFD700]/70 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FFD700]/70 rounded-br-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Slider pagination */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {[...Array(7)].map((_, i) => (
              <button 
                key={i} 
                className={`slider-dot w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-gradient-to-r from-[#C73664] to-[#B300B3] scale-125' : 'bg-white/60'}`}
                aria-label={`Go to slide ${i+1}`}
              ></button>
            ))}
          </div>
          
          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center">
            <div className="w-2 h-2 bg-[#00FFF7] rounded-full mr-2 animate-pulse"></div>
            Auto Play
          </div>
        </div>

        {/* Recent highlights list */}
        <div className="bg-gradient-to-r from-[#C73664]/5 via-[#00A3A3]/5 to-[#B300B3]/5 p-4 rounded-xl">
          <h4 className="font-bold text-[#0C1B33] mb-3 flex items-center">
            <span className="text-lg mr-2">✨</span>
            Notable Achievements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              'Performance at Thrissur Vishnumaya Devasthan, Kerala (2024)',
              'World Record recognitions in cultural arts',
              'International performances across Europe and Asia'
            ].map((highlight, index) => (
              <div key={index} className="flex items-start group hover:bg-white/30 p-2 rounded-lg transition-all duration-300">
                <div className="flex-shrink-0 w-5 h-5 bg-[#C73664] rounded-full flex items-center justify-center mt-0.5 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <span className="text-[#0C1B33] text-sm leading-relaxed group-hover:text-[#C73664] transition-colors duration-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradientShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    
    @keyframes float-slow {
      0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
      }
      33% {
        transform: translateY(-15px) translateX(10px) rotate(1deg) scale(1.02);
      }
      66% {
        transform: translateY(-8px) translateX(-8px) rotate(-1deg) scale(0.98);
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }
    
    @keyframes moveIcons {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-50%);
      }
    }
    
    .animate-float-slow {
      animation: float-slow 12s ease-in-out infinite;
    }
    
    .animate-shimmer {
      background-size: 200% auto;
      animation: shimmer 4s linear infinite;
    }
    
    .animate-musicIcons {
      animation: moveIcons 20s linear infinite;
    }
    
    .animation-delay-1500 {
      animation-delay: 1.5s;
    }
    
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    /* New slider styles with fixed container */
    .media-slider-container {
      position: relative;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 380px; /* Fixed height */
    }

    .media-slider-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
    }

    .media-slider {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 700%; /* 7 slides x 100% */
      height: 100%;
      animation: slideShow 35s infinite;
    }

    .media-slide {
      position: relative;
      width: calc(100% / 7); /* Each slide takes 1/7 of total width */
      height: 100%;
      transition: all 0.8s ease;
      transform-origin: center;
    }

    @keyframes slideShow {
      0%, 12% { transform: translateX(0%); }
      14%, 26% { transform: translateX(-14.285%); }
      28%, 40% { transform: translateX(-28.571%); }
      42%, 54% { transform: translateX(-42.857%); }
      56%, 68% { transform: translateX(-57.143%); }
      70%, 82% { transform: translateX(-71.429%); }
      84%, 96% { transform: translateX(-85.714%); }
      98%, 100% { transform: translateX(0%); }
    }

    /* Hover pause animation */
    .media-slider-container:hover .media-slider {
      animation-play-state: paused;
    }

    /* Slider controls hover effect */
    .slider-prev:hover, .slider-next:hover {
      transform: scale(1.15);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .slider-prev {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      z-index: 20;
    }

    .slider-next {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      z-index: 20;
    }

    /* Slider dot hover effect */
    .slider-dot:hover {
      transform: scale(1.3);
      background: linear-gradient(to right, #C73664, #B300B3);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .media-slider-container {
        height: 320px;
      }
      
      .slider-prev, .slider-next {
        width: 32px;
        height: 32px;
        font-size: 0.875rem;
      }
    }
  `}</style>
</section>

     <section 
  className="py-20 relative overflow-hidden"
  style={{ 
    background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 25%, #FDF9F0 50%, #FFF0E5 75%, #FDF9F0 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 18s ease-in-out infinite'
  }}
>
  {/* Floating Elements */}
  <div className="absolute inset-0 z-0">
    {/* Musical Notes */}
    {[...Array(20)].map((_, i) => (
      <div 
        key={i}
        className="absolute text-[#C73664] text-3xl opacity-10"
        style={{
          animation: `floatNote ${8 + Math.random() * 10}s linear infinite ${Math.random() * 5}s`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${1 + Math.random() * 2}rem`,
        }}
      >
        {Math.random() > 0.5 ? '♫' : '♪'}
      </div>
    ))}
    
    {/* Gradient Bubbles */}
    <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-gradient-to-br from-[#C73664]/10 via-[#B300B3]/8 to-transparent rounded-full blur-3xl animate-float-slow"></div>
    <div className="absolute bottom-1/3 right-[10%] w-72 h-72 bg-gradient-to-tl from-[#00A3A3]/8 via-[#00FFF7]/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
    
    {/* Floating Sparkles */}
    {[...Array(30)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full animate-ping"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          backgroundColor: ['#FFD700', '#C73664', '#00A3A3', '#B300B3'][Math.floor(Math.random() * 4)],
          opacity: 0.2,
          animation: `floatParticle ${15 + Math.random() * 15}s infinite linear`,
          animationDelay: `${Math.random() * 5}s`
        }}
      ></div>
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block relative mb-4">
        <span className="relative inline-block px-6 py-2 bg-[#C73664]/10 backdrop-blur-sm text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-[#C73664]/20 shadow-sm">
          Student Success Stories
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        <span className="text-[#0C1B33]">Transforming Passion </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3]">
          Into Excellence
        </span>
      </h2>
      
      <div className="w-32 h-0.5 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] mx-auto rounded-full mb-4"></div>
      <p className="text-[#2E2E2E]/90 max-w-2xl mx-auto">
        Hear from our students who have excelled in Kathak and beyond
      </p>
    </div>

    {/* Testimonial Carousel */}
    <div className="relative overflow-hidden py-8">
      {/* Carousel Track */}
      <div className="flex transition-transform duration-700 ease-in-out">
        {[
          {
            id: 1,
            name: "Priya Sharma",
            role: "National Kathak Champion 2023",
            quote: "Sanchay Kathak transformed my understanding of classical dance. The personalized attention helped me win the national championship!",
            avatar: "P"
          },
          {
            id: 2,
            name: "Rohan Deshpande",
            role: "International Performer",
            quote: "From local stages to international festivals, Sanchay Kathak gave me the confidence and skills to represent our culture globally.",
            avatar: "R"
          },
          {
            id: 3,
            name: "Ananya Patel",
            role: "Kathak Visharad Graduate",
            quote: "The academy's holistic approach helped me complete my Visharad while maintaining academic excellence. Truly life-changing!",
            avatar: "A"
          },
          {
            id: 4,
            name: "Neha Joshi",
            role: "Cultural Ambassador",
            quote: "Thanks to Sanchay Kathak, I've performed in 5 countries and became a cultural ambassador for Indian classical arts.",
            avatar: "N"
          }
        ].map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4 transition-all duration-500 group"
          >
            <div className="relative h-full bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#C73664] to-[#B300B3] rounded-bl-full"></div>
              
              {/* Content */}
              <div className="p-6 pt-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 fill-[#FFD700] mr-1 group-hover:animate-pulse"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div className="mb-6">
                  <div className="absolute top-6 left-6 text-6xl opacity-10 text-[#C73664] font-serif">"</div>
                  <p className="text-[#2E2E2E] leading-relaxed relative z-10 italic">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex items-center pt-4 border-t border-[#E2E8F0]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C73664] to-[#B300B3] flex items-center justify-center text-white font-bold text-lg mr-4 transform transition-all duration-500 group-hover:scale-110">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#0C1B33] group-hover:text-[#C73664] transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#00A3A3]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#FFFAF5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[1, 2, 3, 4].map((dot, index) => (
          <button 
            key={index}
            className="w-3 h-3 rounded-full bg-[#C73664]/30 transition-all duration-300 hover:bg-[#C73664] focus:outline-none"
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradientShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    
    @keyframes float-slow {
      0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
      }
      33% {
        transform: translateY(-8px) translateX(5px) rotate(1deg) scale(1.01);
      }
      66% {
        transform: translateY(-4px) translateX(-4px) rotate(-0.5deg) scale(0.99);
      }
    }
    
    @keyframes floatNote {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0.1;
      }
      50% {
        transform: translateY(-15px) translateX(5px) rotate(5deg);
        opacity: 0.2;
      }
      100% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0.1;
      }
    }
    
    @keyframes floatParticle {
      0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0.2;
      }
      50% {
        transform: translateY(-20px) translateX(10px) scale(1.2);
        opacity: 0.3;
      }
      100% {
        transform: translateY(-40px) translateX(20px) scale(1.5);
        opacity: 0;
      }
    }
    
    .animate-float-slow {
      animation: float-slow 15s ease-in-out infinite;
    }
  `}</style>
</section>
     

      <ContactSection />

      
    </Layout>
  )
}

