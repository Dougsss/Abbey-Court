/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'nigth' : "url('')",
        'day' : "url('https://media.istockphoto.com/id/1361200288/vector/city-park-with-bench-sunset-cityscape-landscape.jpg?s=612x612&w=0&k=20&c=7ts8w2tC6re_3L4eSysdkzRaL__PgSh5BECgyALNWgs=')"
      }
    },
  },
  plugins: [],
}
