// components/Header.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/gallery', label: 'Gallery', icon: '📸' },
    { href: '/events', label: 'Events', icon: '🎭' },
    { href: '/achievements', label: 'Achievements', icon: '🏆' },
    { href: '/reviews', label: 'Student Reviews', icon: '⭐' }
  ]

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-2xl shadow-2xl py-2' 
            : 'bg-white/98 backdrop-blur-xl py-3 shadow-xl'
        }`}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,248,0.97) 50%, rgba(255,255,255,0.95) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,248,248,0.99) 50%, rgba(255,255,255,0.98) 100%)',
          borderBottom: '1px solid rgba(236, 72, 153, 0.08)'
        }}
      >
        {/* Magic Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-1 h-1 bg-pink-400 rounded-full animate-float opacity-70"
            style={{
              left: `${Math.sin(mousePosition.x * 0.01) * 12 + 20}%`,
              top: `${Math.cos(mousePosition.y * 0.01) * 15 + 30}%`,
              animationDelay: '0s'
            }}
          ></div>
          <div 
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.cos(mousePosition.x * 0.008) * 10 + 70}%`,
              top: `${Math.sin(mousePosition.y * 0.008) * 12 + 40}%`,
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute w-0.5 h-0.5 bg-pink-500 rounded-full animate-float opacity-80"
            style={{
              left: `${Math.sin(mousePosition.x * 0.012) * 15 + 85}%`,
              top: `${Math.cos(mousePosition.y * 0.012) * 10 + 25}%`,
              animationDelay: '1s'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            
            {/* Spectacular Logo */}
            <Link href="/" className="flex items-center space-x-4 group relative">
              <div className={`relative transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
                {/* Magnetic Aura */}
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-400/15 via-orange-400/15 to-pink-400/15 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-slow rounded-full"></div>
                
                {/* Logo Container */}
                <div className="relative w-full h-full transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500">
                  <Image
                    src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                    alt="Sanchay Kathak Dance Academy"
                    width={isScrolled ? 48 : 56}
                    height={isScrolled ? 48 : 56}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Dancing Sparkles */}
                  <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-dance-1 shadow-lg"></div>
                    <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-dance-2 shadow-lg"></div>
                    <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full animate-dance-3 shadow-lg"></div>
                    <div className="absolute right-0 bottom-1/4 w-1 h-1 bg-orange-500 rounded-full animate-dance-4 shadow-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Elegant Typography */}
              <div className={`transition-all duration-500 ${isScrolled ? 'scale-95' : 'scale-100'} group-hover:scale-105`}>
                <h1 className={`font-black bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl'} tracking-tight group-hover:tracking-wide relative`}>
                  SANCHAY
                  <span className="absolute -top-1 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">✨</span>
                </h1>
                <p className={`font-bold text-gray-800 -mt-1 transition-all duration-500 ${isScrolled ? 'text-xs' : 'text-sm'} tracking-widest uppercase group-hover:text-pink-600 relative`}>
                  Kathak Dance Academy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
                </p>
              </div>
            </Link>

            {/* Perfect Responsive Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-6 mr-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-gray-700 hover:text-pink-600 font-semibold transition-all duration-400 group py-2 px-1"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    {/* Liquid Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 via-orange-50/30 to-pink-50/50 scale-0 group-hover:scale-100 transition-transform duration-400 rounded-xl -mx-2"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="text-base transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400">{item.icon}</span>
                      <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap">{item.label}</span>
                    </div>
                    
                    {/* Magic Underline */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 transition-all duration-400 group-hover:w-8 rounded-full shadow-lg"></div>
                    
                    {/* Floating Accent */}
                    <div className="absolute top-1 right-1 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  </Link>
                ))}
              </div>
              
              {/* Clean Contact Button */}
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 flex items-center space-x-2"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-lg"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center space-x-2">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="whitespace-nowrap">Contact Us</span>
                </div>
              </Link>
            </nav>

            {/* Spectacular Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-3 group"
              aria-expanded={isMenuOpen}
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50/80 to-orange-50/80 group-hover:from-pink-100 group-hover:to-orange-100 transition-all duration-300 shadow-lg group-hover:shadow-xl rounded-xl backdrop-blur-sm"></div>
              
              {/* Animated Lines */}
              <div className="relative w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`w-6 h-0.5 bg-gradient-to-r from-pink-600 to-orange-600 transform transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2 scale-110' : 'group-hover:scale-110'}`}></span>
                <span className={`w-6 h-0.5 bg-gradient-to-r from-orange-600 to-pink-600 transition-all duration-500 ${isMenuOpen ? 'opacity-0 scale-0' : 'group-hover:scale-110'}`}></span>
                <span className={`w-6 h-0.5 bg-gradient-to-r from-pink-600 to-orange-600 transform transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2 scale-110' : 'group-hover:scale-110'}`}></span>
              </div>
              
              {/* Magic Particles */}
              <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>

          {/* Magical Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-700 ease-out ${isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="relative mt-4">
              {/* Premium Glass Container */}
              <div className="relative bg-gradient-to-br from-white/95 via-pink-50/90 to-orange-50/95 backdrop-blur-2xl shadow-2xl border border-white/60 p-6 overflow-hidden rounded-3xl">
                {/* Background Wave Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-transparent to-orange-100/20 animate-gradient-wave"></div>
                
                {/* Navigation Items */}
                <nav className="relative space-y-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:text-pink-600 hover:bg-white/70 font-semibold transition-all duration-500 group backdrop-blur-sm transform hover:scale-105 rounded-2xl"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-30px)',
                        opacity: isMenuOpen ? 1 : 0,
                        transition: `all 0.6s ease-out ${index * 100}ms`
                      }}
                    >
                      <span className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-400">{item.icon}</span>
                      <span className="group-hover:tracking-wide transition-all duration-300">{item.label}</span>
                      <div className="ml-auto w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                    </Link>
                  ))}
                  
                  {/* Mobile Contact Button */}
                  <div className="pt-6 mt-6 border-t border-gradient-to-r from-pink-200/50 to-orange-200/50">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {/* Shimmer Wave */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-2xl"></div>
                      
                      <svg className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="tracking-wide group-hover:tracking-widest transition-all duration-300 relative z-10">Contact Us</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spectacular CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-6px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(-3px) rotate(240deg); opacity: 0.8; }
        }
        
        @keyframes dance-1 {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) translateX(24px) rotate(-90deg) scale(1.2); }
          50% { transform: rotate(180deg) translateX(20px) rotate(-180deg) scale(1); }
          75% { transform: rotate(270deg) translateX(16px) rotate(-270deg) scale(0.8); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg) scale(1); }
        }
        
        @keyframes dance-2 {
          0% { transform: rotate(90deg) translateX(16px) rotate(-90deg) scale(1); }
          25% { transform: rotate(180deg) translateX(20px) rotate(-180deg) scale(1.1); }
          50% { transform: rotate(270deg) translateX(16px) rotate(-270deg) scale(1); }
          75% { transform: rotate(360deg) translateX(12px) rotate(-360deg) scale(0.9); }
          100% { transform: rotate(450deg) translateX(16px) rotate(-450deg) scale(1); }
        }
        
        @keyframes dance-3 {
          0% { transform: rotate(180deg) translateX(18px) rotate(-180deg) scale(1); }
          33% { transform: rotate(300deg) translateX(22px) rotate(-300deg) scale(1.3); }
          66% { transform: rotate(420deg) translateX(14px) rotate(-420deg) scale(0.7); }
          100% { transform: rotate(540deg) translateX(18px) rotate(-540deg) scale(1); }
        }
        
        @keyframes dance-4 {
          0% { transform: rotate(270deg) translateX(14px) rotate(-270deg) scale(1); }
          50% { transform: rotate(450deg) translateX(18px) rotate(-450deg) scale(1.4); }
          100% { transform: rotate(630deg) translateX(14px) rotate(-630deg) scale(1); }
        }
        
        @keyframes gradient-wave {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(1.05) rotate(1deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .animate-dance-1 { animation: dance-1 2.5s ease-in-out infinite; }
        .animate-dance-2 { animation: dance-2 3s ease-in-out infinite; }
        .animate-dance-3 { animation: dance-3 4s ease-in-out infinite; }
        .animate-dance-4 { animation: dance-4 3.2s ease-in-out infinite; }
        .animate-gradient-wave { animation: gradient-wave 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2.5s ease-in-out infinite; }
      `}</style>
    </>
  )
}