// pages/gallery.js
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const canvasRef = useRef(null);
<<<<<<< HEAD
=======
  const [activeFilter, setActiveFilter] = useState('all');
>>>>>>> fix-branch
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // All gallery images in a single array
  const galleryImages = [
    {
      id: 1,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750241518480.png",
      title: "Classical Kathak Performance",
      description: "Mesmerizing traditional dance presentation"
    },
    {
      id: 2,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750241194343.png",
      title: "Grace in Motion",
      description: "Elegant expressions of classical art"
    },
    {
      id: 3,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750240970773.png",
      title: "Cultural Heritage",
      description: "Preserving traditions through dance"
    },
    {
      id: 4,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233828980.png",
      title: "Student Excellence",
      description: "Rising stars of Kathak"
    },
    {
      id: 5,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
      title: "Learning Journey",
      description: "Dedication in practice"
    },
    {
      id: 6,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750232506953.png",
      title: "Academy Moments",
      description: "Cherished memories"
    },
    {
      id: 7,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739431559767.jpeg",
      title: "Artistic Expression",
      description: "Dance as a language of emotions"
    },
    {
      id: 8,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739432659613.jpeg",
      title: "Perfect Synchronization",
      description: "Harmony in movement"
    },
    {
      id: 9,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430747623-scaled.jpeg",
      title: "Master at Work",
      description: "Guru's divine performance"
    },
    {
      id: 10,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430044988.jpeg",
      title: "Knowledge Transfer",
      description: "Teaching the next generation"
    },
    {
      id: 11,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739429006284.jpeg",
      title: "Daily Inspiration",
      description: "Life at the academy"
    },
    {
      id: 12,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926100.jpg",
      title: "Rising Stars",
      description: "Future of Kathak"
    },
    {
      id: 13,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000069339-scaled.jpg",
      title: "Majestic Performance",
      description: "Grand cultural presentation"
    },
    {
      id: 14,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000046801.jpg",
      title: "Young Talents",
      description: "The future artists"
    },
    {
      id: 15,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000046504.jpg",
      title: "Community Gathering",
      description: "Celebrating together"
    },
    {
      id: 16,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/18159.jpg",
      title: "Master Class",
      description: "Wisdom in motion"
    },
    {
      id: 17,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3095.png",
      title: "Cultural Program",
      description: "Heritage celebration"
    },
    {
      id: 18,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2984-scaled.jpg",
      title: "Traditional Elegance",
      description: "Festival performance"
    },
    {
      id: 19,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2556-scaled.jpg",
      title: "Teaching Excellence",
      description: "Guru's demonstration"
    },
    {
      id: 20,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg",
      title: "Individual Brilliance",
      description: "Solo performance mastery"
    },
    {
      id: 21,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2398-scaled.jpg",
      title: "Practice Perfection",
      description: "Dedication in learning"
    },
    {
      id: 22,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926106.jpg",
      title: "Unity in Dance",
      description: "Group performance excellence"
    },
    {
      id: 23,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_9244-scaled.jpg",
      title: "35 Years of Excellence",
      description: "Academy's proud legacy"
    },
    {
      id: 24,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926102.jpg",
      title: "Success Celebration",
      description: "Achievement moments"
    },
    {
      id: 25,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3584.jpg",
      title: "Artistry Peak",
      description: "Masterful display"
    },
    {
      id: 26,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3517-scaled.jpg",
      title: "Magical Moments",
      description: "Evening recital beauty"
    },
    {
      id: 27,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3117.png",
      title: "Leading Excellence",
      description: "Guru's exemplary performance"
    },
    {
      id: 28,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2381.jpg",
      title: "Continuing Tradition",
      description: "Academy's lasting legacy"
    },
    {
      id: 29,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-scaled.jpg",
      title: "Timeless Beauty",
      description: "Classical presentation excellence"
    },
    {
      id: 30,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-1-scaled.jpg",
      title: "Future of Kathak",
      description: "Student excellence showcase"
    }
  ];

  useEffect(() => {
    // Epic particle system with dance elements
=======
  const [viewMode, setViewMode] = useState('masonry'); // masonry, grid, showcase

  useEffect(() => {
    // EPIC PARTICLE SYSTEM WITH DANCE ELEMENTS
>>>>>>> fix-branch
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
<<<<<<< HEAD
    const particleCount = 200;
=======
    const particleCount = 300;
>>>>>>> fix-branch
    const danceElements = ['💃', '🎭', '✨', '⭐', '🌟', '💫', '🎵', '♪', '♬', '🎨', '📸', '🖼️'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
<<<<<<< HEAD
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
        color: `hsla(${Math.random() * 360}, 70%, 60%, ${Math.random() * 0.3 + 0.1})`,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 0.02,
        element: danceElements[Math.floor(Math.random() * danceElements.length)],
        isElement: Math.random() > 0.7,
        pulse: Math.random() * Math.PI * 2,
        orbit: Math.random() * 80 + 40,
        orbitSpeed: Math.random() * 0.015 + 0.005
=======
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
>>>>>>> fix-branch
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
<<<<<<< HEAD
      // Ethereal background gradient
=======
      // EPIC HOLOGRAPHIC BACKGROUND
>>>>>>> fix-branch
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height) * 0.8
      );
<<<<<<< HEAD
      gradient.addColorStop(0, 'rgba(253, 249, 240, 0.98)');
      gradient.addColorStop(0.3, 'rgba(255, 248, 240, 0.96)');
      gradient.addColorStop(0.6, 'rgba(255, 252, 247, 0.94)');
      gradient.addColorStop(1, 'rgba(255, 245, 237, 0.98)');
=======
      gradient.addColorStop(0, 'rgba(250, 245, 255, 0.98)');
      gradient.addColorStop(0.2, 'rgba(240, 248, 255, 0.95)');
      gradient.addColorStop(0.5, 'rgba(255, 240, 245, 0.93)');
      gradient.addColorStop(0.8, 'rgba(245, 255, 250, 0.95)');
      gradient.addColorStop(1, 'rgba(255, 250, 240, 0.98)');
>>>>>>> fix-branch
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
        
<<<<<<< HEAD
        const pulseSize = 1 + Math.sin(particle.pulse * 3) * 0.3;
=======
        const pulseSize = 1 + Math.sin(particle.pulse * 2) * 0.4;
>>>>>>> fix-branch
        ctx.scale(pulseSize, pulseSize);
        
        ctx.globalAlpha = particle.opacity;
        
        if (particle.isElement) {
          // Draw dance elements
<<<<<<< HEAD
          ctx.font = `${particle.size * 3}px serif`;
=======
          ctx.font = `${particle.size * 4}px serif`;
>>>>>>> fix-branch
          ctx.fillStyle = particle.color;
          ctx.textAlign = 'center';
          ctx.fillText(particle.element, 0, 0);
        } else {
          // Draw ethereal particles
<<<<<<< HEAD
          const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 1.5);
          grd.addColorStop(0, particle.color);
          grd.addColorStop(0.7, particle.color.replace(/[\d.]+\)$/g, '0.3)'));
=======
          const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
          grd.addColorStop(0, particle.color);
          grd.addColorStop(0.5, particle.color.replace(/[\d.]+\)$/g, '0.5)'));
>>>>>>> fix-branch
          grd.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
<<<<<<< HEAD
=======
          
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
>>>>>>> fix-branch
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
<<<<<<< HEAD
    setTimeout(() => setIsLoading(false), 2500);
=======
    setTimeout(() => setIsLoading(false), 2000);
>>>>>>> fix-branch
    
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

<<<<<<< HEAD
=======
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

>>>>>>> fix-branch
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
<<<<<<< HEAD
    const nextIndex = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
=======
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
>>>>>>> fix-branch
  };

  return (
    <Layout>
      <Head>
        <title>Gallery | Sanchay Kathak Academy - Visual Journey Through Dance Excellence</title>
        <meta name="description" content="Explore our stunning gallery showcasing 35 years of Kathak excellence. View performances, student achievements, and memorable moments from Sanchay Kathak Academy." />
        <style jsx global>{`
<<<<<<< HEAD
          @keyframes shimmerFlow {
=======
          @keyframes shimmer {
>>>>>>> fix-branch
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
<<<<<<< HEAD
          @keyframes floatDance {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            25% { transform: translateY(-15px) rotate(5deg) scale(1.05); }
            50% { transform: translateY(-25px) rotate(0deg) scale(1.1); }
            75% { transform: translateY(-15px) rotate(-5deg) scale(1.05); }
          }
          
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(199, 54, 100, 0.4); }
            50% { box-shadow: 0 0 40px rgba(199, 54, 100, 0.8), 0 0 60px rgba(199, 54, 100, 0.6); }
          }
          
          @keyframes morphingShape {
=======
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(10deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.6); }
            50% { box-shadow: 0 0 60px rgba(255, 215, 0, 1), 0 0 90px rgba(255, 215, 0, 0.8); }
          }
          
          @keyframes morphing {
>>>>>>> fix-branch
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            50% { border-radius: 40% 30% 60% 70% / 40% 50% 60% 30%; }
            75% { border-radius: 70% 60% 30% 40% / 30% 40% 70% 60%; }
          }
          
<<<<<<< HEAD
          @keyframes holographicShift {
=======
          @keyframes hologram {
>>>>>>> fix-branch
            0%, 100% { 
              filter: hue-rotate(0deg) saturate(100%) brightness(100%);
              transform: scale(1) rotateZ(0deg);
            }
            25% { 
<<<<<<< HEAD
              filter: hue-rotate(90deg) saturate(110%) brightness(105%);
              transform: scale(1.02) rotateZ(1deg);
            }
            50% { 
              filter: hue-rotate(180deg) saturate(120%) brightness(110%);
              transform: scale(1.05) rotateZ(0deg);
            }
            75% { 
              filter: hue-rotate(270deg) saturate(110%) brightness(105%);
=======
              filter: hue-rotate(90deg) saturate(120%) brightness(110%);
              transform: scale(1.02) rotateZ(1deg);
            }
            50% { 
              filter: hue-rotate(180deg) saturate(140%) brightness(120%);
              transform: scale(1.05) rotateZ(0deg);
            }
            75% { 
              filter: hue-rotate(270deg) saturate(120%) brightness(110%);
>>>>>>> fix-branch
              transform: scale(1.02) rotateZ(-1deg);
            }
          }
          
<<<<<<< HEAD
          @keyframes levitateMove {
            0%, 100% { transform: translateY(0px) translateX(0px) rotateZ(0deg); }
            25% { transform: translateY(-10px) translateX(5px) rotateZ(1deg); }
            50% { transform: translateY(-20px) translateX(0px) rotateZ(0deg); }
            75% { transform: translateY(-10px) translateX(-5px) rotateZ(-1deg); }
          }
          
          @keyframes rainbowBorder {
            0% { border-color: #ff6b6b; }
            16.66% { border-color: #4ecdc4; }
            33.33% { border-color: #45b7d1; }
            50% { border-color: #96ceb4; }
            66.66% { border-color: #ffeaa7; }
            83.33% { border-color: #dda0dd; }
            100% { border-color: #ff6b6b; }
          }
          
          @keyframes photoReveal {
            0% { 
              clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
              filter: blur(8px) brightness(0.7);
=======
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
>>>>>>> fix-branch
            }
            100% { 
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
              filter: blur(0px) brightness(1);
            }
          }
          
<<<<<<< HEAD
          @keyframes cosmicRotation {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.05); }
            50% { transform: rotate(180deg) scale(1.1); }
            75% { transform: rotate(270deg) scale(1.05); }
            100% { transform: rotate(360deg) scale(1); }
          }

          @keyframes magneticHover {
            0% { transform: translateY(0) scale(1) rotateX(0); }
            100% { transform: translateY(-8px) scale(1.03) rotateX(5deg); }
          }
          
          .shimmer-text {
            background: linear-gradient(135deg, #C73664, #B300B3, #00A3A3, #FFD700, #C73664);
=======
          @keyframes cosmic-rotation {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(1.2); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          .shimmer-text {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd);
>>>>>>> fix-branch
            background-size: 400% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
<<<<<<< HEAD
            animation: shimmerFlow 3s linear infinite;
          }
          
          .float-dance {
            animation: floatDance 6s ease-in-out infinite;
          }
          
          .pulse-glow {
            animation: pulseGlow 3s ease-in-out infinite;
          }
          
          .morphing-shape {
            animation: morphingShape 10s ease-in-out infinite;
          }
          
          .holographic-effect {
            animation: holographicShift 6s ease-in-out infinite;
          }
          
          .levitate-move {
            animation: levitateMove 8s ease-in-out infinite;
          }
          
          .rainbow-border {
            animation: rainbowBorder 3s linear infinite;
            border-width: 2px;
            border-style: solid;
          }
          
          .photo-reveal {
            animation: photoReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .cosmic-rotation {
            animation: cosmicRotation 15s linear infinite;
          }

          .magnetic-hover:hover {
            animation: magneticHover 0.3s ease-out forwards;
          }
          
          .ultra-glass {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(25px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          }
          
          .mega-glass {
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(40px) saturate(200%) contrast(110%);
            border: 2px solid rgba(255, 255, 255, 0.15);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
=======
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
>>>>>>> fix-branch
          }
          
          .hover-3d {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
<<<<<<< HEAD
            transform-style: preserve-3d;
          }
          
          .hover-3d:hover {
            transform: translateY(-15px) scale(1.03) rotateY(5deg) rotateX(3deg);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
=======
          }
          
          .hover-3d:hover {
            transform: translateY(-20px) scale(1.05) rotateY(8deg) rotateX(5deg);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
>>>>>>> fix-branch
          }
          
          .perspective-1000 {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          
          .loading-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
<<<<<<< HEAD
            animation: shimmerFlow 1.5s infinite;
=======
            animation: shimmer 2s infinite;
>>>>>>> fix-branch
          }
          
          .masonry-grid {
            column-count: 4;
<<<<<<< HEAD
            column-gap: 1.5rem;
            column-fill: balance;
          }
          
          @media (max-width: 1200px) {
=======
            column-gap: 1rem;
            column-fill: balance;
          }
          
          @media (max-width: 1024px) {
>>>>>>> fix-branch
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
<<<<<<< HEAD
            margin-bottom: 1.5rem;
=======
            margin-bottom: 1rem;
>>>>>>> fix-branch
            display: inline-block;
            width: 100%;
          }
          
<<<<<<< HEAD
=======
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
          
>>>>>>> fix-branch
          .image-container {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            border-radius: 20px;
<<<<<<< HEAD
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
=======
>>>>>>> fix-branch
          }
          
          .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
<<<<<<< HEAD
              135deg,
              rgba(199, 54, 100, 0.85),
              rgba(179, 0, 179, 0.85),
              rgba(0, 163, 163, 0.85),
              rgba(255, 215, 0, 0.85)
=======
              45deg,
              rgba(255, 107, 107, 0.9),
              rgba(78, 205, 196, 0.9),
              rgba(69, 183, 209, 0.9),
              rgba(150, 206, 180, 0.9)
>>>>>>> fix-branch
            );
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
<<<<<<< HEAD
            padding: 2rem;
=======
            padding: 1.5rem;
>>>>>>> fix-branch
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
<<<<<<< HEAD

          .loading-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </Head>

      {/* Epic background canvas */}
=======
        `}</style>
      </Head>

      {/* EPIC BACKGROUND CANVAS */}
>>>>>>> fix-branch
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>

<<<<<<< HEAD
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-[#C73664] via-[#B300B3] to-[#00A3A3] z-50 flex items-center justify-center"
=======
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] z-50 flex items-center justify-center"
>>>>>>> fix-branch
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <motion.div
<<<<<<< HEAD
                className="w-40 h-40 mx-auto mb-8 relative"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full morphing-shape"></div>
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                  alt="Sanchay Kathak Academy"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
                />
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold text-white mb-6 shimmer-text"
=======
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
>>>>>>> fix-branch
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading Gallery...
              </motion.h2>
<<<<<<< HEAD
              <motion.p 
                className="text-white/80 text-lg mb-8"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Preparing visual excellence
              </motion.p>
              <motion.div
                className="w-80 h-2 bg-white/20 rounded-full mx-auto overflow-hidden"
=======
              <motion.div
                className="w-64 h-2 bg-white/30 rounded-full mx-auto overflow-hidden"
>>>>>>> fix-branch
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
<<<<<<< HEAD
                  transition={{ duration: 2.5, ease: "easeInOut" }}
=======
                  transition={{ duration: 2, ease: "easeInOut" }}
>>>>>>> fix-branch
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Hero section with centered logo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Floating preview elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-14 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
=======
      {/* HERO SECTION WITH ACADEMY LOGO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Floating Gallery Preview Cards */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-16 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
>>>>>>> fix-branch
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
<<<<<<< HEAD
                y: [0, -30, 0],
                x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#C73664]/20 to-[#00A3A3]/20 loading-shimmer"></div>
=======
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
>>>>>>> fix-branch
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
<<<<<<< HEAD
            {/* Centered academy logo */}
            <motion.div 
              className="inline-block mb-16"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
=======
            {/* ACADEMY LOGO - CENTER FOCUSED */}
            <motion.div 
              className="inline-block mb-12"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
>>>>>>> fix-branch
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
<<<<<<< HEAD
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-white via-gray-50 to-white rounded-full flex items-center justify-center shadow-2xl pulse-glow morphing-shape p-10">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                    alt="Sanchay Kathak Academy"
                    width={240}
                    height={240}
                    className="w-full h-full object-contain holographic-effect filter drop-shadow-xl"
=======
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl pulse-glow morphing-blob p-8">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                    alt="Sanchay Kathak Academy"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain hologram-effect"
>>>>>>> fix-branch
                    priority
                  />
                </div>
                
<<<<<<< HEAD
                {/* Orbital dance elements */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      top: `${50 + Math.sin((i * 30) * Math.PI / 180) * 140}%`,
                      left: `${50 + Math.cos((i * 30) * Math.PI / 180) * 140}%`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.4, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, delay: i * 0.25 }
                    }}
                  >
                    {['📸', '🎭', '✨', '🌟', '💃', '🎵', '🖼️', '💫', '🎨', '♪', '♫', '🌈'][i]}
