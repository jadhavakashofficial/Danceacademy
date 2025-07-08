// pages/achievements.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Achievements() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAward, setSelectedAward] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const academicMilestones = [
    {
      id: 1,
      title: "30+ Nritya Visharad Graduates",
      description: "Students who have mastered the comprehensive Kathak curriculum",
      color: "#FFD700",
      count: "30+",
      category: "academic"
    },
    {
      id: 2,
      title: "2 Nritya Alankar Achievers",
      description: "The highest level of classical dance certification",
      color: "#C73664",
      count: "2",
      category: "academic"
    },
    {
      id: 3,
      title: "Premier Institution Affiliations",
      description: "ABGMV, Tilak Maharashtra Vidyapeeth, Dr. D.Y. Patil College,Lalit Kala Kendra Pune Univercity",
      color: "#00A3A3",
      count: "4+",
      category: "academic"
    }
  ];

  const internationalPerformances = [
    {
      id: 1,
      country: "Singapore",
      event: "ABSS Cultural Festival",
      year: "2023-24",
      image: "🇸🇬",
      description: "Showcased authentic Kathak at the premier cultural platform"
    },
    {
      id: 2,
      country: "Bangkok",
      event: "International Dance Competition",
      year: "2023",
      image: "🇹🇭",
      description: "Won multiple awards in classical dance categories"
    },
    {
      id: 3,
      country: "Germany",
      event: "European Culture Week",
      year: "2022",
      image: "🇩🇪",
      description: "Represented Indian classical arts to European audiences"
    },
    {
      id: 4,
      country: "Austria",
      event: "Vienna Arts Festival",
      year: "2022",
      image: "🇦🇹",
      description: "Cultural exchange through traditional dance"
    },
    {
      id: 5,
      country: "Netherlands",
      event: "Amsterdam Cultural Center",
      year: "2021",
      image: "🇳🇱",
      description: "Cross-cultural performance celebrating diversity"
    },
    {
      id: 6,
      country: "Paris",
      event: "Festival of India",
      year: "2021",
      image: "🇫🇷",
      description: "Mesmerized Parisian audiences with classical elegance"
    }
  ];

  const vaishaliAwards = [
    {
      id: 1,
      title: "Adarsh Nrutya Shikshak Puraskar",
      year: "2008",
      organization: "Lion's Club",
      description: "Recognition for excellence in dance education",
      category: "vaishali"
    },
    {
      id: 2,
      title: "Yuva Kathak Nrutya Kalakar",
      year: "2009",
      organization: "Presented by Pt. Ajay Chakraborty",
      description: "Young artist award for outstanding contribution",
      category: "vaishali"
    },
    {
      id: 3,
      title: "Sangeet Kalopasak Puraskar",
      year: "2016",
      organization: "Cultural Council",
      description: "Honoring dedication to classical music and dance",
      category: "vaishali"
    },
    {
      id: 4,
      title: "Kala Rang Puraskar",
      year: "2018",
      organization: "Arts Foundation",
      description: "Excellence in cultural preservation and innovation",
      category: "vaishali"
    },
    {
      id: 5,
      title: "Kalarpan Puraskar",
      year: "2019",
      organization: "Maharashtra Cultural Board",
      description: "Lifetime contribution to performing arts",
      category: "vaishali"
    }
  ];

  const rajashreeAwards = [
    {
      id: 1,
      title: "Kalarang Puraskar",
      year: "2018",
      organization: "Cultural Academy",
      description: "Recognition for artistic innovation",
      category: "rajashree"
    },
    {
      id: 2,
      title: "Nrityavishkar Award",
      year: "2019",
      organization: "Dance Innovation Council",
      description: "Excellence in choreographic creativity",
      category: "rajashree"
    },
    {
      id: 3,
      title: "Best Choreographer",
      year: "2024",
      organization: "ABSS International",
      description: "Outstanding choreographic achievement",
      category: "rajashree"
    },
    {
      id: 4,
      title: "Varshant Sitara Puraskar",
      year: "2021",
      organization: "Kalapini Foundation",
      description: "Annual recognition for rising stars",
      category: "rajashree"
    },
    {
      id: 5,
      title: "Nehru Yuva Kendra Champion",
      year: "2020-22",
      organization: "NYK",
      description: "Three consecutive years of excellence",
      category: "rajashree"
    }
  ];

  const recordAchievements = [
    {
      id: 1,
      title: "Limca Book of Records",
      description: "Featured for exceptional dance performances",
      color: "#FF6B35"
    },
    {
      id: 2,
      title: "Universal Records Forum",
      description: "International recognition for cultural contribution",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "World Records Book of India",
      description: "National acknowledgment of artistic excellence",
      color: "#45B7D1"
    }
  ];

  const choreographicWorks = [
    { title: "Krishnayan", theme: "Divine Love", color: "#C73664" },
    { title: "Nritya Sarita", theme: "Dance River", color: "#00A3A3" },
    { title: "Kathak ke Rang Radha ke Sang", theme: "Colors of Kathak", color: "#B300B3" },
    { title: "Moods of Kathak", theme: "Emotional Journey", color: "#FFD700" },
    { title: "Anadi Mi Anant Mi", theme: "Eternal Self", color: "#FF6B35" },
    { title: "Kautuk", theme: "Wonder", color: "#4ECDC4" },
    { title: "Nrutyonmesh", theme: "Dance Ecstasy", color: "#45B7D1" },
    { title: "Kalakar Ghadatana", theme: "Artist's Journey", color: "#96CEB4" }
  ];

  const prestigiousPlatforms = [
    "Doordarshan Features",
    "Pune Festival (3 years)",
    "Yuva Kathak Mahotsav",
    "Indo-Asian Festival",
    "Asha Bhosale Puraskar (12 years)",
    "Akhand Swaryadnya",
    "Savarkar Sangeet Mahotsav",
    "Swar Sagar Mahotsav",
    "Bharat Ratna Pt. Bhimsen Joshi Mahotsav",
    "Thrissur Vishnumaya Devasthan"
  ];

  const filterCategories = [
    { id: 'all', label: 'All Awards',  },
    { id: 'vaishali', label: 'Vaishali Awards',  },
    { id: 'rajashree', label: 'Rajashree Awards',  }
  ];

  const getAllAwards = () => {
    return [...vaishaliAwards, ...rajashreeAwards];
  };

  const getFilteredAwards = () => {
    const allAwards = getAllAwards();
    if (activeCategory === 'all') return allAwards;
    return allAwards.filter(award => award.category === activeCategory);
  };

  if (!mounted) return null;

  return (
    <Layout>
      <Head>
        <title>Achievements | Sanchay Kathak Academy - Awards, Records & Recognition</title>
        <meta name="description" content="Celebrating 35 years of excellence: International performances, prestigious awards, world records, and academic achievements at Sanchay Kathak Academy." />
        <style jsx global>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
            50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4); }
          }
          
          @keyframes rotate-3d {
            0% { transform: rotateY(0deg) rotateX(0deg); }
            25% { transform: rotateY(90deg) rotateX(10deg); }
            50% { transform: rotateY(180deg) rotateX(0deg); }
            75% { transform: rotateY(270deg) rotateX(-10deg); }
            100% { transform: rotateY(360deg) rotateX(0deg); }
          }
          
          @keyframes magical-border {
            0% { border-image: linear-gradient(45deg, #FFD700, #C73664, #00A3A3, #B300B3) 1; }
            25% { border-image: linear-gradient(135deg, #C73664, #00A3A3, #B300B3, #FFD700) 1; }
            50% { border-image: linear-gradient(225deg, #00A3A3, #B300B3, #FFD700, #C73664) 1; }
            75% { border-image: linear-gradient(315deg, #B300B3, #FFD700, #C73664, #00A3A3) 1; }
            100% { border-image: linear-gradient(45deg, #FFD700, #C73664, #00A3A3, #B300B3) 1; }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes bounce-in {
            0% { transform: scale(0) rotate(180deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(90deg); opacity: 0.8; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          
          .shimmer-text {
            background: linear-gradient(135deg, #FFD700, #C73664, #00A3A3, #B300B3);
            background-size: 300% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
          
          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .rotate-3d {
            animation: rotate-3d 10s linear infinite;
            transform-style: preserve-3d;
          }
          
          .magical-border {
            border: 3px solid;
            animation: magical-border 3s linear infinite;
          }
          
          .twinkle {
            animation: twinkle 2s ease-in-out infinite;
          }
          
          .bounce-in {
            animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .glass-morphism {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .hover-lift {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .hover-lift:hover {
            transform: translateY(-15px) scale(1.05);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }
          
          .perspective-card {
            perspective: 1000px;
          }
          
          .card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .perspective-card:hover .card-inner {
            transform: rotateY(10deg) rotateX(5deg);
          }
          
          .gradient-border {
            position: relative;
            background: linear-gradient(45deg, #FFD700, #C73664, #00A3A3, #B300B3);
            background-size: 300% 300%;
            animation: shimmer 4s ease-in-out infinite;
            padding: 3px;
            border-radius: 15px;
          }
          
          .gradient-border-inner {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Trophy Icon with Rotation */}
            <motion.div 
              className="inline-block mb-8"
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl pulse-glow">
                <span className="text-4xl">🏆</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-[#0C1B33] mb-4">Celebrating</span>
              <span className="block shimmer-text">Excellence</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-[#2E2E2E] max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-bold text-[#FFD700]">35 years</span> of nurturing talent, 
              <span className="font-bold text-[#C73664]"> international recognition</span>, and 
              <span className="font-bold text-[#00A3A3]"> countless accolades</span> that honor our dedication to Kathak excellence.
            </motion.p>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "50+", label: "Awards Won", color: "#FFD700" },
                { number: "6", label: "Countries", color: "#C73664" },
                { number: "30+", label: "Visharad Graduates", color: "#00A3A3" },
                { number: "3", label: "World Records", color: "#B300B3" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="perspective-card hover-lift"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="card-inner glass-morphism p-6 rounded-xl text-center">
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{ color: stat.color }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-[#2E2E2E] font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#FFD700] flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Academic Milestones Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-[#FFD700]/20 text-[#B8860B] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Academic Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Educational 
              <span className="shimmer-text"> Milestones</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#C73664] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className="group relative perspective-card"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, rotateY: 5 }}
              >
                <div className="gradient-border">
                  <div className="gradient-border-inner card-inner relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${milestone.color}40 0%, transparent 50%)`,
                        backgroundSize: '50px 50px'
                      }}></div>
                    </div>


                    {/* Count with 3D Effect */}
                    <motion.div 
                      className="text-4xl font-bold mb-4 relative z-10"
                      style={{ 
                        color: milestone.color,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.count}
                    </motion.div>

                    <h3 className="text-xl font-bold text-[#0C1B33] mb-3 relative z-10">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-[#2E2E2E] leading-relaxed relative z-10">
                      {milestone.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${milestone.color}20 0%, transparent 70%)`
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Performances Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0C1B33] to-[#1a2a4a]">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Global Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              International 
              <span className="shimmer-text"> Performances</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#00FFF7] mx-auto rounded-full"></div>
          </motion.div>

          {/* World Map Effect */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {internationalPerformances.map((performance, index) => (
              <motion.div
                key={performance.id}
                className="group relative glass-morphism p-6 rounded-xl hover-lift"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
              >
                {/* Flag Icon with Pulse */}
                <motion.div 
                  className="text-6xl mb-4 text-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {performance.image}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {performance.country}
                </h3>
                
                <div className="text-[#FFD700] font-semibold text-center mb-2">
                  {performance.event}
                </div>
                
                <div className="text-white/70 text-sm text-center mb-3">
                  {performance.year}
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed text-center">
                  {performance.description}
                </p>

                {/* Hover Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)'
                  }}
                />

                {/* Border Animation */}
                <motion.div 
                  className="absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, #FFD700, #00FFF7, #C73664, #B300B3) border-box',
                    mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'subtract'
                  }}
                  animate={{
                    background: [
                      'linear-gradient(45deg, #FFD700, #00FFF7, #C73664, #B300B3)',
                      'linear-gradient(135deg, #00FFF7, #C73664, #B300B3, #FFD700)',
                      'linear-gradient(225deg, #C73664, #B300B3, #FFD700, #00FFF7)',
                      'linear-gradient(315deg, #B300B3, #FFD700, #00FFF7, #C73664)',
                      'linear-gradient(45deg, #FFD700, #00FFF7, #C73664, #B300B3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Filter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-[#C73664]/20 text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Prestigious Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Awards & 
              <span className="shimmer-text"> Honors</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] mx-auto rounded-full"></div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 relative overflow-hidden group ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white shadow-lg'
                    : 'bg-white/80 text-[#2E2E2E] hover:bg-white border border-[#C73664]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#C73664] to-[#B300B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                  <span className="relative z-10">{category.label}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Awards Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {getFilteredAwards().map((award, index) => (
                <motion.div
                  key={award.id}
                  className="group relative perspective-card cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -15, 
                    rotateY: 10,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  onClick={() => setSelectedAward(award)}
                >
                  <div className="gradient-border">
                    <div className="gradient-border-inner card-inner relative overflow-hidden h-full">
                      {/* Award Icon with Glow */}
                      <motion.div 
                        className="text-5xl mb-4 relative z-10"
                        animate={{ 
                          rotateZ: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4, 

                      {/* Year Badge */}
                      <motion.div 
                        className="inline-block px-3 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white rounded-full text-sm font-bold mb-3"
                        whileHover={{ scale: 1.1 }}
                      >
                        {award.year}
                      </motion.div>

                      <h3 className="text-lg font-bold text-[#0C1B33] mb-2 group-hover:text-[#C73664] transition-colors duration-300">
                        {award.title}
                      </h3>
                      
                      <p className="text-[#00A3A3] font-semibold text-sm mb-3">
                        {award.organization}
                      </p>
                      
                      <p className="text-[#2E2E2E] text-sm leading-relaxed">
                        {award.description}
                      </p>

                      {/* Hover Effects */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)'
                        }}
                      />

                      {/* Click Indicator */}
                      <motion.div 
                        className="absolute top-3 right-3 w-6 h-6 bg-[#C73664] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      >
                        <span className="text-white text-xs">👁️</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* World Records Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-[#FFD700]/30 text-[#B8860B] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              World Records
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Record Breaking 
              <span className="shimmer-text"> Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF6B35] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recordAchievements.map((record, index) => (
              <motion.div
                key={record.id}
                className="group relative"
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="glass-morphism p-8 rounded-2xl text-center relative overflow-hidden border-2"
                  style={{ borderColor: record.color }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: `0 25px 50px ${record.color}30`
                  }}
                >
                  {/* Animated Background */}
                  <motion.div 
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: record.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Icon with 3D Rotation */}

                  <h3 
                    className="text-xl font-bold mb-4 relative z-10"
                    style={{ color: record.color }}
                  >
                    {record.title}
                  </h3>
                  
                  <p className="text-[#2E2E2E] leading-relaxed relative z-10">
                    {record.description}
                  </p>

                  {/* Floating Particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-60"
                      style={{ backgroundColor: record.color }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choreographic Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-[#B300B3]/20 text-[#B300B3] rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Creative Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B33] mb-4">
              Choreographic 
              <span className="shimmer-text"> Masterpieces</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B300B3] to-[#C73664] mx-auto rounded-full"></div>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {choreographicWorks.map((work, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid group relative"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring"
                }}
              >
                <motion.div 
                  className="glass-morphism p-6 rounded-xl relative overflow-hidden cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    z: 50
                  }}
                  style={{
                    background: `linear-gradient(135deg, ${work.color}20, white)`,
                    border: `2px solid ${work.color}40`
                  }}
                >
                  {/* Animated Background Pattern */}
                  <motion.div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 70%, ${work.color} 0%, transparent 50%)`,
                      backgroundSize: '30px 30px'
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />

                  <h3 
                    className="text-lg font-bold mb-2 relative z-10 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: work.color }}
                  >
                    {work.title}
                  </h3>
                  
                  <p className="text-[#2E2E2E] text-sm leading-relaxed relative z-10">
                    {work.theme}
                  </p>

                  {/* Hover Glow */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${work.color}30 0%, transparent 70%)`
                    }}
                  />

                  {/* Corner Accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent group-hover:border-l-[40px] group-hover:border-b-[40px] transition-all duration-300"
                    style={{ borderBottomColor: work.color + '60' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestigious Platforms Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0C1B33] to-[#2a1a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Performance Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prestigious 
              <span className="shimmer-text"> Stages</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#00FFF7] mx-auto rounded-full"></div>
          </motion.div>

          {/* Animated List */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {prestigiousPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="group relative glass-morphism p-4 rounded-lg text-center hover-lift"
                initial={{ opacity: 0, x: -50, rotateY: -30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5
                }}
              >
                <span className="text-white font-medium relative z-10">
                  {platform}
                </span>

                {/* Hover Glow */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(0, 255, 247, 0.1))'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0C1B33] mb-6">
              Be Part of Our 
              <span className="shimmer-text"> Legacy</span>
            </h2>
            
            <p className="text-lg text-[#2E2E2E] mb-10 max-w-2xl mx-auto">
              Join the tradition of excellence that has produced international performers, 
              world record holders, and cultural ambassadors.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start Your Journey
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
              <Link 
                href="/gallery"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#C73664] text-[#C73664] rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#C73664] hover:text-white transform hover:-translate-y-1 flex items-center justify-center"
              >
                View Gallery
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Award Detail Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.5, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-[#C73664] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                ×
              </button>

              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white rounded-full text-sm font-bold mb-4">
                  {selectedAward.year}
                </div>
                <h3 className="text-2xl font-bold text-[#0C1B33] mb-3">
                  {selectedAward.title}
                </h3>
                <p className="text-[#00A3A3] font-semibold mb-4">
                  {selectedAward.organization}
                </p>
                <p className="text-[#2E2E2E] leading-relaxed">
                  {selectedAward.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}