import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        background: 'var(--background)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--text)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--accent)',
              },
            },
            h1: {
              color: 'var(--text)',
            },
            h2: {
              color: 'var(--text)',
            },
            h3: {
              color: 'var(--text)',
            },
            h4: {
              color: 'var(--text)',
            },
            strong: {
              color: 'var(--text)',
            },
            blockquote: {
              color: 'var(--text)',
              borderLeftColor: 'var(--primary)',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
  darkMode: ['class', '[data-theme="dark"]'],
}

export default config