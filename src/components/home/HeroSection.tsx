// components/home/HeroSection.tsx
import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  totalPosts: number
}

export default function HeroSection({ totalPosts }: HeroSectionProps) {
  return (
    <section className="relative pt-20 mt-16 pb-24 px-6 sm:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-[0.02] dark:opacity-[0.05]" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="mb-12">
          {/* Author Photo */}
          <div className="relative mb-8 inline-block">
            <div className="relative w-28 h-28 mx-auto">
              {/* Gradient border ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full p-1 animate-fade-in">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                    <Image
                      src="/images/author-photo.jpg" // You'll need to add this image
                      alt="Eduarda Sena Barra - Author"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 112px, 112px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full animate-pulse flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full animate-pulse flex items-center justify-center shadow-md" style={{animationDelay: '0.5s'}}>
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              {/* Online status indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-gray-900 dark:text-gray-100 mb-8 leading-tight animate-slide-up">
            Welcome to my
            <span className="block text-primary font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              personal journal
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            I&apos;m <span className="font-semibold text-primary">Eduarda Sena Barra</span>, and this is where I share my thoughts, 
            experiences, and reflections on life, growth, and finding beauty 
            in the everyday moments that shape our journey.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link 
            href="/blog"
            className="group bg-primary text-white px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg transform hover:scale-105"
          >
            <span className="flex items-center">
              Read Latest Posts
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link 
            href="/about"
            className="group text-primary border-2 border-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium text-lg transform hover:scale-105"
          >
            About My Journey
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{totalPosts}+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Stories Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2025</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Journey Started</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Moments Captured</div>
          </div>
        </div>
      </div>
    </section>
  )
}