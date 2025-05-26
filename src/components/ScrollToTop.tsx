// components/ScrollToTop.tsx
'use client'

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button" 
      onClick={scrollToTop}
      className="absolute bottom-8 right-8 w-12 h-12 bg-white hover:bg-white/90 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}