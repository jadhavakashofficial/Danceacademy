// components/Footer.js
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [visitorCount] = useState(Math.floor(Math.random() * 17) + 1)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.12
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 text-gray-900 overflow-hidden border-t border-amber-300/30">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Golden Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `radial-gradient(circle, rgba(245, 158, 11, ${Math.random() * 0.3 + 0.1}) 0%, transparent 70%)`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() > 0.5 ? 15 : -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Glass Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full backdrop-blur-sm bg-white/10 border border-amber-200/10"
            style={{
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 25 : -25, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Swirling Golden Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-amber-200/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 300}px`,
              height: `${Math.random() * 400 + 300}px`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.02, 0.06, 0.02],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 25 + 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Glowing Top Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Academy Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="https://sanchaykathak.com/cms/wp-content/uploads/2025/06/Sanchay-1.png"
                  alt="Sanchay Kathak Academy"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 tracking-tight"
                  whileHover={{ x: 3 }}
                >
                  Sanchay Kathak
                </motion.h3>
                <p className="text-amber-600 text-sm font-medium mt-1">Nritya Academy</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Premier Kathak dance academy offering authentic classical training under the expert 
              guidance of internationally acclaimed artist Rajashree Dhongade.
            </p>
            
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-amber-400 text-sm"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      delay: i * 0.2,
                      duration: 1.2,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">UGC-NET Qualified</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-bold text-gray-900 relative inline-block pb-1 border-b border-amber-500/30">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' }
              ].map((item, i) => (
                <motion.li 
                  key={item.href}
                  variants={itemVariants}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-all duration-300 group"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-amber-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: i * 0.15
                      }}
                    ></motion.span>
                    <span className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-amber-500 before:transition-all before:duration-300 group-hover:before:w-full">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with Visitors */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-bold text-gray-900 relative inline-block pb-1 border-b border-amber-500/30">
              Contact Us
            </h4>
            <div className="space-y-2.5">
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-amber-600 font-semibold text-sm">+91 7507234753</p>
                  <p className="text-gray-500 text-xs">+91 901190412</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-amber-600 font-semibold text-xs break-all">
                    Vaishalidhongade9@gmail.com
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-amber-600 font-semibold text-sm">Pune, Maharashtra</p>
                  <p className="text-gray-500 text-xs">India</p>
                </div>
              </motion.div>
              
              {/* Current Visitors */}
              <motion.div 
                className="mt-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-amber-200/20 shadow-sm"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-amber-600 text-sm">Current Visitors</span>
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <motion.span 
                      className="text-lg font-bold text-amber-700"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500,
                        damping: 15
                      }}
                    >
                      {visitorCount}
                    </motion.span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-1">Experiencing the art of Kathak</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Connect With Us */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-bold text-gray-900 relative inline-block pb-1 border-b border-amber-500/30">
              Connect With Us
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              {/* Social Media Icons */}
              {[
                { 
                  label: 'Facebook', 
                  color: 'from-blue-600 to-blue-700',
                  icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> 
                },
                { 
                  label: 'Instagram', 
                  color: 'from-pink-500 to-purple-600',
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> 
                },
                { 
                  label: 'YouTube', 
                  color: 'from-red-600 to-red-700',
                  icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> 
                },
                { 
                  label: 'WhatsApp', 
                  color: 'from-green-600 to-green-700',
                  icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/> 
                }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className={`h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 transform group relative overflow-hidden`}
                  aria-label={social.label}
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                  <svg 
                    className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 80%)`
                    }}
                  />
                </motion.a>
              ))}
            </div>
            
            {/* Premium Badge */}
            <motion.div 
              className="p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-amber-200/20 shadow-sm"
              whileHover={{ y: -2 }}
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-1.5 rounded-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-amber-600 text-sm font-medium">Premium Academy Experience</p>
                  <p className="text-gray-500 text-xs">Authentic Kathak training since 2010</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-amber-200/30 mt-8 pt-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-gray-500 text-sm flex items-center space-x-2">
                <span className="text-amber-600">©</span>
                <span>{currentYear} Sanchay Kathak Nritya Academy.</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 text-xs text-gray-500">
                <span>🏆</span>
                <span>Award Winning Academy</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-1.5 sm:space-y-0 sm:space-x-4 text-sm">
              <div className="flex items-center space-x-3">
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-500 hover:text-amber-600 transition-colors duration-200 text-xs hover:underline relative group"
                >
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-500 hover:text-amber-600 transition-colors duration-200 text-xs hover:underline relative group"
                >
                  Terms
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              
              {/* Developer Credit - Compact */}
              <motion.div 
                className="flex items-center space-x-2 text-xs text-gray-500 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-200/20"
                whileHover={{ scale: 1.03 }}
              >
                <span>Dev by</span>
                <a 
                  href="https://www.linkedin.com/in/classictechak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 font-semibold transition-all duration-300 flex items-center space-x-1 group"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    💎
                  </motion.span>
                  <span className="group-hover:underline">Akash Jadhav</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div 
        className="fixed right-5 bottom-5 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <a 
          href="/contact" 
          className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-md shadow-amber-500/30 flex items-center justify-center text-white hover:shadow-amber-500/40 transition-all duration-300 group"
        >
          <svg 
            className="w-5 h-5 group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <motion.span 
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-amber-600 border border-amber-200"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            !
          </motion.span>
        </a>
      </motion.div>
    </footer>
  )
}