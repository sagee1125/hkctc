/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242A31',
        newPrimary: '#203136',
        secondary: '#74C82F',
        reliableBlue: "#366ABC",
        trustfulBlue: "#366ABC",
        growthfulGreen: "#157B3E",
        innovativeGreen: "#74C82F",
        energeticOrange: "#EE9C22",
        lightGrey: '#F2F2EF',
        // TODO temp

        background: '#f4f4f9',
        text: '#333333',
        highlight: '#f39c12',
        error: '#e74c3c',
        success: '#27ae60',
        link: '#2980b9',
        border: '#e1e1e1',
      },
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      },
      fontSize: {
        'heading-s': ['16px', { lineHeight: '22px' }],
        'heading-m': ['18px', { lineHeight: '24px' }],
        'heading-l': ['24px', { lineHeight: '32px' }],
        'heading-l-extra': ['28px', { lineHeight: '28px' }],
        'heading-xl': ['32px', { lineHeight: '32px' }],
        'heading-xxl': ['40px', { lineHeight: '40px' }],

        'body-s': ['14px', { lineHeight: '20px' }],
        'italic-s': ['14px', { lineHeight: '20px' }],
        'body-m': ['16px', { lineHeight: '22px' }],
        'body-l': ['18px', { lineHeight: '24px' }],
      },
      fontWeight: {
        'light': 300,
        'italic': 'italic',
      },
    },
  },
  plugins: [],
}
