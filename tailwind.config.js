/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        button: 'var(--button)',
        hover: 'var(--hover)',
      },
      height: {
        'custom-0.05': '0.05rem',
        'custom-37': '37rem',
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { min: '768px', max: '1024px' },
        xl: { max: '1280px' },
      },
      maxWidth: {
        '8xl': '90rem',
        '45%': '45%',
        '50%': '50%',
        '70%': '70%',
      },
      maxHeight: {
        'custom-44': '44rem',
        'custom-37': '37rem',
      },
      margin: {
        1.5: '0.375rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      boxShadow: {
        custom: '0 0 3px #bbb',
        custom2: '0 0 10px #bbb',
      },
    },
  },
  plugins: [],
};
