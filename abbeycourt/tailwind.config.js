/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer' : "url('https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16913.jpg?w=1060&t=st=1678559238~exp=1678559838~hmac=218c0636f8baecddd4b2a958a82e15b8c5621edcf9bc07d7ff3f6e1b2dfd34ac')",
        'g-header' : "url('https://img.freepik.com/free-vector/gradient-green-background-abstracts-modern_343694-2574.jpg?w=1060&t=st=1678558946~exp=1678559546~hmac=290c65795c80ab5026e63130cffeb72dc438093fb03a98b1a5f4b9e920783f56')"
      }
    },
  },
  plugins: [],
}
