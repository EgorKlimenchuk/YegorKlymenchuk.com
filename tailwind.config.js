/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
      },
      height: {
        'custom-0.05': '0.05rem',
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
      },
    },
  },
  plugins: [],
};
