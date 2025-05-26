// components/home/FeaturedPostSection.tsx
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostMetadata } from '@/types/blog'

interface FeaturedPostSectionProps {
  featuredPost: BlogPostMetadata
}

export default function FeaturedPostSection({ featuredPost }: FeaturedPostSectionProps) {
  return (
    <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-gray-50/50 to-secondary/5 dark:from-gray-900/50 dark:to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            ✨ Featured Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-100 mb-4 animate-slide-up">
            Latest Inspiration
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Dive into my most recent thoughts and discoveries
          </p>
        </div>

        <article className="bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-video md:aspect-square">
              {featuredPost.coverImage ? (
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-primary/80 font-medium">Featured Story</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 space-x-4">
                <time className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {featuredPost.date}
                </time>
                <span>•</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 hover:text-primary transition-colors duration-200">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-xs font-medium hover:bg-secondary/30 transition-colors duration-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="group inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-semibold"
                >
                  Read Story
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}