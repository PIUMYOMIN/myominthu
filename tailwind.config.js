/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quantico: ["Quantico", "sans-serif"],
        ptsans: ["PtSans", "sans-serif"]
      },
      skew: {
        "17": "180"
      }
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "16": "4rem"
    },
    colors: {
      "dark-purple": "#081A51",
      white: "#ffffff",
      dark: "#000000",
      "slate-50": "rgb(248 250 252)",
      "slate-100": "rgb(241 245 249)",
      "slate-200": "rgb(226 232 240)",
      "slate-300": "rgb(203 213 225)",
      "slate-400": "rgb(148 163 184)",
      "slate-500": "rgb(100 116 139)",
      "slate-600": "rgb(71 85 105)",
      "slate-700": "rgb(51 65 85)",
      "late- 800": "rgb(30 41 59)",
      "orange-50": "rgb(255 247 237)",
      "orange-100": "rgb(255 237 213)",
      "orange-200": "rgb(254 215 170)",
      "orange-300": "rgb(253 186 116)",
      "orange-400": "rgb(251 146 60)",
      "orange-500": "rgb(249 115 22)",
      "orange-600": "rgb(234 88 12)",
      "orange-700": "rgb(194 65 12)",
      "orange-800": "rgb(154 52 18)",
      "orange-900": "rgb(124 45 18)",
      "orange-950": "rgb(67 20 7)",
      "amber-50": "rgb(255 251 235)",
      "amber-100": "rgb(254 243 199)",
      "amber-200": "rgb(253 230 138)",
      "amber-300": "rgb(252 211 77)",
      "amber-400": "rgb(251 191 36)",
      "amber-500": "rgb(245 158 11)",
      "amber-600": "rgb(217 119 6)",
      "amber-700": "rgb(180 83 9)",
      "amber-800": "rgb(146 64 14)",
      "amber-900": "rgb(120 53 15)",
      "amber-950": "rgb(69 26 3)",
      "yellow-50": "rgb(254 252 232)",
      "yellow-100": "rgb(254 249 195)",
      "yellow-200": "rgb(254 240 138)",
      "yellow-300": "rgb(253 224 71)",
      "yellow-400": "rgb(250 204 21)",
      "yellow-500": "rgb(234 179 8)",
      "yellow-600": "rgb(202 138 4)",
      "yellow-700": "rgb(161 98 7)",
      "yellow-800": "rgb(133 77 14)",
      "yellow-900": "rgb(113 63 18)",
      "yellow-950": "rgb(66 32 6)",
      "blue-50": "rgb(239 246 255)",
      "blue-100": "rgb(219 234 254)",
      "blue-200": "rgb(191 219 254)",
      "blue-300": "rgb(147 197 253)",
      "blue-400": "rgb(96 165 250)",
      "blue-500": "rgb(59 130 246)",
      "blue-600": "rgb(37 99 235)",
      "blue-700": "rgb(29 78 216)",
      "blue-800": "rgb(30 64 175)",
      "blue-900": "rgb(30 58 138)",
      "blue-950": "rgb(23 37 84)",
      "gray-200": "rgb(229 231 235)",
      "gray-300": "rgb(209 213 219)",
      "gray-400": "rgb(156 163 175)",
      "gray-500": "rgb(107 114 128)",
      "gray-600": "rgb(75 85 99)",
      "gray-700": "rgb(55 65 81)",
      "gray-800": "rgb(31 41 55)",
      "gray-900": "rgb(17 24 39)",
      "gray-950": "rgb(3 7 18)"
    },
    backgroundImage: {
      primary:
        "linear-gradient(17deg, rgba(19,19,19,1) 5%, rgba(25,93,181,1) 93%)",
      secondary:
        "linear-gradient(0deg, rgba(19,19,19,1) 5%, rgba(16,60,139,1) 93%)"
    }
  },
  plugins: []
};