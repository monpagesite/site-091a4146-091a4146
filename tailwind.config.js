/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        secondary: '#00D9FF',
        accent: '#39FF14',
        background: '#0A0A0A',
        surface: '#1A1A1A',
        border: '#2A2A2A',
        text: '#F5F5F5',
        'text-muted': '#888888',
        success: '#39FF14',
      },
      fontFamily: {
        heading: ['Black Han Sans', 'sans-serif'],
        body: ['Hind Madurai', 'sans-serif'],
      },
      animation: {
        reveal: 'reveal 0.7s ease-out forwards',
        'visual-reveal': 'visualReveal 1.2s ease-out 0.5s forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        reveal: {
          from: {
            opacity: '0',
            transform: 'translateY(32px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        visualReveal: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
