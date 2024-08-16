module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A2E',
        secondary: '#16213E',
        accent: '#0F3460',
        highlight: '#E94560',
        background: '#F5F5F5',
        textPrimary: '#EAEAEA',
        textSecondary: '#A9A9A9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        slideIn: 'slideIn 1s ease-out forwards',
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
          bounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};