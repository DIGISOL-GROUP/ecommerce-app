/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#00FFFF',
        magenta: '#FF00FF',
        cyan: '#00BFFF',
        glass: 'rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        glass: '1.5rem',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(0,255,255,0.15)',
      },
    },
  },
  plugins: [],
};
