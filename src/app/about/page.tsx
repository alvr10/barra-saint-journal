// app/about/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Barra Saint Journal',
  description: 'Learn more about Eduarda Sena Barra and the story behind this personal journal',
  openGraph: {
    title: 'About - Barra Saint Journal',
    description: 'Learn more about Eduarda Sena Barra and the story behind this personal journal',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-8">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="about-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-16 h-16 opacity-60">
            <Image
              src="/images/stickers/sticker-1.png"
              alt="Decorative sticker"
              fill
              className="object-contain transform rotate-12 animate-float"
              sizes="64px"
            />
          </div>
          <div className="absolute top-8 right-1/4 w-12 h-12 opacity-60">
            <Image
              src="/images/stickers/sticker-2.png"
              alt="Decorative sticker"
              fill
              className="object-contain transform -rotate-12 animate-float"
              style={{animationDelay: '1s'}}
              sizes="48px"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-100 mb-6 animate-slide-up">
            About
            <span className="block text-primary font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Eduarda
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Welcome to my corner of the internet, where I share the thoughts, experiences, 
            and reflections that shape my journey through life.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Personal Story Section */}
          <section className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-700/50 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full p-1">
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                        <Image
                          src="/images/author-photo.jpg"
                          alt="Eduarda Sena Barra"
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Floating stickers around photo */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 opacity-80">
                    <Image
                      src="/images/stickers/sticker-3.png"
                      alt="Decorative sticker"
                      fill
                      className="object-contain transform rotate-45 animate-float"
                      sizes="32px"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 opacity-80">
                    <Image
                      src="/images/stickers/sticker-4.png"
                      alt="Decorative sticker"
                      fill
                      className="object-contain transform -rotate-12 animate-float"
                      style={{animationDelay: '2s'}}
                      sizes="24px"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                  Hello, I&apos;m Eduarda
                </h2>
                <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    I&apos;m a storyteller at heart, finding meaning in the everyday moments that 
                    most people rush past. This journal is my way of slowing down, of paying 
                    attention to the beauty and complexity of ordinary life.
                  </p>
                  <p>
                    Through writing, I explore themes of personal growth, mindfulness, and 
                    the art of living intentionally. Each post is a reflection on something 
                    I&apos;ve learned, observed, or wondered about—an invitation for you to pause 
                    and consider these moments alongside me.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Find Section */}
          <section className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
              What You&apos;ll Find Here
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Mindful Moments
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Reflections on presence, awareness, and finding peace in the midst of daily life.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Personal Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Stories about learning, changing, and becoming who we&apos;re meant to be.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Life&apos;s Beauty
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Celebrating the simple, profound moments that make life worth living.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-3xl p-8 sm:p-12 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                What I Believe
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide my writing and my life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Authenticity over perfection
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Real stories resonate more than polished facades.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Growth is a journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We&apos;re all works in progress, and that&apos;s beautiful.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Small moments matter
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Life happens in the quiet spaces between big events.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Connection heals
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Sharing our stories creates bridges between hearts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Connect Section */}
          <section className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-700/50">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I&apos;d love to hear your thoughts, share in your journey, or simply connect 
                over the experiences that make us human.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/blog"
                  className="text-primary border-2 border-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium transform hover:scale-105"
                >
                  Read My Stories
                </Link>
              </div>

              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:eduardarsbarra05@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dudarsena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@eduardasenaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}