import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllPosts, getRecentPosts } from '@/lib/blog'
import { BlogPost } from '@/types/blog'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  try {
    const post = await getPostBySlug(slug)
    
    if (!post) {
      return {
        title: 'Post Not Found - Barra Saint Journal',
      }
    }

    return {
      title: `${post.title} - Barra Saint Journal`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author.name],
        images: post.coverImage ? [post.coverImage] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [post.coverImage] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Post Not Found - Barra Saint Journal',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  let post: BlogPost | null = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let otherRecentPosts: any[] = []

  try {
    post = await getPostBySlug(slug)
    
    if (!post) {
      notFound()
    }

    const recentPosts = await getRecentPosts(3)
    // Filter out current post from recent posts
    otherRecentPosts = recentPosts.filter(p => p.slug !== post!.slug)
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <article className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium group"
            >
              <svg 
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Post Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-6 space-x-4">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.featured && (
                <>
                  <span>•</span>
                  <span className="text-primary font-medium">Featured</span>
                </>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-4 py-2 bg-secondary/20 text-primary rounded-full text-sm font-medium hover:bg-secondary/30 transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <div 
              className="prose-headings:text-gray-900 prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.author.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherRecentPosts.length > 0 && (
        <section className="py-16 px-6 sm:px-8 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
              More from the Journal
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherRecentPosts.map((relatedPost) => (
                <article 
                  key={relatedPost.slug}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <time>{relatedPost.date}</time>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 font-medium text-sm group"
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
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/blog"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}