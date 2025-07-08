// pages/about.js
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('journey');
  const [visibleSection, setVisibleSection] = useState('');

  useEffect(() => {
    // Background animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.2 + 0.1,
        color: `rgba(${Math.floor(Math.random() * 50 + 180)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.random() * 0.1 + 0.05})`
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(253, 249, 240, 0.95)';
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
          particle.size = Math.random() * 3 + 1;
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    }
    
    drawParticles();
    
    // Resize handler
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

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const tabContent = {
    journey: {
      title: "Our Journey",
      content: [
        "Founded in 1990 by Guru Vaishali Palsule-Dhongade, Sanchay Kathak Nrutya Academy began as the first dedicated Kathak academy in Pimpri-Chinchwad. What started as a small initiative has blossomed into a renowned institution with three branches training hundreds of students.",
        "Over three decades, we've witnessed the transformation of countless students who started as curious beginners and evolved into accomplished performers, some achieving international recognition.",
        "With 30+ Nritya Visharads and 2 Alankars produced, our success is measured not just in awards but in the lives touched through dance."
      ],
      icon: "🕰️"
    },
    philosophy: {
      title: "Our Philosophy",
      content: [
        "At Sanchay Kathak, we believe that dance is not merely movement but a spiritual journey that connects the dancer with their inner self and cultural heritage. Our teaching methodology combines traditional guru-shishya parampara with modern pedagogical approaches.",
        "We emphasize holistic development, nurturing not just technical skills but also artistic expression, cultural understanding, and personal growth.",
        "Every student is treated as an individual with unique potential, ensuring each dancer can flourish according to their capabilities and aspirations."
      ],
      icon: "💭"
    },
    tradition: {
      title: "Preserving Tradition",
      content: [
        "Kathak carries centuries of cultural wisdom and artistic excellence. At Sanchay Kathak, we are committed guardians of this precious heritage.",
        "Our curriculum encompasses all three major Gharanas - Lucknow, Banaras, and Jaipur - ensuring comprehensive training in diverse styles.",
        "We regularly organize cultural programs, festivals, and workshops where tradition meets contemporary expression, keeping the art form alive for future generations."
      ],
      icon: "📜"
    }
  };

  const achievements = [
    {
      year: "1990",
      title: "Foundation",
      desc: "Established as the first Kathak academy in Pimpri-Chinchwad",
      icon: "🏛️",
      color: "#C73664"
    },
    {
      year: "1995",
      title: "Recognition",
      desc: "First batch of students complete Nritya Visharad",
      icon: "🎓",
      color: "#00A3A3"
    },
    {
      year: "2000",
      title: "Expansion", 
      desc: "Opened second branch in Nigdi",
      icon: "🌟",
      color: "#B300B3"
    },
    {
      year: "2008",
      title: "Award",
      desc: "Founder receives Adarsh Nrutya Shikshak Puraskar",
      icon: "🏆",
      color: "#FFD700"
    },
    {
      year: "2010",
      title: "Growth",
      desc: "Third branch established in Pradhikaran",
      icon: "📈",
      color: "#C73664"
    },
    {
      year: "2015",
      title: "International",
      desc: "Students begin performing on global stages",
      icon: "🌍",
      color: "#00A3A3"
    },
    {
      year: "2020",
      title: "Digital",
      desc: "Launched online classes during pandemic",
      icon: "💻",
      color: "#B300B3"
    },
    {
      year: "2025",
      title: "Legacy",
      desc: "35 years of excellence in Kathak education",
      icon: "👑",
      color: "#FFD700"
    }
  ];

  const founders = [
    {
      name: "Guru Vaishali Palsule-Dhongade",
      title: "Founder & Director",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739432659613.jpeg",
      qualifications: [
        "M.A. in Kathak from Lalit Kala Kendra",
        "Trained in Banaras, Lucknow, and Jaipur Gharanas",
        "Multi-instrumentalist: tabla, harmonium, violin",
      ],
      awards: [
        "Adarsh Nrutya Shikshak Puraskar (2008)",
        "Kala Rang Puraskar (2018)",
        "Sangeet Kalopasak Puraskar (2016)"
      ],
      description: "A renowned Kathak exponent whose artistry embodies tradition, precision, and grace. As a performer, teacher, and choreographer, she has mesmerized audiences across India and abroad with productions like Krishnayan and Moods of Kathak."
    },
    {
      name: "Rajashree Dhongade",
      title: "Senior Instructor",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
      qualifications: [
        "M.A. in Kathak from Pune University",
        "Trained under Guru Vaishali & Pt. Rajendra Gangani",
        "UGC-NET qualified with 95% score",
        "Visharad & Nrityalankar with 1st Rank"
      ],
      awards: [
        "Kalarang Puraskar",
        "Nrityavishkar Award",
        "Best Choreographer (ABSS)"
      ],
      description: "One of the brightest young talents in Kathak today. Known for poetic abhinaya and fusion choreographies, she has performed at prestigious festivals globally. Also contributes as an examiner, dance therapist, and kirtankar."
    }
  ];

  const branches = [
    {
      name: "Chinchwad Branch",
      address: "Near Chinchwad Ganapati Temple, Chinchwad",
      timings: "Mon-Sat: 5:00 PM - 8:00 PM",
      contact: "+91 9011910412",
    },
    {
      name: "Nigdi Branch", 
      address: "Sector 25, Nigdi, Pune",
      timings: "Mon-Sat: 4:00 PM - 7:00 PM",
      contact: "+91 7507234753",
    },
    {
      name: "Ravet Branch",
      address: "Sector 17, Ravet, Nigdi",
      timings: "Mon-Sat: 6:00 PM - 9:00 PM", 
      contact: "+91 9011910412",
    }
  ];

  const values = [
    {
      icon: "🕉️",
      title: "Tradition",
      description: "Preserving the authentic essence of Kathak while adapting to modern learning methods",
      color: "#C73664"
    },
    {
      icon: "🎓",
      title: "Excellence",
      description: "Committed to the highest standards of training and artistic development",
      color: "#00A3A3"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive family of dancers, teachers, and cultural enthusiasts",
      color: "#B300B3"
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "Nurturing each student's individual potential and artistic journey",
      color: "#FFD700"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>About Us | Sanchay Kathak Nrutya Academy - 35 Years of Dance Excellence</title>
        <meta name="description" content="Learn about Sanchay Kathak Academy's 35-year journey, our founders, philosophy, and commitment to preserving Kathak traditions while nurturing future artists." />
        <style jsx global>{`
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
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
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
          
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
          }
          
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards;
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-pulse-gentle {
            animation: pulse 3s ease-in-out infinite;
          }
          
          .animate-shimmer {
            background-size: 200% auto;
            animation: shimmer 3s linear infinite;
          }
          
          .parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #C73664, #B300B3, #00A3A3);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
        `}</style>
      </Head>

      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>

      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ 
          background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 25%, #FFFCF7 50%, #FFF8F0 75%, #FDF9F0 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease-in-out infinite',
          backgroundImage: 'radial-gradient(#C73664 0.5px, transparent 0.5px), radial-gradient(#B300B3 0.5px, #FDF9F0 0.5px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#C73664]/10 to-transparent rounded-full blur-3xl animate-pulse-gentle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#00A3A3]/8 to-transparent rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 bg-white/60 backdrop-blur-xl text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-[#C73664]/20 shadow-lg mb-6">
              Our Story
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block text-[#0C1B33] mb-4">About</span>
              <span className="block gradient-text">Sanchay Kathak</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl md:text-2xl text-[#2E2E2E] max-w-4xl mx-auto leading-relaxed mb-10">
              For over <span className="font-bold text-[#C73664]">35 years</span>, we have been the guardians of Kathak tradition,
              nurturing artists who carry forward India's rich cultural heritage with passion and precision.
            </p>
            <p className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed mb-6">
              It was upon the guidance and encouragement of Guru Dr. Pandit Nandkishore Kapote ji that Guru Vaishali ji began conducting Kathak classes in Chinchwad, aiming to sow the seeds of classical dance in this culturally deprived landscape.
            </p>
            <p className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed mb-6">
              The name "Sanchay" was graciously bestowed in 1993 by none other than Guru Pandita Rohini Bhate ji herself. The name represents the accumulation of training Guru Vaishali ji received from Banaras, Lucknow and Jaipur traditions, making the academy a true treasury of Kathak heritage.
            </p>
            <p className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed mb-6">
              With a deep resolve to awaken the love for Kathak in the local community, Guru Vaishali ji worked tirelessly to foster excellence and stage confidence in her disciples.
            </p>
            <p className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed mb-10">
              Today, Sanchay Kathak Nritya Academy proudly boasts 40 students who have achieved the title of Nritya Visharad and 2 students who have earned Nritya Alankar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#founders"
                className="group px-8 py-4 bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Meet Our Gurus
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="#journey"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#C73664] text-[#C73664] rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#C73664] hover:text-white transform hover:-translate-y-1 flex items-center justify-center"
              >
                Our Journey
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#C73664] flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-[#C73664] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section 
        id="founders"
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8F0 50%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#C73664]/10 text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Meet Our Gurus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              The Visionaries Behind 
              <span className="gradient-text"> Our Legacy</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C73664] to-[#00A3A3] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-20">
            {founders.map((founder, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#C73664]/20 to-[#00A3A3]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center animate-pulse-gentle">
                      <span className="text-sm">🏆</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#C73664] rounded-full animate-float"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0C1B33] mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-[#C73664] font-semibold text-lg mb-4">
                        {founder.title}
                      </p>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full"></div>
                    </div>
                    
                    <p className="text-[#2E2E2E] leading-relaxed text-lg">
                      {founder.description}
                    </p>
                    
                    {/* Qualifications */}
                    <div className="bg-gradient-to-br from-[#C73664]/10 to-[#00A3A3]/10 p-6 rounded-xl border border-[#C73664]/10">
                      <h4 className="font-bold text-[#0C1B33] mb-3 flex items-center">
                        <span className="text-[#C73664] mr-2">🎓</span>
                        Qualifications
                      </h4>
                      <ul className="space-y-2">
                        {founder.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-[#C73664] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[#2E2E2E]">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Awards */}
                    <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#C73664]/5 p-6 rounded-xl border border-[#FFD700]/20">
                      <h4 className="font-bold text-[#0C1B33] mb-3 flex items-center">
                        <span className="text-[#FFD700] mr-2">🏆</span>
                        Awards & Recognition
                      </h4>
                      <ul className="space-y-2">
                        {founder.awards.map((award, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[#2E2E2E]">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Philosophy Section */}
      <section 
        id="journey"
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 50%, #FDF9F0 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#00A3A3]/10 text-[#00A3A3] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Three Decades of 
              <span className="gradient-text"> Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00A3A3] to-[#C73664] mx-auto rounded-full"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white/60 backdrop-blur-sm rounded-xl p-2 shadow-lg">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white shadow-lg'
                    : 'text-[#2E2E2E] hover:bg-white/60'
                }`}
              >
                <span className="mr-2">{tabContent[tab].icon}</span>
                {tabContent[tab].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-[#C73664]/5 to-[#00A3A3]/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/50">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <span className="text-2xl">{tabContent[activeTab].icon}</span>
                </div>
              </div>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                {tabContent[activeTab].content.map((paragraph, index) => (
                  <div 
                    key={index}
                    className="flex items-start"
                  >
                    <div className="w-3 h-3 bg-[#C73664] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-[#2E2E2E] leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        id="timeline"
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8F0 50%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#B300B3]/10 text-[#B300B3] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Milestones in Our 
              <span className="gradient-text"> Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B300B3] to-[#FFD700] mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Modern Timeline Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Card */}
                  <div 
                    className="h-full rounded-2xl p-6 shadow-xl group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ 
                      background: `linear-gradient(135deg, ${achievement.color}10, ${achievement.color}05)`,
                      border: `2px solid ${achievement.color}20`
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3 shadow-md"
                          style={{ backgroundColor: achievement.color }}
                        >
                          {achievement.icon}
                        </div>
                        <div>
                          <div 
                            className="text-xl font-bold"
                            style={{ color: achievement.color }}
                          >
                            {achievement.year}
                          </div>
                          <h3 className="font-bold text-[#0C1B33]">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[#2E2E2E] leading-relaxed flex-grow">
                        {achievement.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section 
        id="branches"
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 50%, #FDF9F0 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#00A3A3]/10 text-[#00A3A3] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Three Branches, 
              <span className="gradient-text"> One Vision</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00A3A3] to-[#C73664] mx-auto rounded-full mb-6"></div>
            <p className="text-[#2E2E2E] max-w-2xl mx-auto text-lg">
              Strategically located across the Pimpri-Chinchwad region to serve our community better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-xl border border-[#C73664]/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Branch Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0C1B33] mb-2 group-hover:text-[#C73664] transition-colors">
                    {branch.name}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>
                
                {/* Location Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A3A3]/20 to-[#C73664]/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#00A3A3]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#00A3A3]/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-[#00A3A3]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#0C1B33] text-sm">Address</p>
                      <p className="text-[#2E2E2E] text-sm">{branch.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#B300B3]/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-[#B300B3]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#0C1B33] text-sm">Timings</p>
                      <p className="text-[#2E2E2E] text-sm">{branch.timings}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#0C1B33] text-sm">Contact</p>
                      <p className="text-[#2E2E2E] text-sm">{branch.contact}</p>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <div className="flex justify-between items-center" />
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C73664]/5 to-[#00A3A3]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section 
        id="vision"
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8F0 50%, #FFFFFF 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-[#C73664]/10 to-[#B300B3]/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-[#C73664]/10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl text-white">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C1B33] mb-2">Our Vision</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] mx-auto rounded-full"></div>
                </div>
                
                <p className="text-[#2E2E2E] leading-relaxed text-lg text-center">
                  To be the leading institution for Kathak education, preserving the authenticity of this classical art form 
                  while making it accessible to contemporary learners. We envision a world where Kathak continues to inspire 
                  and connect people across cultures and generations.
                </p>
                
                <div className="mt-8 flex justify-center space-x-4">
                  {['🎭', '🌟', '🎵'].map((icon, index) => (
                    <div 
                      key={index}
                      className="w-12 h-12 bg-gradient-to-r from-[#C73664]/20 to-[#B300B3]/20 rounded-xl flex items-center justify-center animate-pulse-gentle"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <span className="text-xl">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-[#00A3A3]/10 to-[#00FFF7]/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-[#00A3A3]/10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl text-white">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C1B33] mb-2">Our Mission</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] mx-auto rounded-full"></div>
                </div>
                
                <ul className="space-y-4 text-[#2E2E2E]">
                  {[
                    "Provide authentic and comprehensive Kathak training across all Gharanas",
                    "Foster artistic excellence while maintaining cultural integrity",
                    "Create performance opportunities for students at local and international levels",
                    "Develop confident performers who can carry forward the tradition",
                    "Build a community of Kathak enthusiasts and practitioners"
                  ].map((mission, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#00A3A3] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 flex justify-center space-x-4">
                  {['🏆', '🌍', '💫'].map((icon, index) => (
                    <div 
                      key={index}
                      className="w-12 h-12 bg-gradient-to-r from-[#00A3A3]/20 to-[#00FFF7]/20 rounded-xl flex items-center justify-center animate-pulse-gentle"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <span className="text-xl">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        id="values"
        className="py-20 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 50%, #FDF9F0 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#FFD700]/20 text-[#B8860B] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              What We 
              <span className="gradient-text"> Stand For</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#C73664] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: value.color + '20' }}
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  
                  {/* Floating Ring */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                    style={{ borderColor: value.color + '40' }}
                  ></div>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>
                <p className="text-[#2E2E2E] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}