// types/blog.ts
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  author: {
    name: string
    bio: string
    avatar?: string
  }
  coverImage?: string
  featured: boolean
  published: boolean
}

export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  coverImage?: string
  featured: boolean
  published: boolean
}

export interface PaginatedPosts {
  posts: BlogPostMetadata[]
  currentPage: number
  totalPages: number
  totalPosts: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface BlogConfig {
  postsPerPage: number
  author: {
    name: string
    bio: string
    email: string
    social: {
      twitter?: string
      instagram?: string
      linkedin?: string
    }
  }
}