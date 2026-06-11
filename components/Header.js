import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [router.pathname])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/reviews', label: 'Reviews' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-shadow duration-300 bg-white ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 flex-shrink-0">
              <Image
                src="/images/Sanchay-1.png"
                alt="Sanchay Kathak Academy"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-black text-[#C73664] text-base leading-tight tracking-tight">
                SANCHAY
              </div>
              <div className="text-[9px] font-semibold text-gray-500 tracking-widest uppercase -mt-0.5">
                Kathak Academy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-[#C73664] bg-[#C73664]/5'
                      : 'text-gray-600 hover:text-[#C73664] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                router.pathname === '/contact'
                  ? 'bg-[#a82e55] text-white'
                  : 'bg-[#C73664] text-white hover:bg-[#a82e55]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#C73664] hover:bg-gray-50 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-[#C73664] bg-[#C73664]/5'
                    : 'text-gray-700 hover:text-[#C73664] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="flex items-center justify-center mt-2 px-3 py-2.5 bg-[#C73664] text-white text-sm font-semibold rounded-md hover:bg-[#a82e55] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
