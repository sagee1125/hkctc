/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newPrimary: '#203136',
        secondary: '#74C82F',
        reliableBlue: "#366ABC",
        trustfulBlue: "#366ABC",
        growthfulGreen: "#157B3E",
        innovativeGreen: "#74C82F",
        energeticOrange: "#EE9C22",
        // TODO temp
        primary: '#3498db',
        background: '#f4f4f9',
        text: '#333333',
        highlight: '#f39c12',
        error: '#e74c3c',
        success: '#27ae60',
        link: '#2980b9',
        border: '#e1e1e1',
      },

    },
  },
  plugins: [],
}
