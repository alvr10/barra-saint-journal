import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getAllTags } from '@/lib/blog'
import { BlogPostMetadata } from '@/types/blog'

export const metadata = {
  title: 'Blog - Barra Saint Journal',
  description: 'Thoughts, experiences, and reflections by Eduarda Sena Barra',
}

interface BlogPageProps {
  searchParams: Promise<{
    tag?: string
    page?: string
  }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Await searchParams for Next.js 15+ compatibility
  const params = await searchParams
  const selectedTag = params.tag

  let posts: BlogPostMetadata[] = []
  let tags: { tag: string; count: number }[] = []
  let featuredPost: BlogPostMetadata | undefined
  let regularPosts: BlogPostMetadata[] = []

  try {
    posts = await getAllPosts()
    tags = await getAllTags()

    // Filter posts by tag if selected
    const filteredPosts = selectedTag 
      ? posts.filter(post => 
          post.tags.some(tag => 
            tag.toLowerCase() === selectedTag.toLowerCase()
          )
        )
      : posts

    featuredPost = posts.find(post => post.featured)
    regularPosts = filteredPosts.filter(post => !post.featured || selectedTag)
  } catch (error) {
    console.error('Error loading blog posts:', error)
    // Fallback to empty arrays if there's an error
  }

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            {selectedTag ? `Posts tagged "${selectedTag}"` : 'All Posts'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of thoughts, experiences, and reflections on life, 
            growth, and finding beauty in everyday moments.
          </p>
        </div>

        {/* Tags Filter */}
        {tags.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  !selectedTag
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Posts
              </Link>
              {tags.map(({ tag, count }) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedTag?.toLowerCase() === tag.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag} ({count})
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && !selectedTag && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Featured Post
            </h2>
            <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {featuredPost.coverImage && (
                <div className="aspect-video relative">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-8 sm:p-12">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <time>{featuredPost.date}</time>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                  <span>•</span>
                  <span className="text-primary font-medium">Featured</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors duration-200">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-xs font-medium hover:bg-secondary/30 transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-medium group"
                  >
                    Read more
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
              </div>
            </article>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.slug}
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
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-xs font-medium hover:bg-secondary/30 transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
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
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">
              {selectedTag 
                ? `No posts found with the tag "${selectedTag}".`
                : "No posts have been published yet."
              }
            </p>
            {selectedTag && (
              <Link
                href="/blog"
                className="text-primary hover:text-accent transition-colors duration-200 font-medium"
              >
                View all posts
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}