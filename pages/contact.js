// pages/contact.js
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interestedIn: 'classes'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    // Enhanced particle animation with musical notes
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 120;
    const musicNotes = ['♪', '♫', '♬', '♩', '♭', '♯'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.4 + 0.1,
        color: `rgba(${199 + Math.random() * 30}, ${54 + Math.random() * 50}, ${100 + Math.random() * 50}, ${Math.random() * 0.3 + 0.1})`,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 0.02,
        note: musicNotes[Math.floor(Math.random() * musicNotes.length)],
        isNote: Math.random() > 0.7
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(253, 249, 240, 0.95)');
      gradient.addColorStop(0.3, 'rgba(255, 245, 238, 0.9)');
      gradient.addColorStop(0.7, 'rgba(252, 231, 243, 0.9)');
      gradient.addColorStop(1, 'rgba(253, 249, 240, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.globalAlpha = particle.opacity;
        
        if (particle.isNote) {
          // Draw musical note
          ctx.font = `${particle.size * 6}px serif`;
          ctx.fillStyle = particle.color;
          ctx.textAlign = 'center';
          ctx.fillText(particle.note, 0, 0);
        } else {
          // Draw circular particle
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        }
        
        ctx.restore();
        
        // Update particle
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

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `
🎭 *New Inquiry from Sanchay Kathak Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📋 *Subject:* ${formData.subject}
🎯 *Interested In:* ${formData.interestedIn}

💬 *Message:*
${formData.message}

---
*Sent from Sanchay Kathak Website*
    `.trim();

    const whatsappURL = `https://wa.me/917507234753?text=${encodeURIComponent(message)}`;
    
    // Simulate submission delay for UX
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interestedIn: 'classes'
      });

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const branches = [
    {
      id: 1,
      name: "Main Branch ",
      address: "Sanchay Kathak Nrutya Academy, Pune, Maharashtra - India",
      icon: "🏛️",
      color: "#C73664",
      isMain: true
    },
    {
      id: 2,
      name: "Nigdi-Pradhikaran Branch",
      address: "Nigdi-Pradhikaran, Pune, Maharashtra",
      icon: "🎭",
      color: "#00A3A3",
      isMain: false
    },
    {
      id: 3,
      name: "Ravet Branch",
      address: "Ravet, Pune, Maharashtra",
      icon: "💃",
      color: "#B300B3",
      isMain: false
    }
  ];

  const contactMethods = [
    {
      id: 1,
      title: "Call Us",
      icon: "📞",
      details: ["+91 90119 10412", "+91 75072 34753"],
      color: "#00A3A3",
      action: "tel:+917507234753"
    },
    {
      id: 2,
      title: "Email Us",
      icon: "📧",
      details: ["vaishalidhongade9@gmail.com"],
      color: "#C73664",
      action: "mailto:vaishalidhongade9@gmail.com"
    },
    {
      id: 3,
      title: "Visit Website",
      icon: "🌐",
      details: ["www.sanchaykathak.com"],
      color: "#B300B3",
      action: "https://www.sanchaykathak.com"
    }
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      color: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
      href: "#"
    },
    {
      name: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "#FF0000",
      href: "#"
    },
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "#1877F2",
      href: "#"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Contact Us | Sanchay Kathak Academy - Connect with Dance Excellence</title>
        <meta name="description" content="Get in touch with Sanchay Kathak Academy. Contact us for classes, workshops, performances, or collaborations. Multiple locations in Pune." />
        <style jsx global>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(199, 54, 100, 0.3); }
            50% { box-shadow: 0 0 40px rgba(199, 54, 100, 0.6); }
          }
          
          @keyframes wave {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100vw); }
          }
          
          @keyframes ripple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(4); opacity: 0; }
          }
          
          @keyframes morphing {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          }
          
          @keyframes floating-heart {
            0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.8; }
            50% { transform: translateY(-20px) rotate(180deg) scale(1.2); opacity: 1; }
            100% { transform: translateY(-40px) rotate(360deg) scale(0.8); opacity: 0; }
          }
          
          .shimmer-text {
            background: linear-gradient(135deg, #C73664, #B300B3, #00A3A3, #FFD700);
            background-size: 300% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          
          .float-animation {
            animation: float 4s ease-in-out infinite;
          }
          
          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .morphing-blob {
            animation: morphing 8s ease-in-out infinite;
          }
          
          .glass-morphism {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .input-glow {
            transition: all 0.3s ease;
          }
          
          .input-glow:focus {
            box-shadow: 0 0 0 3px rgba(199, 54, 100, 0.1), 0 0 20px rgba(199, 54, 100, 0.2);
            border-color: #C73664;
          }
          
          .hover-lift {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .hover-lift:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .gradient-border {
            position: relative;
            background: linear-gradient(45deg, #C73664, #B300B3, #00A3A3, #FFD700);
            background-size: 300% 300%;
            animation: shimmer 4s ease-in-out infinite;
            padding: 2px;
            border-radius: 15px;
          }
          
          .gradient-border-inner {
            background: white;
            border-radius: 13px;
            padding: 1.5rem;
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          .floating-element:nth-child(2n) {
            animation-delay: -2s;
          }
          
          .floating-element:nth-child(3n) {
            animation-delay: -4s;
          }
        `}</style>
      </Head>

      {/* Magical Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute floating-element"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: ['#C73664', '#B300B3', '#00A3A3', '#FFD700'][i % 4]
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <span className="text-4xl opacity-20">
                {['🎭', '💃', '🎵', '✨'][i % 4]}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Dancing Icon */}
            <motion.div 
              className="inline-block mb-8"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#C73664] to-[#B300B3] rounded-full flex items-center justify-center shadow-2xl pulse-glow">
                <span className="text-4xl">💃</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-[#0C1B33] mb-4">Contact</span>
              <span className="block shimmer-text">Us</span>
            </motion.h1>

            <motion.div
              className="max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#C73664] mb-4">
                Let's Connect Through Dance
              </h2>
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Whether you're a passionate learner, parent, collaborator, or an admirer of Indian classical arts, 
                we'd love to hear from you. Reach out to us for class details, workshop invites, performances, or collaborations.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: "🏛️", label: "3 Locations", color: "#C73664" },
                { icon: "📞", label: "Always Available", color: "#00A3A3" },
                { icon: "💬", label: "Quick Response", color: "#B300B3" },
                { icon: "🎯", label: "Personalized Care", color: "#FFD700" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="glass-morphism p-6 rounded-xl text-center hover-lift"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl mb-3" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="text-[#2E2E2E] font-semibold text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <h3 className="text-2xl font-bold text-[#0C1B33] mb-6 flex items-center">
                    <span className="text-3xl mr-3">📝</span>
                    Send us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-[#2E2E2E] text-sm font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none input-glow bg-white/80 backdrop-blur-sm transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                        <motion.div
                          className="h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-[#2E2E2E] text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none input-glow bg-white/80 backdrop-blur-sm transition-all duration-300"
                          placeholder="your@email.com"
                          required
                        />
                        <motion.div
                          className="h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>

                    {/* Phone & Subject Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-[#2E2E2E] text-sm font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none input-glow bg-white/80 backdrop-blur-sm transition-all duration-300"
                          placeholder="+91 "
                          required
                        />
                        <motion.div
                          className="h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'phone' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="block text-[#2E2E2E] text-sm font-semibold mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField('')}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none input-glow bg-white/80 backdrop-blur-sm transition-all duration-300"
                          placeholder="What's this about?"
                        />
                        <motion.div
                          className="h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'subject' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>

                    {/* Interested In */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-[#2E2E2E] text-sm font-semibold mb-2">
                        I'm Interested In
                      </label>
                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('interestedIn')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none input-glow bg-white/80 backdrop-blur-sm transition-all duration-300"
                      >
                        <option value="classes">Regular Classes</option>
                        <option value="workshops">Workshops</option>
                        <option value="performances">Performances</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="events">Special Events</option>
                        <option value="other">Other</option>
                      </select>
                      <motion.div
                        className="h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'interestedIn' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-[#2E2E2E] text-sm font-semibold mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="5"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none input-glow bg-white/80 backdrop-blur-sm transition-all duration-300 resize-none"
                        placeholder="Tell us about your interest in Kathak, questions, or how we can help you..."
                        required
                      />
                      <motion.div
                        className="h-1 bg-gradient-to-r from-[#C73664] to-[#B300B3] rounded-full mt-1"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button Background Animation */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-[#B300B3] to-[#00A3A3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />
                      
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message via WhatsApp</span>
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              📱
                            </motion.span>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0C1B33] mb-6 flex items-center">
                  <span className="text-3xl mr-3">📞</span>
                  Get in Touch
                </h3>
                
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.id}
                    href={method.action}
                    className="block group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="glass-morphism p-6 rounded-xl hover-lift border-l-4" style={{ borderLeftColor: method.color }}>
                      <div className="flex items-start space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                          style={{ backgroundColor: method.color }}
                        >
                          <span className="text-xl">{method.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#0C1B33] mb-2 group-hover:text-[#C73664] transition-colors">
                            {method.title}
                          </h4>
                          {method.details.map((detail, idx) => (
                            <p key={idx} className="text-[#2E2E2E] font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <motion.div
                          className="text-[#C73664] opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Academy Hours */}
              <motion.div 
                className="glass-morphism p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-bold text-[#0C1B33] mb-4 flex items-center">
                  <span className="text-xl mr-3">⏰</span>
                  Academy Timings
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#2E2E2E]">Monday - Saturday</span>
                    <span className="font-semibold text-[#C73664]">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2E2E2E]">Sunday</span>
                    <span className="font-semibold text-[#00A3A3]">Special Workshops Only</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="glass-morphism p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="font-bold text-[#0C1B33] mb-4 flex items-center">
                  <span className="text-xl mr-3">💬</span>
                  Follow Us
                </h4>
                <p className="text-[#2E2E2E] mb-4 text-sm">
                  Stay updated with performances, workshops, and student showcases
                </p>
                <div className="flex space-x-4">
                  {socialPlatforms.map((platform, index) => (
                    <motion.a
                      key={platform.name}
                      href={platform.href}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                      style={{ background: platform.color }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Hover Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"
                      />
                      
                      <span className="relative z-10">
                        {platform.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academy Locations */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0C1B33] to-[#2a1a4a]">
        {/* Animated Stars Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
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
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Academy 
              <span className="shimmer-text"> Branches</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#00FFF7] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                className="group relative glass-morphism p-8 rounded-2xl hover-lift text-center"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  z: 50
                }}
              >
                {/* Branch Icon */}
                <motion.div 
                  className="text-6xl mb-6"
                  style={{ color: branch.color }}
                  animate={{ 
                    rotateY: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {branch.icon}
                </motion.div>

                {/* Main Branch Badge */}
                {branch.isMain && (
                  <motion.div 
                    className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white px-3 py-1 rounded-full text-xs font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Main Branch
                  </motion.div>
                )}

                <h3 
                  className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ color: branch.color }}
                >
                  {branch.name}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {branch.address}
                </p>

                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${branch.color}20 0%, transparent 70%)`
                  }}
                />

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full opacity-60"
                    style={{ backgroundColor: branch.color }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() > 0.5 ? 15 : -15, 0],
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
            ))}
          </div>
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
              Step into the 
              <span className="shimmer-text"> Rhythm</span>
            </h2>
            
            <p className="text-lg text-[#2E2E2E] mb-10 max-w-2xl mx-auto">
              Connect with us today and begin your journey into the beautiful world of Kathak. 
              Every step tells a story, every movement creates magic.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a 
                href="tel:+917507234753"
                className="group px-8 py-4 bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Now
                <motion.span 
                  className="ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📞
                </motion.span>
              </motion.a>
              <motion.a 
                href="https://wa.me/917507234753"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp
                <motion.span 
                  className="ml-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💬
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Message Modal */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden"
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Success Animation Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#C73664]/10 to-[#B300B3]/10"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(199, 54, 100, 0.1), rgba(179, 0, 179, 0.1))',
                    'linear-gradient(135deg, rgba(179, 0, 179, 0.1), rgba(0, 163, 163, 0.1))',
                    'linear-gradient(225deg, rgba(0, 163, 163, 0.1), rgba(255, 215, 0, 0.1))',
                    'linear-gradient(315deg, rgba(255, 215, 0, 0.1), rgba(199, 54, 100, 0.1))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 0.5 }}
              >
                ✨
              </motion.div>
              
              <h3 className="text-2xl font-bold text-[#0C1B33] mb-4">
                Message Sent Successfully!
              </h3>
              
              <p className="text-[#2E2E2E] mb-6">
                Your message has been forwarded to WhatsApp. We'll get back to you soon!
              </p>

              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span>Opening WhatsApp...</span>
                <span>💬</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}