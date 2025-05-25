// app/page.tsx
import Link from 'next/link'

// Mock data for recent posts
const recentPosts = [
  {
    id: 1,
    title: "Finding Beauty in Simple Moments",
    excerpt: "Life often happens in the quiet spaces between our grand plans. Today I want to share some thoughts on finding joy in the everyday.",
    date: "May 20, 2025",
    readTime: "3 min read",
    slug: "finding-beauty-simple-moments"
  },
  {
    id: 2,
    title: "On Growth and Gentle Transitions",
    excerpt: "Change doesn't always announce itself with fanfare. Sometimes it arrives quietly, like morning light slowly filling a room.",
    date: "May 15, 2025",
    readTime: "5 min read",
    slug: "growth-gentle-transitions"
  },
  {
    id: 3,
    title: "The Art of Mindful Living",
    excerpt: "In our rush to achieve and acquire, we often forget the profound peace found in simply being present with ourselves.",
    date: "May 10, 2025",
    readTime: "4 min read",
    slug: "art-mindful-living"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Welcome to my
              <span className="block text-primary font-medium">personal journal</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I&apos;m Eduarda Sena Barra, and this is where I share my thoughts, 
              experiences, and reflections on life, growth, and finding beauty 
              in the everyday moments.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              Read Latest Posts
            </Link>
            <Link 
              href="/about"
              className="text-primary border border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 px-6 sm:px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Recent Thoughts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latest entries from my journal, where I explore life&apos;s questions 
              and celebrate its quiet revelations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-medium text-sm group"
                  >
                    Continue reading
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
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

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium border-b border-primary hover:border-accent"
            >
              View all posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to receive new journal entries and thoughtful reflections 
            delivered gently to your inbox.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors duration-200"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            No spam, just thoughtful content. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}