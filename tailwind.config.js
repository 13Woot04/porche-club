/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f8fa',
          100: '#e7edf2',
          200: '#d4dfe8',
          300: '#b3c7d6',
          400: '#8ba7bd',
          500: '#6d8ca6',
          600: '#567185',
          700: '#465a6c',
          800: '#3b4a59',
          900: '#32404c',
        },
        accent: {
          50: '#fff9f0',
          100: '#fff1d9',
          200: '#ffdca3',
          300: '#ffc56d',
          400: '#ffae37',
          500: '#ff9801',
          600: '#e67a00',
          700: '#cc5f02',
          800: '#a64a0a',
          900: '#803d0d',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: [
          'Poppins',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'Poppins',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 