// pages/gallery.js
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const canvasRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('masonry'); // masonry, grid, showcase

  useEffect(() => {
    // EPIC PARTICLE SYSTEM WITH DANCE ELEMENTS
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 300;
    const danceElements = ['💃', '🎭', '✨', '⭐', '🌟', '💫', '🎵', '♪', '♬', '🎨', '📸', '🖼️'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        color: `hsla(${Math.random() * 360}, 70%, 60%, ${Math.random() * 0.4 + 0.2})`,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 0.04,
        element: danceElements[Math.floor(Math.random() * danceElements.length)],
        isElement: Math.random() > 0.5,
        pulse: Math.random() * Math.PI * 2,
        orbit: Math.random() * 100 + 50,
        orbitSpeed: Math.random() * 0.02 + 0.01
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // EPIC HOLOGRAPHIC BACKGROUND
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height) * 0.8
      );
      gradient.addColorStop(0, 'rgba(250, 245, 255, 0.98)');
      gradient.addColorStop(0.2, 'rgba(240, 248, 255, 0.95)');
      gradient.addColorStop(0.5, 'rgba(255, 240, 245, 0.93)');
      gradient.addColorStop(0.8, 'rgba(245, 255, 250, 0.95)');
      gradient.addColorStop(1, 'rgba(255, 250, 240, 0.98)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.save();
        
        // Orbital motion
        const orbitX = Math.cos(particle.pulse) * particle.orbit;
        const orbitY = Math.sin(particle.pulse) * particle.orbit;
        particle.pulse += particle.orbitSpeed;
        
        ctx.translate(particle.x + orbitX * 0.1, particle.y + orbitY * 0.1);
        ctx.rotate(particle.angle);
        
        const pulseSize = 1 + Math.sin(particle.pulse * 2) * 0.4;
        ctx.scale(pulseSize, pulseSize);
        
        ctx.globalAlpha = particle.opacity;
        
        if (particle.isElement) {
          // Draw dance elements
          ctx.font = `${particle.size * 4}px serif`;
          ctx.fillStyle = particle.color;
          ctx.textAlign = 'center';
          ctx.fillText(particle.element, 0, 0);
        } else {
          // Draw ethereal particles
          const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
          grd.addColorStop(0, particle.color);
          grd.addColorStop(0.5, particle.color.replace(/[\d.]+\)$/g, '0.5)'));
          grd.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
          
          // Add mystical glow
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * particle.size * 1.5;
            const y = Math.sin(angle) * particle.size * 1.5;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
        
        ctx.restore();
        
        // Update particle
        particle.x -= particle.speed;
        particle.angle += particle.rotation;
        
        if (particle.x < -100) {
          particle.x = canvas.width + 100;
          particle.y = Math.random() * canvas.height;
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    }
    
    drawParticles();
    
    // Simulate loading completion
    setTimeout(() => setIsLoading(false), 2000);
    
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

  const galleryImages = [
    // Recent Performances
    {
      id: 1,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750241518480.png",
      category: "performances",
      title: "Classical Kathak Performance",
      description: "Mesmerizing stage presence",
      year: "2024"
    },
    {
      id: 2,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750241194343.png",
      category: "performances",
      title: "Traditional Dance Showcase",
      description: "Grace in motion",
      year: "2024"
    },
    {
      id: 3,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750240970773.png",
      category: "performances",
      title: "Cultural Festival Performance",
      description: "Celebrating heritage",
      year: "2024"
    },
    {
      id: 4,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233828980.png",
      category: "students",
      title: "Student Achievement",
      description: "Young talent shining",
      year: "2024"
    },
    {
      id: 5,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
      category: "students",
      title: "Training Session",
      description: "Learning with dedication",
      year: "2024"
    },
    {
      id: 6,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750232506953.png",
      category: "academy",
      title: "Academy Moment",
      description: "Preserving tradition",
      year: "2024"
    },
    {
      id: 7,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739431559767.jpeg",
      category: "performances",
      title: "Stage Performance",
      description: "Artistic expression",
      year: "2024"
    },
    {
      id: 8,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739432659613.jpeg",
      category: "performances",
      title: "Dance Recital",
      description: "Perfect synchronization",
      year: "2024"
    },
    {
      id: 9,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430747623-scaled.jpeg",
      category: "gurus",
      title: "Guru Performance",
      description: "Master at work",
      year: "2024"
    },
    {
      id: 10,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430044988.jpeg",
      category: "gurus",
      title: "Teaching Moment",
      description: "Knowledge transfer",
      year: "2024"
    },
    {
      id: 11,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739429006284.jpeg",
      category: "academy",
      title: "Academy Life",
      description: "Daily inspiration",
      year: "2024"
    },
    {
      id: 12,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926100.jpg",
      category: "students",
      title: "Student Showcase",
      description: "Rising stars",
      year: "2023"
    },
    {
      id: 13,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000069339-scaled.jpg",
      category: "performances",
      title: "Grand Performance",
      description: "Majestic display",
      year: "2023"
    },
    {
      id: 14,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000046801.jpg",
      category: "students",
      title: "Youth Performance",
      description: "Future artists",
      year: "2023"
    },
    {
      id: 15,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000046504.jpg",
      category: "academy",
      title: "Academy Event",
      description: "Community gathering",
      year: "2023"
    },
    {
      id: 16,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/18159.jpg",
      category: "gurus",
      title: "Master Class",
      description: "Wisdom in motion",
      year: "2023"
    },
    {
      id: 17,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3095.png",
      category: "performances",
      title: "Cultural Program",
      description: "Heritage celebration",
      year: "2023"
    },
    {
      id: 18,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2984-scaled.jpg",
      category: "performances",
      title: "Festival Performance",
      description: "Traditional elegance",
      year: "2023"
    },
    {
      id: 19,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2556-scaled.jpg",
      category: "gurus",
      title: "Guru Demonstration",
      description: "Teaching excellence",
      year: "2023"
    },
    {
      id: 20,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg",
      category: "performances",
      title: "Solo Performance",
      description: "Individual brilliance",
      year: "2023"
    },
    {
      id: 21,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2398-scaled.jpg",
      category: "students",
      title: "Student Dedication",
      description: "Practice makes perfect",
      year: "2023"
    },
    {
      id: 22,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926106.jpg",
      category: "performances",
      title: "Group Performance",
      description: "Unity in dance",
      year: "2023"
    },
    {
      id: 23,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_9244-scaled.jpg",
      category: "academy",
      title: "Academy Pride",
      description: "35 years of excellence",
      year: "2023"
    },
    {
      id: 24,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926102.jpg",
      category: "students",
      title: "Achievement Moment",
      description: "Success celebration",
      year: "2023"
    },
    {
      id: 25,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3584.jpg",
      category: "gurus",
      title: "Masterful Display",
      description: "Artistry at its peak",
      year: "2022"
    },
    {
      id: 26,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3517-scaled.jpg",
      category: "performances",
      title: "Evening Recital",
      description: "Magical moments",
      year: "2022"
    },
    {
      id: 27,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3117.png",
      category: "gurus",
      title: "Guru Excellence",
      description: "Leading by example",
      year: "2022"
    },
    {
      id: 28,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2381.jpg",
      category: "academy",
      title: "Academy Legacy",
      description: "Continuing tradition",
      year: "2022"
    },
    {
      id: 29,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-scaled.jpg",
      category: "performances",
      title: "Classical Presentation",
      description: "Timeless beauty",
      year: "2022"
    },
    {
      id: 30,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-1-scaled.jpg",
      category: "students",
      title: "Student Excellence",
      description: "Future of Kathak",
      year: "2022"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Gallery', icon: '🖼️', count: galleryImages.length },
    { id: 'performances', label: 'Performances', icon: '🎭', count: galleryImages.filter(img => img.category === 'performances').length },
    { id: 'students', label: 'Students', icon: '👥', count: galleryImages.filter(img => img.category === 'students').length },
    { id: 'gurus', label: 'Our Gurus', icon: '🙏', count: galleryImages.filter(img => img.category === 'gurus').length },
    { id: 'academy', label: 'Academy Life', icon: '🏛️', count: galleryImages.filter(img => img.category === 'academy').length }
  ];

  const viewModes = [
    { id: 'masonry', label: 'Masonry', icon: '⚡' },
    { id: 'grid', label: 'Grid', icon: '▦' },
    { id: 'showcase', label: 'Showcase', icon: '🌟' }
  ];

  const getFilteredImages = () => {
    if (activeFilter === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === activeFilter);
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const filteredImages = getFilteredImages();
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const filteredImages = getFilteredImages();
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <Layout>
      <Head>
        <title>Gallery | Sanchay Kathak Academy - Visual Journey Through Dance Excellence</title>
        <meta name="description" content="Explore our stunning gallery showcasing 35 years of Kathak excellence. View performances, student achievements, and memorable moments from Sanchay Kathak Academy." />
        <style jsx global>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(10deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.6); }
            50% { box-shadow: 0 0 60px rgba(255, 215, 0, 1), 0 0 90px rgba(255, 215, 0, 0.8); }
          }
          
          @keyframes morphing {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            50% { border-radius: 40% 30% 60% 70% / 40% 50% 60% 30%; }
            75% { border-radius: 70% 60% 30% 40% / 30% 40% 70% 60%; }
          }
          
          @keyframes hologram {
            0%, 100% { 
              filter: hue-rotate(0deg) saturate(100%) brightness(100%);
              transform: scale(1) rotateZ(0deg);
            }
            25% { 
              filter: hue-rotate(90deg) saturate(120%) brightness(110%);
              transform: scale(1.02) rotateZ(1deg);
            }
            50% { 
              filter: hue-rotate(180deg) saturate(140%) brightness(120%);
              transform: scale(1.05) rotateZ(0deg);
            }
            75% { 
              filter: hue-rotate(270deg) saturate(120%) brightness(110%);
              transform: scale(1.02) rotateZ(-1deg);
            }
          }
          
          @keyframes levitate {
            0%, 100% { transform: translateY(0px) translateX(0px) rotateZ(0deg); }
            25% { transform: translateY(-15px) translateX(8px) rotateZ(2deg); }
            50% { transform: translateY(-25px) translateX(0px) rotateZ(0deg); }
            75% { transform: translateY(-15px) translateX(-8px) rotateZ(-2deg); }
          }
          
          @keyframes rainbow-border {
            0% { border-color: #ff6b6b; box-shadow: 0 0 20px #ff6b6b; }
            16.66% { border-color: #4ecdc4; box-shadow: 0 0 20px #4ecdc4; }
            33.33% { border-color: #45b7d1; box-shadow: 0 0 20px #45b7d1; }
            50% { border-color: #96ceb4; box-shadow: 0 0 20px #96ceb4; }
            66.66% { border-color: #ffeaa7; box-shadow: 0 0 20px #ffeaa7; }
            83.33% { border-color: #dda0dd; box-shadow: 0 0 20px #dda0dd; }
            100% { border-color: #ff6b6b; box-shadow: 0 0 20px #ff6b6b; }
          }
          
          @keyframes matrix-rain {
            0% { transform: translateY(-100vh); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          
          @keyframes photo-reveal {
            0% { 
              clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
              filter: blur(10px) brightness(0.5);
            }
            100% { 
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
              filter: blur(0px) brightness(1);
            }
          }
          
          @keyframes cosmic-rotation {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(1.2); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          .shimmer-text {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd);
            background-size: 400% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          
          .float-animation {
            animation: float 8s ease-in-out infinite;
          }
          
          .pulse-glow {
            animation: pulse-glow 4s ease-in-out infinite;
          }
          
          .morphing-blob {
            animation: morphing 12s ease-in-out infinite;
          }
          
          .hologram-effect {
            animation: hologram 8s ease-in-out infinite;
          }
          
          .levitate {
            animation: levitate 10s ease-in-out infinite;
          }
          
          .rainbow-border {
            animation: rainbow-border 4s linear infinite;
          }
          
          .photo-reveal {
            animation: photo-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .cosmic-rotation {
            animation: cosmic-rotation 20s linear infinite;
          }
          
          .ultra-glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(30px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          
          .mega-glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(50px) saturate(300%) contrast(120%);
            border: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          
          .hover-3d {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .hover-3d:hover {
            transform: translateY(-20px) scale(1.05) rotateY(8deg) rotateX(5deg);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          }
          
          .perspective-1000 {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          
          .loading-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
          
          .masonry-grid {
            column-count: 4;
            column-gap: 1rem;
            column-fill: balance;
          }
          
          @media (max-width: 1024px) {
            .masonry-grid { column-count: 3; }
          }
          
          @media (max-width: 768px) {
            .masonry-grid { column-count: 2; }
          }
          
          @media (max-width: 480px) {
            .masonry-grid { column-count: 1; }
          }
          
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 1rem;
            display: inline-block;
            width: 100%;
          }
          
          .grid-layout {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          
          .showcase-layout {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
          }
          
          .image-container {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            border-radius: 20px;
          }
          
          .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              45deg,
              rgba(255, 107, 107, 0.9),
              rgba(78, 205, 196, 0.9),
              rgba(69, 183, 209, 0.9),
              rgba(150, 206, 180, 0.9)
            );
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 1.5rem;
          }
          
          .image-container:hover .image-overlay {
            opacity: 1;
          }
          
          .zoom-icon {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 3rem;
            height: 3rem;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: scale(0);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .image-container:hover .zoom-icon {
            transform: scale(1);
          }
        `}</style>
      </Head>

      {/* EPIC BACKGROUND CANVAS */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>

      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="w-32 h-32 mx-auto mb-8"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 2, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
              >
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                  alt="Sanchay Kathak Academy"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading Gallery...
              </motion.h2>
              <motion.div
                className="w-64 h-2 bg-white/30 rounded-full mx-auto overflow-hidden"
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION WITH ACADEMY LOGO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Floating Gallery Preview Cards */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-16 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() > 0.5 ? 30 : -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#ff6b6b]/30 to-[#4ecdc4]/30 loading-shimmer"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* ACADEMY LOGO - CENTER FOCUSED */}
            <motion.div 
              className="inline-block mb-12"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl pulse-glow morphing-blob p-8">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                    alt="Sanchay Kathak Academy"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain hologram-effect"
                    priority
                  />
                </div>
                
                {/* Orbital Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      top: `${50 + Math.sin((i * 45) * Math.PI / 180) * 120}%`,
                      left: `${50 + Math.cos((i * 45) * Math.PI / 180) * 120}%`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, delay: i * 0.3 }
                    }}
                  >
                    {['📸', '🎭', '✨', '🌟', '💃', '🎵', '🖼️', '💫'][i]}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold leading-tight mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <span className="block text-[#0C1B33] mb-4">Visual</span>
              <span className="block shimmer-text">Gallery</span>
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#ff6b6b]">35 Years</span> of 
                <span className="text-[#4ecdc4]"> Dance</span>
                <span className="text-[#45b7d1]"> Excellence</span>
              </h2>
              <p className="text-xl text-[#2E2E2E] leading-relaxed">
                Journey through our spectacular collection of performances, achievements, and memorable moments. 
                Every image tells a story of passion, dedication, and artistic excellence.
              </p>
            </motion.div>

            {/* EPIC STATS */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, staggerChildren: 0.1 }}
            >
              {[
                { number: "500+", label: "Photos", icon: "📸", color: "#ff6b6b" },
                { number: "15+", label: "Categories", icon: "📁", color: "#4ecdc4" },
                { number: "35", label: "Years", icon: "⏰", color: "#45b7d1" },
                { number: "100+", label: "Performances", icon: "🎭", color: "#96ceb4" },
                { number: "∞", label: "Memories", icon: "💖", color: "#ffeaa7" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="perspective-1000 hover-3d"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="ultra-glass p-6 rounded-2xl text-center h-full">
                    <motion.div 
                      className="text-4xl mb-3"
                      style={{ color: stat.color }}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3
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
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-3 border-[#ff6b6b] flex justify-center p-2">
            <motion.div 
              className="w-2 h-2 bg-[#ff6b6b] rounded-full"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* FILTER & VIEW MODE CONTROLS */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden ${
                  activeFilter === filter.id
                    ? 'rainbow-border text-white'
                    : 'ultra-glass text-[#2E2E2E] hover:scale-105 border-2 border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Cosmic Background */}
                {activeFilter === filter.id && (
                  <motion.div 
                    className="absolute inset-0 cosmic-rotation"
                    style={{
                      background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)'
                    }}
                  />
                )}
                
                <span className="relative z-10 flex items-center space-x-3">
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: activeFilter === filter.id ? [0, 360] : 0 }}
                    transition={{ duration: 2, repeat: activeFilter === filter.id ? Infinity : 0 }}
                  >
                    {filter.icon}
                  </motion.span>
                  <span>{filter.label}</span>
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      activeFilter === filter.id ? 'bg-white/20' : 'bg-[#4ecdc4]/20'
                    }`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {filter.count}
                  </motion.span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* View Mode Controls */}
          <motion.div 
            className="flex justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {viewModes.map((mode, index) => (
              <motion.button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white shadow-lg'
                    : 'mega-glass text-[#2E2E2E] hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>{mode.icon}</span>
                  <span>{mode.label}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* GALLERY CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, staggerChildren: 0.05 }}
              className={
                viewMode === 'masonry' ? 'masonry-grid' :
                viewMode === 'grid' ? 'grid-layout' :
                'showcase-layout'
              }
            >
              {getFilteredImages().map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`${viewMode === 'masonry' ? 'masonry-item' : ''} group perspective-1000`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="image-container hover-3d relative overflow-hidden rounded-2xl shadow-lg">
                    <motion.div
                      className="relative aspect-auto"
                      style={{ height: viewMode === 'masonry' ? 'auto' : '300px' }}
                    >
                      <Image
                        src={image.url}
                        alt={image.title}
                        fill={viewMode !== 'masonry'}
                        width={viewMode === 'masonry' ? 400 : undefined}
                        height={viewMode === 'masonry' ? 600 : undefined}
                        className={`${viewMode === 'masonry' ? 'w-full h-auto' : 'object-cover'} photo-reveal transition-transform duration-700 group-hover:scale-110`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    
                    {/* Overlay */}
                    <div className="image-overlay">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                        <p className="text-xs opacity-75 mt-2">{image.year}</p>
                      </div>
                    </div>
                    
                    {/* Zoom Icon */}
                    <div className="zoom-icon">
                      <svg className="w-6 h-6 text-[#ff6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {image.category}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
            >
              ✕
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              ←
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              →
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.5, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
                <p className="text-xs opacity-75 mt-1">{selectedImage.year} • {selectedImage.category}</p>
              </motion.div>
            </motion.div>

            {/* Lightbox Controls */}
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {getFilteredImages().map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                    setSelectedImage(getFilteredImages()[idx]);
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}