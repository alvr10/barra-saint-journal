// lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'
import { format } from 'date-fns'
import { BlogPost, BlogPostMetadata, PaginatedPosts } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'posts')

// Ensure posts directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true })
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(postsDirectory)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown content
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content)
    const contentHtml = processedContent.toString()

    // Calculate reading time
    const readTimeResult = readingTime(content)

    // Format date
    const formattedDate = data.date ? format(new Date(data.date), 'MMMM dd, yyyy') : ''

    return {
      slug: realSlug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: contentHtml,
      date: formattedDate,
      readTime: readTimeResult.text,
      tags: data.tags || [],
      author: {
        name: data.author?.name || 'Eduarda Sena Barra',
        bio: data.author?.bio || 'Personal thoughts and reflections',
        avatar: data.author?.avatar
      },
      coverImage: data.coverImage,
      featured: data.featured || false,
      published: data.published !== false // Default to true if not specified
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      if (!post || !post.published) return null
      
      // Return metadata only
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        readTime: post.readTime,
        tags: post.tags,
        coverImage: post.coverImage,
        featured: post.featured,
        published: post.published
      }
    })
  )

  // Filter out null posts and sort by date (newest first)
  return posts
    .filter((post): post is NonNullable<typeof post> => post !== null && typeof post === 'object')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getFeaturedPosts(): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.featured)
}

export async function getPostsByTag(tag: string): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export async function getPaginatedPosts(
  page: number = 1, 
  postsPerPage: number = 6
): Promise<PaginatedPosts> {
  const allPosts = await getAllPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    currentPage: page,
    totalPages,
    totalPosts,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1
  }
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const allPosts = await getAllPosts()
  const tagCounts = new Map<string, number>()

  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      const normalizedTag = tag.toLowerCase()
      tagCounts.set(normalizedTag, (tagCounts.get(normalizedTag) || 0) + 1)
    })
  })

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, limit)
}

export async function searchPosts(query: string): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts()
  const searchTerm = query.toLowerCase()

  return allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}