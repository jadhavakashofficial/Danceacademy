module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom keyframe animations
      keyframes: {
        'gradient-slow': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        'fadeInUp': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 5px rgba(199, 54, 100, 0.5)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 20px rgba(199, 54, 100, 0.8)'
          }
        }
      },
      // Custom animation classes
      animation: {
        'gradient-slow': 'gradient-slow 8s ease infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      },
      // Custom colors for your academy
      colors: {
        'kathak': {
          primary: '#C73664',    // Main pink/red
          secondary: '#0C1B33',  // Dark blue
          accent: '#8B4513',     // Brown
          light: '#4682B4',      // Light blue
          neutral: '#2F4F4F',    // Dark slate gray
          bg: '#FDF9F0',         // Cream background
          gradient: {
            start: '#FFD9C0',    // Peach
            end: '#00FFF7'       // Cyan
          }
        }
      },
      // Custom font families (if you want to add custom fonts later)
      fontFamily: {
        'kathak': ['Inter', 'sans-serif'], // You can change this to your preferred font
      },
      // Custom spacing for dance-related layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Custom border radius
      borderRadius: {
        'xl2': '1.5rem',
        '2xl': '2rem',
      },
      // Custom shadows
      boxShadow: {
        'kathak': '0 10px 25px -3px rgba(199, 54, 100, 0.1), 0 4px 6px -2px rgba(199, 54, 100, 0.05)',
        'glow': '0 0 20px rgba(199, 54, 100, 0.3)',
      }
    },
  },
  plugins: [],
}