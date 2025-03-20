import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Warna utama - menggantikan purple
        primary: {
          50: "#faf5ff", // Menggantikan purple-50
          100: "#f3e8ff", // Menggantikan purple-100
          200: "#e9d5ff", // Menggantikan purple-200
          400: "#c084fc", // Menggantikan purple-400
          500: "#a855f7", // Menggantikan purple-500
          600: "#9333ea", // Menggantikan purple-600
          700: "#7e22ce", // Menggantikan purple-700
        },
        // Warna teks
        text: {
          primary: "#1f2937", // Menggantikan gray-800
          secondary: "#4b5563", // Menggantikan gray-600
        },
        // Warna latar belakang
        background: {
          light: "#ffffff", // Warna putih
          gradient: {
            start: "#ffffff", // from-white
            end: "#faf5ff", // to-purple-50 (sekarang primary-50)
          },
        },
        // Warna border
        border: {
          light: "#ffffff", // Warna border putih
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      gradientColorStops: {
        "primary-gradient-from": "#f3e8ff", // purple-100
        "primary-gradient-to": "#e9d5ff", // purple-200
      },
    },
  },
  plugins: [],
} satisfies Config;
