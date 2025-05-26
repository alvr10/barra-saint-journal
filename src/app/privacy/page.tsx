// app/privacy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Barra Saint Journal',
  description: 'Learn how we protect your privacy and handle your personal information at Barra Saint Journal',
  robots: 'noindex, nofollow', // Typically you don't want legal pages indexed
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 26, 2025"

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.01] dark:opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="privacy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#privacy-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            How we protect and respect your privacy
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-700/50">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Our Commitment to You
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Barra Saint Journal, your privacy is as important to me as the stories I share. 
                This policy explains how I collect, use, and protect your personal information when 
                you visit and interact with this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Information I Collect
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Information You Provide
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                <li><strong>Contact Information:</strong> When you fill out the contact form, I collect your name, email address, and any message you choose to share.</li>
                <li><strong>Newsletter Subscription:</strong> If you subscribe to updates, I collect your email address to send you new post notifications.</li>
                <li><strong>Comments and Feedback:</strong> Any comments or feedback you voluntarily provide through the website or email.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
                Information Automatically Collected
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li><strong>Usage Data:</strong> Basic analytics about how you use the website (pages visited, time spent, general location)</li>
                <li><strong>Technical Information:</strong> Browser type, device type, and IP address for security and optimization purposes</li>
                <li><strong>Cookies:</strong> Small files that help improve your browsing experience and remember your preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                How I Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I use the information I collect to:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li>Respond to your messages and inquiries personally</li>
                <li>Send you newsletter updates about new posts (only if you&apos;ve subscribed)</li>
                <li>Improve the website experience and content based on how it&apos;s used</li>
                <li>Ensure the security and proper functioning of the website</li>
                <li>Comply with legal obligations if required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I respect your privacy and do not sell, trade, or share your personal information, except:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li><strong>Service Providers:</strong> Trusted third-party services that help operate the website (hosting, email delivery, analytics) under strict privacy agreements</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of others</li>
                <li><strong>With Your Consent:</strong> Any other sharing will only occur with your explicit permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                This website may use third-party services such as:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li><strong>Google Analytics:</strong> To understand website usage (you can opt-out using browser settings)</li>
                <li><strong>Email Services:</strong> To deliver newsletters and respond to contact forms</li>
                <li><strong>Social Media:</strong> Links to my social media profiles (Instagram, YouTube) governed by their own privacy policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information I have about you</li>
                <li><strong>Update:</strong> Correct any inaccurate or incomplete information</li>
                <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Unsubscribe:</strong> Opt-out of newsletter emails at any time using the unsubscribe link</li>
                <li><strong>Contact:</strong> Reach out with any privacy concerns or requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I take reasonable measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. However, no internet transmission is completely 
                secure, and I cannot guarantee absolute security. I encourage you to be mindful of what 
                information you share online.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This website is not intended for children under 13. I do not knowingly collect personal 
                information from children under 13. If you&apos;re a parent and believe your child has provided 
                personal information, please contact me so I can delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I may update this privacy policy from time to time. Any changes will be posted on this 
                page with an updated &quot;Last modified&quot; date. I encourage you to review this policy 
                periodically to stay informed about how I protect your privacy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Contact Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about this privacy policy or how I handle your personal 
                information, please don&apos;t hesitate to reach out:
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> <a href="mailto:eduardarsbarra05@gmail.com" className="text-primary hover:text-accent transition-colors duration-200">eduardarsbarra05@gmail.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Website:</strong> <a href="/contact" className="text-primary hover:text-accent transition-colors duration-200">Contact Form</a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}