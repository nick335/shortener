/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dart" : "#2699E3",
        "swift" : "#FAB12D",
        "ruby" : "#F2443F",
        "secondary-blue" : "#272E4B",
        "not-yellow" : "#F4E1CE",
        "secondary-red" : "#802507",
        "third-blue" : "#6259CD",
        "ls-green" : "#00B29A",
        "third-red" : "#FC8A7A",
        "ecx-black" : "#000000",
        "ecx-grey" : "#424242",
        "ecx-white" : "#FFFFFF",
      },
      fontFamily: {
        "varela-round": ["var(--font-varela-round)"],
        "inter": ["var(--font-inter)"],
        "poppins": ["var(--font-poppins)"],
      },
      fontSize: {
        "small": ["14px", {
          lineHeight: "19.6px",
        }],
        "normal": ["16px", {
          lineHeight: "22.4px",
        }],
        "medium": ["18px", {
          lineHeight: "25.2px",
        }],
        "large": ["20px", {
          lineHeight: "28px",
        }],
      }
    },
  },
  plugins: [],
}
