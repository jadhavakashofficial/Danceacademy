// pages/reviews.js
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

export default function Reviews() {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('digital');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Print Media Images from the provided code
  const printMediaImages = [
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20250305-WA0030.jpg',
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20231007-WA0047.jpg',
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20230412-WA0087.jpg',
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_20240720_131132_031.webp',
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20190903-WA0000.jpg',
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG-20191005-WA0038.jpg',
    'https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_20230713_145409_280.webp'
  ];

  // Print Media Titles
  const printMediaTitles = [
    "Cultural Recognition Award",
    "International Performance",
    "Excellence in Arts Award",
    "Media Coverage Feature",
    "Traditional Festival Performance",
    "Achievement Recognition",
    "Student Success Story"
  ];

  // Print Media Descriptions = [
  const printMediaDescriptions = [
    "Prestigious honor for cultural preservation",
    "Global stage recognition",
    "Outstanding contribution to dance",
    "National television highlight",
    "Cultural celebration showcase",
    "Distinguished service award",
    "Competition victory celebration"
  ];

  // Digital Media Reviews
  const digitalReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      testimonial: "Sanchay Kathak transformed my life completely. The personalized attention and world-class training helped me win the national championship! The gurus here are not just teachers but mentors who shape your artistic journey.",
      achievement: "National Kathak Champion"
    },
    {
      id: 2,
      name: "Rohan Deshpande",
      rating: 5,
      testimonial: "The academy gave me wings to fly on international stages. The traditional yet modern approach is incredible! Forever grateful for this transformative experience.",
      achievement: "International Performer"
    },
    {
      id: 3,
      name: "Ananya Patel",
      rating: 5,
      testimonial: "Even during my medical studies, the flexible timing and supportive environment helped me complete my Visharad! The teachers understand individual needs and help you grow at your own pace.",
      achievement: "Visharad Graduate"
    },
    {
      id: 4,
      name: "Siddharth Joshi",
      rating: 5,
      testimonial: "Started at age 10, now I'm performing at major festivals. The gurus here are amazing! Best decision my parents made for me!",
      achievement: "Youth Festival Winner"
    },
    {
      id: 5,
      name: "Meera Krishnan",
      rating: 5,
      testimonial: "The multi-gharana training approach gave me a comprehensive understanding of this beautiful art form. Rajashree ma'am's innovative choreographies and Vaishali ma'am's traditional approach create the perfect balance.",
      achievement: "Nritya Alankar"
    },
    {
      id: 6,
      name: "Kavya Desai",
      rating: 5,
      testimonial: "The creative freedom and encouragement I received here helped me become a choreographer myself. The academy family has been incredibly supportive throughout my journey.",
      achievement: "Professional Choreographer"
    }
  ];

  useEffect(() => {
    // Epic particle system with hearts and stars
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 150;
    const emojis = ['⭐', '💫', '✨', '💖', '🌟', '💝', '🎭', '💃'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
        color: `rgba(${255 - Math.random() * 80}, ${140 + Math.random() * 100}, ${180 + Math.random() * 75}, ${Math.random() * 0.4 + 0.2})`,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 0.03,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        isEmoji: Math.random() > 0.6,
        pulse: Math.random() * Math.PI * 2
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Epic gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(255, 248, 250, 0.95)');
      gradient.addColorStop(0.3, 'rgba(252, 231, 243, 0.9)');
      gradient.addColorStop(0.6, 'rgba(240, 248, 255, 0.9)');
      gradient.addColorStop(1, 'rgba(255, 245, 238, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        
        const pulseSize = 1 + Math.sin(particle.pulse) * 0.3;
        ctx.scale(pulseSize, pulseSize);
        particle.pulse += 0.02;
        
        ctx.globalAlpha = particle.opacity;
        
        if (particle.isEmoji) {
          ctx.font = `${particle.size * 6}px serif`;
          ctx.fillStyle = particle.color;
          ctx.textAlign = 'center';
          ctx.fillText(particle.emoji, 0, 0);
        } else {
          const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
          grd.addColorStop(0, particle.color);
          grd.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
          
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(-particle.size, 0);
          ctx.lineTo(particle.size, 0);
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(0, particle.size);
          ctx.stroke();
        }
        
        ctx.restore();
        
        particle.x -= particle.speed;
        particle.angle += particle.rotation;
        
        if (particle.x < -20) {
          particle.x = canvas.width + 20;
          particle.y = Math.random() * canvas.height;
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

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.3, rotate: 15 }}
      >
        ⭐
      </motion.span>
    ));
  };

  return (
    <Layout>
      <Head>
        <title>Student Reviews | Sanchay Kathak Academy - Real Stories of Success</title>
        <meta name="description" content="Discover authentic student reviews and media coverage of Sanchay Kathak Academy. Real stories of transformation through classical dance." />
        <style jsx global>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.4); }
            50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6); }
          }
          
          @keyframes rainbow {
            0% { color: #ff6b6b; }
            16.66% { color: #4ecdc4; }
            33.33% { color: #45b7d1; }
            50% { color: #96ceb4; }
            66.66% { color: #ffeaa7; }
            83.33% { color: #dda0dd; }
            100% { color: #ff6b6b; }
          }
          
          @keyframes morphing {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            50% { border-radius: 40% 30% 60% 70% / 40% 50% 60% 30%; }
            75% { border-radius: 70% 60% 30% 40% / 30% 40% 70% 60%; }
          }
          
          @keyframes levitate {
            0%, 100% { transform: translateY(0px) translateX(0px) rotateZ(0deg); }
            25% { transform: translateY(-10px) translateX(5px) rotateZ(1deg); }
            50% { transform: translateY(-15px) translateX(0px) rotateZ(0deg); }
            75% { transform: translateY(-10px) translateX(-5px) rotateZ(-1deg); }
          }
          
          .shimmer-text {
            background: linear-gradient(135deg, #FFD700, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4, #FFEAA7);
            background-size: 300% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s linear infinite;
          }
          
          .rainbow-text {
            animation: rainbow 3s ease-in-out infinite;
          }
          
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
          
          .pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          
          .morphing-blob {
            animation: morphing 10s ease-in-out infinite;
          }
          
          .levitate {
            animation: levitate 8s ease-in-out infinite;
          }
          
          .glass-morphism {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .ultra-glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(40px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          
          .hover-lift {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .hover-lift:hover {
            transform: translateY(-15px) scale(1.03) rotateY(5deg);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }
          
          .perspective-card {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          
          .card-3d {
            transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .card-3d:hover {
            transform: rotateY(10deg) rotateX(5deg) translateZ(50px);
          }
          
          .gradient-border {
            position: relative;
            background: linear-gradient(45deg, #FFD700, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4, #FFEAA7);
            background-size: 400% 400%;
            animation: shimmer 6s ease-in-out infinite;
            padding: 3px;
            border-radius: 20px;
          }
          
          .gradient-border-inner {
            background: white;
            border-radius: 17px;
            height: 100%;
          }
          
          .achievement-badge {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            background-size: 200% 200%;
            animation: shimmer 3s ease-in-out infinite;
          }
          
          .floating-elements {
            pointer-events: none;
            user-select: none;
          }
          
          .review-card {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          }
          
          .review-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
          }
          
          .slider-image {
            object-fit: contain;
            width: 100%;
            height: 100%;
            max-height: 600px;
          }
          
          /* New slider styles from provided code */
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
      </Head>

      {/* Epic Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Hero Section with Mind-Blowing Effects */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Floating Review Cards Background */}
        <div className="absolute inset-0 floating-elements">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <div className="p-2 h-full flex flex-col justify-between">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-xs text-yellow-400">⭐</span>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-white/30 rounded w-full"></div>
                  <div className="h-1 bg-white/20 rounded w-3/4"></div>
                  <div className="h-1 bg-white/20 rounded w-1/2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Epic Rating Display */}
            <motion.div 
              className="inline-block mb-8"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl pulse-glow morphing-blob">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">4.9</div>
                    <div className="text-sm text-white/90">Rating</div>
                  </div>
                </div>
                
                {/* Floating Stars */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      top: `${Math.sin((i * 72) * Math.PI / 180) * 60 + 50}%`,
                      left: `${Math.cos((i * 72) * Math.PI / 180) * 60 + 50}%`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                    }}
                  >
                    ⭐
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold leading-tight mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <span className="block text-[#0C1B33] mb-4">Student</span>
              <span className="block shimmer-text">Reviews</span>
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold rainbow-text mb-6">
                Real Stories, Real Success
              </h2>
              <p className="text-xl text-[#2E2E2E] leading-relaxed">
                Discover the transformative journey of our students through authentic reviews and media coverage. 
                From beginners to international performers, every story inspires us to excel further.
              </p>
            </motion.div>

            {/* Tab Buttons */}
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={() => setActiveTab('digital')}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden ${
                  activeTab === 'digital'
                    ? 'bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] text-white shadow-2xl'
                    : 'bg-white/80 text-[#2E2E2E] hover:bg-white border-2 border-[#FFD700]/20 hover:border-[#FFD700]/50'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <span className="relative z-10 flex items-center space-x-3">
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: activeTab === 'digital' ? [0, 15, -15, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    💬
                  </motion.span>
                  <span>Digital Media Reviews</span>
                </span>
              </motion.button>

              <motion.button
                onClick={() => setActiveTab('print')}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden ${
                  activeTab === 'print'
                    ? 'bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] text-white shadow-2xl'
                    : 'bg-white/80 text-[#2E2E2E] hover:bg-white border-2 border-[#FFD700]/20 hover:border-[#FFD700]/50'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <span className="relative z-10 flex items-center space-x-3">
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: activeTab === 'print' ? [0, 15, -15, 0] : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    📰
                  </motion.span>
                  <span>Print Media Coverage</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-3 border-[#FFD700] flex justify-center p-2">
            <motion.div 
              className="w-2 h-2 bg-[#FFD700] rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'digital' ? (
              <motion.div
                key="digital"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-center mb-12 rainbow-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Digital Media Reviews
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {digitalReviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      className="group review-card"
                      initial={{ opacity: 0, y: 80, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ y: -10, rotateY: 5 }}
                    >
                      <div className="ultra-glass p-8 rounded-3xl h-full relative overflow-hidden">
                        {/* Background Pattern */}
                        <motion.div 
                          className="absolute inset-0 opacity-5"
                          style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, #FFD700 2px, transparent 2px)`,
                            backgroundSize: '30px 30px'
                          }}
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                          }}
                          transition={{ duration: 20, repeat: Infinity }}
                        />

                        {/* Student Info Header */}
                        <div className="relative z-10 mb-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-[#0C1B33] group-hover:text-[#FF6B6B] transition-colors duration-300">
                              {review.name}
                            </h4>
                            
                            <motion.div 
                              className="text-3xl"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              💫
                            </motion.div>
                          </div>

                          {/* Rating Stars */}
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="flex space-x-1">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-[#2E2E2E] font-semibold text-sm">
                              ({review.rating}.0)
                            </span>
                          </div>

                          {/* Achievement Badge */}
                          <motion.div 
                            className="achievement-badge px-3 py-1 rounded-full inline-block mb-4"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-white font-bold text-xs">
                              {review.achievement}
                            </span>
                          </motion.div>
                        </div>

                        {/* Testimonial Text */}
                        <motion.div 
                          className="relative z-10 mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="text-6xl text-[#FFD700]/20 absolute -top-4 -left-2">"</div>
                          <p className="text-[#2E2E2E] leading-relaxed italic pl-8">
                            {review.testimonial}
                          </p>
                          <div className="text-6xl text-[#FFD700]/20 absolute -bottom-4 -right-2 rotate-180">"</div>
                        </motion.div>

                        {/* Hover Glow Effect */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                          style={{
                            background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)'
                          }}
                        />

                        {/* Corner Decoration */}
                        <motion.div 
                          className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <span className="text-xs">💝</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="print"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-center mb-12 rainbow-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Print Media Coverage
                </motion.h3>

                {/* Enhanced Media Coverage Slider */}
                <div className="relative">
                  {/* Media coverage card */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50 overflow-hidden">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] rounded-xl flex items-center justify-center mr-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6">
                          <span className="text-xl">📰</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0C1B33] mb-1">Print Media Coverage</h3>
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
                          {printMediaImages.map((image, index) => (
                            <div 
                              key={index} 
                              className="media-slide flex-shrink-0 w-full h-full relative"
                            >
                              <div className="absolute inset-0 overflow-hidden rounded-xl shadow-xl group">
                                {/* Image container with proper aspect ratio */}
                                <div className="relative w-full h-full bg-gradient-to-br from-[#0C1B33]/10 to-[#0C1B33]/20">
                                  <img 
                                    src={image}
                                    alt={`Print media ${index+1}`}
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
                                      <p className="font-semibold text-lg tracking-wide">{printMediaTitles[index]}</p>
                                    </div>
                                    <p className="opacity-0 group-hover:opacity-100 text-sm leading-relaxed transition-opacity duration-500 delay-200 max-w-md">
                                      {printMediaDescriptions[index]}
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, staggerChildren: 0.1 }}
          >
            {[
              { number: "500+", label: "Happy Students", icon: "👥", color: "#FF6B6B" },
              { number: "4.9", label: "Average Rating", icon: "⭐", color: "#FFD700" },
              { number: "250+", label: "Reviews", icon: "📝", color: "#4ECDC4" },
              { number: "98%", label: "Satisfaction", icon: "💖", color: "#45B7D1" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="perspective-card hover-lift"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="ultra-glass p-6 rounded-2xl text-center card-3d h-full">
                  <motion.div 
                    className="text-4xl mb-3"
                    style={{ color: stat.color }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-[#2E2E2E] font-semibold text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Epic Call to Action */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0C1B33] to-[#2a1a4a]">
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Ready to Create Your Own 
              <span className="shimmer-text"> Success Story?</span>
            </motion.h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the family of successful students who have transformed their passion into excellence. 
              Your journey to becoming a Kathak artist starts here.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.a 
                href="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10">Start Your Journey</span>
                <motion.span 
                  className="relative z-10 ml-3"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="/gallery"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/20 transform hover:-translate-y-2 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Performances
                <motion.span 
                  className="ml-3"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎭
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <span className="font-semibold">+91 7507234753</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✉️</span>
                </div>
                <span className="font-semibold">vaishalidhongade9@gmail.com</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}