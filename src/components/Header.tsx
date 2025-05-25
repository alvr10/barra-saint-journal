// components/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
              <span className="text-white font-bold text-sm sm:text-base">B</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-primary">
                Barra Saint Journal
              </h1>
              <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
                by Eduarda Sena Barra
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span className={`h-0.5 w-full bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden border-t border-gray-100 transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header