export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        bgLight: '#f6f8ff',
        accent: '#3b82f6',
        accent2: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.22)',
        soft: '0 15px 50px rgba(2,6,23,0.14)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        gradient: 'gradient 12s ease infinite',
        pulseSlow: 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
