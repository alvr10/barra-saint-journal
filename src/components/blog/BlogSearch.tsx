// components/blog/BlogSearch.tsx
'use client'

import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BlogPostMetadata } from '@/types/blog'
import Link from 'next/link'
import { debounce } from 'lodash'

interface BlogSearchProps {
  className?: string
}

interface SearchResult {
  posts: BlogPostMetadata[]
  totalPosts: number
  query: string
}

export default function BlogSearch({ className = '' }: BlogSearchProps) {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<SearchResult | null>(null)
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  // Debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults(null)
        setIsSearching(false)
        return
      }

      setIsSearching(true)
      
      try {
        const response = await fetch(`/api/blog?search=${encodeURIComponent(searchQuery)}`)
        const data = await response.json()
        
        if (data.success) {
          setResults(data.data)
        }
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsSearching(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    debouncedSearch(query)
  }, [query, debouncedSearch])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setShowResults(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query)}`)
      setShowResults(false)
    }
  }

  const clearSearch = () => {
    setQuery('')
    setResults(null)
    setShowResults(false)
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowResults(true)}
            placeholder="Search posts..."
            className="w-full px-4 py-3 pl-12 pr-10 border border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors duration-200 bg-white"
          />
          
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Loading/Clear Button */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isSearching ? (
              <div className="w-5 h-5">
                <svg className="animate-spin w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            ) : query ? (
              <button
                type="button"
                title='clear search'
                onClick={clearSearch}
                className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && results && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Search Results ({results.totalPosts})
              </h3>
              <button
                type='button'
                title='search'
                onClick={() => setShowResults(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {results.posts.length === 0 ? (
              <p className="text-gray-500 text-sm py-4 text-center">
                No posts found for &quot;{results.query}&quot;
              </p>
            ) : (
              <div className="space-y-3">
                {results.posts.slice(0, 5).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    onClick={() => setShowResults(false)}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200 mb-1">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-400 space-x-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                ))}
                
                {results.posts.length > 5 && (
                  <Link
                    href={`/blog?search=${encodeURIComponent(results.query)}`}
                    onClick={() => setShowResults(false)}
                    className="block p-3 text-center text-primary hover:text-accent transition-colors duration-200 font-medium text-sm"
                  >
                    View all {results.totalPosts} results
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backdrop to close search results */}
      {showResults && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResults(false)}
        />
      )}
    </div>
  )
}