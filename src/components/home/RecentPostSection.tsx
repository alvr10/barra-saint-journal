// components/home/RecentPostsSection.tsx
import Link from 'next/link'
import { BlogPostMetadata } from '@/types/blog'

interface RecentPostsSectionProps {
  recentPosts: BlogPostMetadata[]
}

export default function RecentPostsSection({ recentPosts }: RecentPostsSectionProps) {
  return (
    <section className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-100 mb-4 animate-slide-up">
            Recent Thoughts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Latest entries from my journal, where I explore life&apos;s questions 
            and celebrate its quiet revelations.
          </p>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700/50 hover:border-primary/20 transform hover:-translate-y-1 animate-fade-in backdrop-blur-sm"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="space-y-6">
                  {/* Post Meta */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <time className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {post.date}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Post Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  {/* Post Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-xs font-medium hover:bg-secondary/30 transition-colors duration-200"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Read More Link */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="group/link inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-medium text-sm"
                  >
                    Continue reading
                    <svg 
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">More stories coming soon</h3>
            <p className="text-gray-600 dark:text-gray-300">The journal is just beginning. Check back for new reflections and insights.</p>
          </div>
        )}

        {recentPosts.length > 0 && (
          <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <Link 
              href="/blog"
              className="group inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-medium border-b-2 border-primary/20 hover:border-accent/40 pb-1"
            >
              View all posts
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}