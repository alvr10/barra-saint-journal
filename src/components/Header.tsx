// components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b border-gray-100 bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 dark:border-gray-800 dark:bg-gray-900/95 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with Author Photo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Author Photo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full p-0.5 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-0.5">
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="/images/author-photo.jpg"
                      alt="Eduarda Sena Barra"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 40px, 48px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Online status indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors duration-300">
                Barra Saint Journal
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 hidden sm:block group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                by Eduarda Sena Barra
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`h-0.5 w-full bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pt-4 space-y-2">
            <Link 
              href="/" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="block text-sm font-medium hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-primary py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
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