=======
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
>>>>>>> fix-branch
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h1 
<<<<<<< HEAD
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
=======
              className="text-6xl md:text-8xl font-bold leading-tight mb-8"
>>>>>>> fix-branch
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
<<<<<<< HEAD
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-[#C73664]">35 Years</span> of 
                <span className="text-[#00A3A3]"> Dance</span>
                <span className="text-[#B300B3]"> Excellence</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#2E2E2E] leading-relaxed">
                A visual symphony of performances, achievements, and timeless moments captured in our journey of preserving classical Kathak traditions.
              </p>
            </motion.div>

            {/* Gallery stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
=======
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
>>>>>>> fix-branch
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, staggerChildren: 0.1 }}
            >
              {[
<<<<<<< HEAD
                { number: `${galleryImages.length}`, label: "Moments", icon: "📸", color: "#C73664" },
                { number: "35+", label: "Years", icon: "⏰", color: "#00A3A3" }, 
                { number: "∞", label: "Memories", icon: "💖", color: "#B300B3" },
                { number: "100+", label: "Stories", icon: "🎭", color: "#FFD700" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="perspective-1000 hover-3d magnetic-hover"
                  whileHover={{ scale: 1.05 }}
=======
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
>>>>>>> fix-branch
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="ultra-glass p-6 rounded-2xl text-center h-full">
                    <motion.div 
                      className="text-4xl mb-3"
                      style={{ color: stat.color }}
                      animate={{ 
<<<<<<< HEAD
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
=======
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3
>>>>>>> fix-branch
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: stat.color }}
<<<<<<< HEAD
                      animate={{ scale: [1, 1.05, 1] }}
=======
                      animate={{ scale: [1, 1.1, 1] }}
>>>>>>> fix-branch
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

<<<<<<< HEAD
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-3 border-[#C73664] flex justify-center p-2">
            <motion.div 
              className="w-2 h-2 bg-[#C73664] rounded-full"
              animate={{ y: [0, 20, 0] }}
=======
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
>>>>>>> fix-branch
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

<<<<<<< HEAD
      {/* Main gallery section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
=======
      {/* FILTER & VIEW MODE CONTROLS */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
>>>>>>> fix-branch
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#0C1B33]">Every Image Tells </span>
              <span className="shimmer-text">A Story</span>
            </h2>
            <p className="text-xl text-[#2E2E2E] max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of performances, training sessions, achievements, and cultural celebrations that define our legacy.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] mx-auto rounded-full mt-6 cosmic-rotation"></div>
          </motion.div>

          {/* Masonry gallery */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.03 }}
              className="masonry-grid"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="masonry-item group perspective-1000"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8, rotateY: 3 }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="image-container hover-3d relative overflow-hidden rounded-2xl shadow-xl">
                    <motion.div
                      className="relative aspect-auto"
