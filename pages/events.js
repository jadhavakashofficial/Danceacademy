// pages/events.js
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events() {
  const canvasRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Thrissur Vishnumaya Devasthan Festival",
      subtitle: "Longest-Running Dance Festival in India",
      date: "2024",
      location: "Thrissur, Kerala",
      status: "completed",
      category: "cultural",
      type: "International Recognition",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2556-scaled.jpg",
      description: "A prestigious performance at India's longest-running dance festival, recognized by the Universal Records Forum. This festival celebrates the rich tradition of Indian classical arts.",
      highlights: [
        "Recognized by Universal Records Forum",
        "India's longest-running dance festival",
        "Cultural heritage celebration",
        "Traditional Kathak performance",
        "International audience"
      ],
      details: {
        duration: "3 Days",
        participants: "500+ Artists",
        audience: "10,000+ Visitors",
        significance: "Cultural Heritage Preservation"
      },
      gallery: [
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2556-scaled.jpg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_9244-scaled.jpg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg"
      ]
    },
    {
      id: 2,
      title: "Bharat Ratna Pandit Bhimsen Joshi Mahotsav",
      subtitle: "Tribute to Classical Music Legend",
      date: "2024",
      location: "Maharashtra",
      status: "completed",
      category: "classical",
      type: "National Festival",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
      description: "A magnificent tribute to the legendary Pandit Bhimsen Joshi, featuring classical dance and music performances celebrating India's artistic heritage.",
      highlights: [
        "Tribute to Bharat Ratna Pandit Bhimsen Joshi",
        "Classical music and dance fusion",
        "National level participation",
        "Traditional Raag-based choreography",
        "Cultural unity celebration"
      ],
      details: {
        duration: "2 Days",
        participants: "200+ Artists",
        audience: "5,000+ Music Lovers",
        significance: "Classical Arts Preservation"
      },
      gallery: [
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233828980.png",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750240970773.png"
      ]
    },
    {
      id: 3,
      title: "International Kathak Festival - Europe Tour",
      subtitle: "Spreading Indian Culture Globally",
      date: "2023-2024",
      location: "Germany, Austria, Netherlands, France",
      status: "completed",
      category: "international",
      type: "Cultural Exchange",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739429006284.jpeg",
      description: "A remarkable journey across Europe showcasing authentic Kathak to international audiences, promoting cultural exchange and artistic diplomacy.",
      highlights: [
        "4 country European tour",
        "Cultural exchange program",
        "International audience engagement",
        "Diplomatic cultural mission",
        "Global recognition of Indian arts"
      ],
      details: {
        duration: "2 Weeks",
        participants: "15 Artists",
        audience: "20,000+ International Viewers",
        significance: "Global Cultural Ambassador"
      },
      gallery: [
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739429006284.jpeg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430044988.jpeg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430747623-scaled.jpeg"
      ]
    },
    {
      id: 4,
      title: "Asha Bhosale Puraskar Celebration",
      subtitle: "Honoring Musical Legends",
      date: "2023",
      location: "Mumbai, Maharashtra",
      status: "completed", 
      category: "award",
      type: "Recognition Ceremony",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739431559767.jpeg",
      description: "A prestigious award ceremony celebrating musical excellence, featuring performances with compositions by legendary artists including Pt. Hridaynath Mangeshkar, Pt. Shivkumar Sharma, and others.",
      highlights: [
        "Collaboration with music legends",
        "12 consecutive years of participation",
        "Original choreography presentations",
        "Industry recognition",
        "Musical heritage celebration"
      ],
      details: {
        duration: "1 Day",
        participants: "50+ Artists",
        audience: "3,000+ Industry Professionals",
        significance: "Music Industry Recognition"
      },
      gallery: [
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739431559767.jpeg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739432659613.jpeg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926106.jpg"
      ]
    },
    {
      id: 5,
      title: "Sanchay Kathak Annual Mahotsav 2025",
      subtitle: "Celebrating 35 Years of Excellence",
      date: "March 15-17, 2025",
      location: "Pimpri-Chinchwad Cultural Center",
      status: "upcoming",
      category: "annual",
      type: "Academy Festival",
      image: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3095.png",
      description: "Join us for our grand annual celebration marking 35 years of Sanchay Kathak Academy. A three-day extravaganza featuring student performances, guest artists, and workshops.",
      highlights: [
        "35th Anniversary Celebration",
        "Student showcase performances", 
        "Master class workshops",
        "Guest artist performances",
        "Community cultural celebration"
      ],
      details: {
        duration: "3 Days",
        participants: "300+ Students & Artists",
        audience: "Expected 5,000+ Visitors",
        significance: "Academy Milestone Celebration"
      },
      gallery: [
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3095.png",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3584.jpg",
        "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926100.jpg"
      ],
      registration: {
        available: true,
        deadline: "March 10, 2025",
        fee: "₹500 per person",
        workshops: "₹1,500 per workshop"
      }
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Events', count: events.length },
    { id: 'upcoming', label: 'Upcoming', count: events.filter(e => e.status === 'upcoming').length },
    { id: 'cultural', label: 'Cultural', count: events.filter(e => e.category === 'cultural').length },
    { id: 'international', label: 'International', count: events.filter(e => e.category === 'international').length },
    { id: 'classical', label: 'Classical', count: events.filter(e => e.category === 'classical').length }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : activeFilter === 'upcoming'
    ? events.filter(event => event.status === 'upcoming')
    : events.filter(event => event.category === activeFilter);

  useEffect(() => {
    // Background animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 120;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: `rgba(${Math.floor(Math.random() * 50 + 180)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.random() * 0.3 + 0.1})`
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(253, 249, 240, 0.8)';
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
          particle.size = Math.random() * 4 + 1;
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
    <Layout>
      <Head>
        <title>Events | Sanchay Kathak Nrutya Academy</title>
        <meta name="description" content="Discover our cultural events, festivals, and performances celebrating the rich tradition of Kathak dance." />
      </Head>

      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>

      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #FDF9F0 0%, #FFF5ED 25%, #FDF9F0 50%, #FFF0E5 75%, #FDF9F0 100%)',
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
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
          
          <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-gradient-to-br from-[#C73664]/10 via-[#B300B3]/8 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-[10%] w-72 h-72 bg-gradient-to-tl from-[#00A3A3]/8 via-[#00FFF7]/10 to-transparent rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <span className="relative inline-block px-8 py-3 bg-white/60 backdrop-blur-xl text-[#C73664] rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-[#C73664]/15 shadow-lg">
                Cultural Calendar
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#0C1B33]">Kathak </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] animate-shimmer">
                Events & Festivals
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#C73664] via-[#B300B3] to-[#00A3A3] mx-auto rounded-full mb-6"></div>
            
            <p className="text-lg md:text-xl text-[#2E2E2E] max-w-3xl mx-auto leading-relaxed">
              Experience the magic of Kathak through our curated events, festivals, and cultural celebrations that honor tradition while embracing innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-[#C73664]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-[#C73664] to-[#B300B3] text-white shadow-lg'
                    : 'bg-white/80 text-[#2E2E2E] border border-[#C73664]/20 hover:bg-[#C73664]/10'
                }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  activeFilter === category.id 
                    ? 'bg-white/20' 
                    : 'bg-[#C73664]/10'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Event Card */}
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-white/50">
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md ${
                        event.status === 'upcoming' 
                          ? 'bg-gradient-to-r from-[#00A3A3] to-[#00FFF7]' 
                          : 'bg-gradient-to-r from-[#C73664] to-[#B300B3]'
                      }`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="w-full h-full bg-gray-200 transition-transform duration-700 group-hover:scale-110"
                        style={{ 
                          backgroundImage: `url(${event.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B33]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* View Details Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C73664]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#00A3A3] text-sm font-medium">{event.type}</span>
                        <span className="text-[#2E2E2E]/70 text-sm">{event.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#0C1B33] mb-2 group-hover:text-[#C73664] transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      <p className="text-[#B300B3] text-sm font-medium mb-3">
                        {event.subtitle}
                      </p>
                      
                      <p className="text-[#2E2E2E]/80 text-sm leading-relaxed mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center text-[#2E2E2E]/70 text-sm mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>

                      {/* Registration Button for Upcoming Events */}
                      {event.status === 'upcoming' && event.registration && (
                        <div className="mt-4">
                          <button className="w-full bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] text-white py-3 rounded-xl font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Register Now
                          </button>
                        </div>
                      )}

                      {/* Highlights Preview */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {event.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#C73664]/10 text-[#C73664] text-xs rounded-full">
                            {highlight}
                          </span>
                        ))}
                        {event.highlights.length > 2 && (
                          <span className="px-3 py-1 bg-[#2E2E2E]/10 text-[#2E2E2E] text-xs rounded-full">
                            +{event.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-3 h-3 bg-[#FFD700] rounded-full animate-ping"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div 
                  className="h-64 bg-gray-200 relative"
                  style={{ 
                    backgroundImage: `url(${selectedEvent.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Event Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md ${
                        selectedEvent.status === 'upcoming' 
                          ? 'bg-gradient-to-r from-[#00A3A3] to-[#00FFF7]' 
                          : 'bg-gradient-to-r from-[#C73664] to-[#B300B3]'
                      }`}>
                        {selectedEvent.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                      <span className="text-sm">{selectedEvent.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
                    <p className="text-xl opacity-90">{selectedEvent.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1B33] mb-4">Event Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C73664] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-[#2E2E2E]">{selectedEvent.location}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C73664] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#2E2E2E]">{selectedEvent.details.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C73664] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-[#2E2E2E]">{selectedEvent.details.participants}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C73664] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-[#2E2E2E]">{selectedEvent.details.audience}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0C1B33] mb-4">Event Description</h3>
                    <p className="text-[#2E2E2E] leading-relaxed mb-4">{selectedEvent.description}</p>
                    <div className="bg-[#C73664]/5 p-4 rounded-xl">
                      <h4 className="font-bold text-[#C73664] mb-2">Significance</h4>
                      <p className="text-[#2E2E2E] text-sm">{selectedEvent.details.significance}</p>
                    </div>
                  </div>
                </div>

                {/* Event Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0C1B33] mb-4">Event Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedEvent.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#C73664]/20 rounded-full flex items-center justify-center mt-0.5 mr-3">
                          <div className="w-2 h-2 bg-[#C73664] rounded-full"></div>
                        </div>
                        <span className="text-[#2E2E2E] text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registration Section for Upcoming Events */}
                {selectedEvent.status === 'upcoming' && selectedEvent.registration && (
                  <div className="bg-gradient-to-r from-[#00A3A3]/10 to-[#00FFF7]/10 p-6 rounded-2xl mb-8">
                    <h3 className="text-xl font-bold text-[#0C1B33] mb-4">Registration Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#00A3A3]">{selectedEvent.registration.fee}</div>
                        <div className="text-sm text-[#2E2E2E]">Entry Fee</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#00A3A3]">{selectedEvent.registration.workshops}</div>
                        <div className="text-sm text-[#2E2E2E]">Workshop Fee</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#00A3A3]">{selectedEvent.registration.deadline}</div>
                        <div className="text-sm text-[#2E2E2E]">Registration Deadline</div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#00A3A3] to-[#00FFF7] text-white py-3 rounded-xl font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Register for Event
                    </button>
                  </div>
                )}

                {/* Event Gallery */}
                <div>
                  <h3 className="text-xl font-bold text-[#0C1B33] mb-4">Event Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedEvent.gallery.map((image, idx) => (
                      <div key={idx} className="relative h-32 rounded-xl overflow-hidden group cursor-pointer">
                        <div 
                          className="w-full h-full bg-gray-200 transition-transform duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
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
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Layout>
  )
}