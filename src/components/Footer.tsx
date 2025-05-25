// components/Footer.tsx
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h3 className="font-bold text-lg text-primary">Barra Saint Journal</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              A personal space for thoughts, experiences, and reflections. 
              Sharing life&apos;s moments with authenticity and grace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-800">
              Explore
            </h4>
            <div className="space-y-2">
              <Link 
                href="/blog" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Latest Posts
              </Link>
              <Link 
                href="/about" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                About Me
              </Link>
              <Link 
                href="/contact" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-800">
              Connect
            </h4>
            <div className="space-y-2">
              <a 
                href="mailto:hello@barrasaintjournal.com" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Email
              </a>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-gray-500">
              © {currentYear} Eduarda Sena Barra. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-xs text-gray-500 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-xs text-gray-500 hover:text-primary transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer