// components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import ScrollToTop from './ScrollToTop'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Curved Border */}
      <div className="relative w-full h-20 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,120 300,120 600,60 C900,0 1050,0 1200,60 L1200,120 L0,120 Z" 
            fill="var(--primary)"
            className="drop-shadow-sm"
          />
        </svg>
      </div>

      {/* Main Footer Background */}
      <div className="bg-[var(--primary)]">
        {/* Main Footer Content */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-4 md:col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <div className="w-full h-full bg-white/20 rounded-full p-0.5">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/images/author-photo.jpg"
                        alt="Eduarda Sena Barra"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Barra Saint Journal</h3>
                  <p className="text-sm text-white/80">by Eduarda Sena Barra</p>
                </div>
              </div>
              <p className="text-sm text-white/90 leading-relaxed max-w-sm">
                A personal space for thoughts, experiences, and reflections. 
                Sharing life&apos;s moments with authenticity and grace.
              </p>
            </div>

            {/* Spacer for centering on large screens */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Quick Links */}
            <div className="space-y-4 md:col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-white">
                Explore
              </h4>
              <div className="space-y-2">
                <Link 
                  href="/blog" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  Latest Posts
                </Link>
                <Link 
                  href="/about" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  About Me
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-4 md:col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-white">
                Connect
              </h4>
              <div className="space-y-2">
                <a 
                  href="mailto:eduardarsbarra05@gmail.com" 
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  Email
                </a>
                <a 
                  href="https://instagram.com/dudarsena" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
                <a 
                  href="https://youtube.com/@eduardasenaa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs text-white/70">
                © {currentYear} Eduarda Sena Barra. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacy" 
                  className="text-xs text-white/70 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-xs text-white/70 hover:text-white transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating scroll to top button */}
        <ScrollToTop />
      </div>
    </footer>
  )
}

export default Footer