=======
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
>>>>>>> fix-branch
                    >
                      <Image
                        src={image.url}
                        alt={image.title}
<<<<<<< HEAD
                        width={400}
                        height={600}
                        className="w-full h-auto photo-reveal transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={handleImageLoad}
                      />
                    </motion.div>
                    
                    {/* Enhanced overlay */}
                    <div className="image-overlay">
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold mb-3"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {image.title}
                        </motion.h3>
                        <motion.p 
                          className="text-sm opacity-90 leading-relaxed"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {image.description}
                        </motion.p>
                        <motion.div
                          className="mt-4 w-16 h-0.5 bg-white/60 mx-auto rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "4rem" }}
                          transition={{ delay: 0.3 }}
                        />
                      </div>
                    </div>
                    
                    {/* Zoom icon */}
                    <div className="zoom-icon pulse-glow">
                      <svg className="w-6 h-6 text-[#C73664]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
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
>>>>>>> fix-branch
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

<<<<<<< HEAD
                    {/* Magic corners */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Floating sparkle */}
                    <motion.div 
                      className="absolute top-4 right-4 w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.1 
                      }}
                    />
=======
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {image.category}
                    </motion.div>
>>>>>>> fix-branch
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

<<<<<<< HEAD
      {/* Enhanced lightbox */}
