/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "OpenSans-Light": ["OpenSans Light"],
        "OpenSans-Medium": ["OpenSans Medium"],
        "Poppins-Light": ["Poppins-Light"],
        "Poppins-Medium": ["Poppins-Medium"],
        "Poppins-Bold": ["Poppins-Bold"],
      },
    },
  },
  plugins: [],
};
