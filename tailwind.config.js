/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /text-(.+)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242A31",
        newPrimary: "#233F55",
        secondary: "#74C82F",
        reliableBlue: "#366ABC",
        innovativeGreen: "#74C82F",
        lightGrey: "#F2F2EF",
        grey: "#666666",
        darkNavy: "#7C7F83",
        elegancePurple: "#D9B6F6",
        trustfulBlue: "#BBC9E7",
        growthfulGreen: "#D1E39B",
        energeticOrange: "#F15A31",
        secondaryOrange:'#F47B5A',
        whiteGrey: "#F7F7F5",
        // TODO temp

        background: "#f4f4f9",
        text: "#333333",
        highlight: "#f39c12",
        error: "#e74c3c",
        success: "#27ae60",
        link: "#2980b9",
        border: "#e1e1e1",
        links: "#00E",
        linkDark: "#203136",
      },
      fontFamily: {
        "roboto-flex": ["Roboto Flex", "sans-serif"],
      },
      fontSize: {
        "heading-s": ["16px", { lineHeight: "22px", fontWeight: 700 }],
        "heading-m": ["18px", { lineHeight: "24px", fontWeight: 700 }],
        "heading-l": ["24px", { lineHeight: "32px", fontWeight: 700 }],
        "heading-l-extra": ["28px", { lineHeight: "36px", fontWeight: 800 }],
        "heading-xl": ["32px", { lineHeight: "32px", fontWeight: 700 }],
        "heading-xxl": ["40px", { lineHeight: "40px", fontWeight: 800 }],

        "linked-m": ["16px", { lineHeight: "22px", fontWeight: 600 }],
        "linked-s": ["14px", { lineHeight: "20px", fontWeight: 300 }],

        "highlight-xs": ["12px", { lineHeight: "18px", fontWeight: 600 }],
        "highlight-s": ["14px", { lineHeight: "20px", fontWeight: 600 }],
        "highlight-m": ["16px", { lineHeight: "22px", fontWeight: 600 }],
        "highlight-l": ["18px", { lineHeight: "24px", fontWeight: 600 }],
        "highlight-extra": ["18px", { lineHeight: "32px", fontWeight: 600 }],

        "body-s": ["14px", { lineHeight: "20px", fontWeight: 300 }],
        "body-xs": ["12px", { lineHeight: "20px", fontWeight: 300 }],

        "italic-s": [
          "14px",
          { lineHeight: "20px", fontStyle: "italic", fontWeight: 300 },
        ],
        "body-m": ["16px", { lineHeight: "22px", fontWeight: 300 }],
        "body-l": ["18px", { lineHeight: "24px", fontWeight: 300 }],

        "button-xs": ["12px", { lineHeight: "18px", fontWeight: 700 }],
        "button-s": ["14px", { lineHeight: "20px", fontWeight: 700 }],
      },

      fontWeight: {
        light: 300,
        semibold: 600,
        italic: "italic",
      },

      animation: {
        "fade-in": "fadeIn 2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