=======
      {/* LIGHTBOX */}
>>>>>>> fix-branch
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
<<<<<<< HEAD
            {/* Enhanced close button */}
            <motion.button
              className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10 group"
=======
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
>>>>>>> fix-branch
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
            >
<<<<<<< HEAD
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Enhanced navigation */}
            <motion.button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10 group"
=======
              ✕
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
>>>>>>> fix-branch
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
<<<<<<< HEAD
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10 group"
=======
              ←
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
>>>>>>> fix-branch
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
<<<<<<< HEAD
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Enhanced image container */}
=======
              →
            </motion.button>

            {/* Image Container */}
>>>>>>> fix-branch
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.5, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
<<<<<<< HEAD
              <div className="relative">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg rainbow-border opacity-30 pointer-events-none"></div>
              </div>
              
              {/* Enhanced image info */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 mega-glass text-white p-6 rounded-xl"
=======
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
>>>>>>> fix-branch
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
<<<<<<< HEAD
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 shimmer-text">{selectedImage.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed">{selectedImage.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-75">Image {lightboxIndex + 1} of {galleryImages.length}</p>
                    <div className="flex space-x-1 mt-2">
                      {['#C73664', '#00A3A3', '#B300B3', '#FFD700'].map((color, i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: color, animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced lightbox controls */}
=======
                <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
                <p className="text-xs opacity-75 mt-1">{selectedImage.year} • {selectedImage.category}</p>
              </motion.div>
            </motion.div>

            {/* Lightbox Controls */}
>>>>>>> fix-branch
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
<<<<<<< HEAD
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`transition-all duration-300 rounded-full ${
                    idx === lightboxIndex 
                      ? 'w-8 h-3 bg-gradient-to-r from-[#C73664] to-[#B300B3]' 
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
=======
              {getFilteredImages().map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30'
>>>>>>> fix-branch
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
<<<<<<< HEAD
                    setSelectedImage(galleryImages[idx]);
=======
                    setSelectedImage(getFilteredImages()[idx]);
>>>>>>> fix-branch
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