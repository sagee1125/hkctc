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
        grey: "#666666",
        darkNavy: "#7C7F83",
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
        'heading-s': ['16px', { lineHeight: '22px', fontWeight: 700 }],
        'heading-m': ['18px', { lineHeight: '24px', fontWeight: 700 }],
        'heading-l': ['24px', { lineHeight: '32px', fontWeight: 700 }],
        'heading-l-extra': ['28px', { lineHeight: '28px', fontWeight: 700 }],
        'heading-xl': ['32px', { lineHeight: '32px', fontWeight: 700 }],
        'heading-xxl': ['40px', { lineHeight: '40px', fontWeight: 800 }],


        'highlight-xs': ['12px', { lineHeight: '18px', fontWeight: 400 }],
        'highlight-s': ['14px', { lineHeight: '20px', fontWeight: 600 }],
        'highlight-m': ['16px', { lineHeight: '22px', fontWeight: 600 }],
        'highlight-l': ['18px', { lineHeight: '24px', fontWeight: 600 }],
        'highlight-extra': ['18px', { lineHeight: '32px', fontWeight: 600 }],


        'body-s': ['14px', { lineHeight: '20px', fontWeight: 300 }],
        'italic-s': ['14px', { lineHeight: '20px', fontStyle: "italic" }],
        'body-m': ['16px', { lineHeight: '22px', fontWeight: 300 }],
        'body-l': ['18px', { lineHeight: '24px', fontWeight: 300 }],
      },
      fontWeight: {
        'light': 300,
        'italic': 'italic',
      },
    },
  },
  plugins: [],
}
