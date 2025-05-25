// app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPaginatedPosts, searchPosts, getPostsByTag } from '@/lib/blog'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '6')
  const search = searchParams.get('search')
  const tag = searchParams.get('tag')

  try {
    // Search posts
    if (search) {
      const posts = await searchPosts(search)
      return NextResponse.json({
        success: true,
        data: {
          posts,
          totalPosts: posts.length,
          query: search
        }
      })
    }

    // Filter by tag
    if (tag) {
      const posts = await getPostsByTag(tag)
      return NextResponse.json({
        success: true,
        data: {
          posts,
          totalPosts: posts.length,
          tag
        }
      })
    }

    // Get paginated posts
    const paginatedData = await getPaginatedPosts(page, limit)
    
    return NextResponse.json({
      success: true,
      data: paginatedData
    })
    
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts'
      },
      { status: 500 }
    )
  }
}