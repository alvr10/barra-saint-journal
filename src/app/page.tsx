// app/page.tsx
import { getRecentPosts, getFeaturedPosts } from '@/lib/blog'
import { BlogPostMetadata } from '@/types/blog'
import HeroSection from '@/components/home/HeroSection'
import FeaturedPostSection from '@/components/home/FeaturedPostSection'
import RecentPostsSection from '@/components/home/RecentPostSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default async function Home() {
  let recentPosts: BlogPostMetadata[] = []
  let featuredPosts: BlogPostMetadata[] = []

  try {
    recentPosts = await getRecentPosts(3)
    featuredPosts = await getFeaturedPosts()
  } catch (error) {
    console.error('Error loading posts:', error)
  }

  const featuredPost = featuredPosts[0] // Get the first featured post
  const totalPosts = recentPosts.length + featuredPosts.length

  return (
    <div className="min-h-screen">
      <HeroSection totalPosts={totalPosts} />
      
      {featuredPost && (
        <FeaturedPostSection featuredPost={featuredPost} />
      )}
      
      <RecentPostsSection recentPosts={recentPosts} />
      
      <NewsletterSection />
    </div>
  )
}