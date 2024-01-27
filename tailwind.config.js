/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

