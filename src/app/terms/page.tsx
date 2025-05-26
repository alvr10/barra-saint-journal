// app/terms/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - Barra Saint Journal',
  description: 'Terms and conditions for using the Barra Saint Journal website',
  robots: 'noindex, nofollow', // Typically you don't want legal pages indexed
}

export default function TermsOfUsePage() {
  const lastUpdated = "May 26, 2025"
  const effectiveDate = "May 26, 2025"

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.01] dark:opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="terms-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#terms-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Guidelines for using this website
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>Last updated: {lastUpdated}</p>
            <p>Effective date: {effectiveDate}</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-700/50">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Welcome
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to Barra Saint Journal. These terms of use (&quot;Terms&quot;) govern your access to and 
                use of this website operated by Eduarda Sena Barra. By accessing or using this website, 
                you agree to be bound by these Terms. If you don&apos;t agree with these Terms, please don&apos;t 
                use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                About This Website
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Barra Saint Journal is a personal blog and digital journal where I share thoughts, 
                experiences, and reflections on life, growth, and mindfulness. The content is meant 
                to inspire, connect, and encourage thoughtful reflection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Acceptable Use
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You may use this website for personal, non-commercial purposes. When using this website, you agree to:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2 mb-6">
                <li>Use the website in a respectful and lawful manner</li>
                <li>Respect the intellectual property rights of the content</li>
                <li>Not attempt to damage, disable, or impair the website&apos;s functionality</li>
                <li>Not use automated systems to access or scrape the website</li>
                <li>Not transmit any harmful code, viruses, or malicious software</li>
                <li>Be kind and constructive in any communications</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li>Copy, reproduce, or republish content without permission</li>
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Harass, intimidate, or harm other users or myself</li>
                <li>Share false, misleading, or defamatory information</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Intellectual Property Rights
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                My Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                All original content on this website, including but not limited to text, images, graphics, 
                logos, and design elements, is owned by Eduarda Sena Barra and protected by copyright laws. 
                This content is provided for your personal enjoyment and inspiration.
              </p>

              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Limited Use Permission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You may:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2 mb-4">
                <li>Share links to blog posts on social media with proper attribution</li>
                <li>Quote brief excerpts (no more than 100 words) with proper attribution and a link back to the original post</li>
                <li>Print individual posts for personal, non-commercial use</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Third-Party Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Some content may include references to or links to third-party websites, products, or 
                services. I don&apos;t control or endorse this third-party content, and you access it at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                User-Generated Content
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you submit content through contact forms, comments, or other communications:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li>You retain ownership of your content</li>
                <li>You grant me permission to use, modify, and respond to your submissions</li>
                <li>You&apos;re responsible for ensuring your content doesn&apos;t violate any laws or rights</li>
                <li>You agree your content will be respectful and constructive</li>
                <li>I reserve the right to remove or not respond to inappropriate content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This website and its content are provided &quot;as is&quot; without any warranties, express or implied. 
                While I strive to provide accurate and helpful information, I make no guarantees about the 
                completeness, accuracy, or suitability of the content for any particular purpose. The 
                information shared reflects my personal experiences and opinions and should not be considered 
                professional advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, I will not be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of this website. This includes any 
                loss of data, profits, or other damages, even if I&apos;ve been advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your privacy is important to me. Please review my <a href="/privacy" className="text-primary hover:text-accent transition-colors duration-200 underline">Privacy Policy</a> to 
                understand how I collect, use, and protect your personal information when you use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I reserve the right to terminate or suspend access to this website at any time, with or 
                without notice, for any reason, including violation of these Terms. Upon termination, 
                your right to use the website will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Changes to These Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I may update these Terms from time to time to reflect changes in the website or legal 
                requirements. Any changes will be posted on this page with an updated &quot;Last modified&quot; 
                date. Your continued use of the website after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms are governed by and construed in accordance with applicable local laws. 
                Any disputes arising from these Terms or your use of the website will be resolved through 
                good faith discussion whenever possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Severability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining 
                provisions will continue to be valid and enforceable to the fullest extent permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Use, please contact me:
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> <a href="mailto:eduardarsbarra05@gmail.com" className="text-primary hover:text-accent transition-colors duration-200">eduardarsbarra05@gmail.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Website:</strong> <a href="/contact" className="text-primary hover:text-accent transition-colors duration-200">Contact Form</a>
                </p>
              </div>
            </section>

            <section className="border-t border-gray-200 dark:border-gray-600 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Thank You
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Thank you for taking the time to read these Terms and for being part of this community. 
                I believe in treating each other with kindness and respect, and I&apos;m grateful you&apos;re here 
                to share in this journey of reflection and growth.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}