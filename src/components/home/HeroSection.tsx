// components/home/HeroSection.tsx
import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  totalPosts: number
}

export default function HeroSection({ totalPosts }: HeroSectionProps) {
  return (
    <section className="relative pt-20 pb-24 px-6 sm:px-8 overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern 
                id="hero-grid" 
                width="40" 
                height="40" 
                patternUnits="userSpaceOnUse"
                className="animate-pulse"
              >
                <path 
                  d="M 40 0 L 0 0 0 40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-primary"
                />
              </pattern>
              <pattern 
                id="hero-dots" 
                width="20" 
                height="20" 
                patternUnits="userSpaceOnUse"
              >
                <circle 
                  cx="10" 
                  cy="10" 
                  r="1" 
                  fill="currentColor" 
                  className="text-primary/30"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
        </div>

        {/* Gradient overlays for depth */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-accent/8 to-secondary/8 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Radial gradient overlay to fade edges */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/10 dark:to-gray-900/20"></div>
      </div>

      {/* Decorative Stickers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Sticker */}
        <div className="absolute top-16 left-8 sm:left-16 w-16 h-16 sm:w-20 sm:h-20 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300 z-20" style={{animationDelay: '1s'}}>
          <Image
            src="/images/stickers/sticker-1.png"
            alt="Decorative sticker"
            fill
            className="object-contain drop-shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </div>

        {/* Top Right Sticker */}
        <div className="absolute top-20 right-8 sm:right-16 w-14 h-14 sm:w-18 sm:h-18 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300 z-20" style={{animationDelay: '2.5s'}}>
          <Image
            src="/images/stickers/sticker-2.png"
            alt="Decorative sticker"
            fill
            className="object-contain drop-shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300"
            sizes="(max-width: 640px) 56px, 72px"
          />
        </div>

        {/* Bottom Left Sticker */}
        <div className="absolute bottom-24 left-6 sm:left-12 w-12 h-12 sm:w-16 sm:h-16 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300 z-20" style={{animationDelay: '0.5s'}}>
          <Image
            src="/images/stickers/sticker-3.png"
            alt="Decorative sticker"
            fill
            className="object-contain drop-shadow-lg transform rotate-45 hover:rotate-12 transition-transform duration-300"
            sizes="(max-width: 640px) 48px, 64px"
          />
        </div>

        {/* Bottom Right Sticker */}
        <div className="absolute bottom-28 right-6 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300 z-20" style={{animationDelay: '3s'}}>
          <Image
            src="/images/stickers/sticker-4.png"
            alt="Decorative sticker"
            fill
            className="object-contain drop-shadow-lg transform -rotate-6 hover:rotate-3 transition-transform duration-300"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          {/* Author Photo */}
          <div className="relative mb-8 inline-block">
            <div className="relative w-28 h-28 mx-auto">
              {/* Enhanced gradient border ring with grid pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full p-1 animate-fade-in">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-1 relative overflow-hidden">
                  {/* Mini grid inside the photo border */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id="photo-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#photo-grid)" />
                    </svg>
                  </div>
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl z-10">
                    <Image
                      src="/images/author-photo.jpg"
                      alt="Eduarda Sena Barra - Author"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 112px, 112px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements with enhanced animation */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full animate-pulse flex items-center justify-center shadow-lg animate-float">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full animate-pulse flex items-center justify-center shadow-md animate-float" style={{animationDelay: '0.5s'}}>
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
            className="group bg-primary text-white px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg transform hover:scale-105 relative overflow-hidden"
          >
            {/* Subtle grid pattern on button */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="button-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#button-grid)" />
              </svg>
            </div>
            <span className="flex items-center relative z-10">
              Read Latest Posts
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link 
            href="/about"
            className="group text-primary border-2 border-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium text-lg transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">About My Journey</span>
          </Link>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center relative">
            {/* Subtle grid background for stats */}
            <div className="absolute inset-0 opacity-5 rounded-lg">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="stat-grid" width="6" height="6" patternUnits="userSpaceOnUse">
                    <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#stat-grid)" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-primary mb-2 relative z-10">{totalPosts}+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium relative z-10">Stories Shared</div>
          </div>
          <div className="text-center relative">
            <div className="absolute inset-0 opacity-5 rounded-lg">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="stat-grid-2" width="6" height="6" patternUnits="userSpaceOnUse">
                    <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#stat-grid-2)" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-primary mb-2 relative z-10">2025</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium relative z-10">Journey Started</div>
          </div>
          <div className="text-center relative">
            <div className="absolute inset-0 opacity-5 rounded-lg">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="stat-grid-3" width="6" height="6" patternUnits="userSpaceOnUse">
                    <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#stat-grid-3)" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-primary mb-2 relative z-10">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium relative z-10">Moments Captured</div>
          </div>
        </div>
      </div>
    </section>
  )
}