// components/home/NewsletterSection.tsx
export default function NewsletterSection() {
  return (
    <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive new journal entries and thoughtful reflections 
            delivered gently to your inbox. No spam, just authentic stories.
          </p>
        </div>
        
        <form className="max-w-md mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-4 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl font-medium whitespace-nowrap transform hover:scale-105"
            >
              Subscribe
            </button>
          </div>
        </form>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
          ✨ Join the community of mindful readers • Unsubscribe anytime
        </p>
      </div>
    </section>
  )
}