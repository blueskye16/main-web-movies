/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  /* bagian ini masudnya 
  ./ --> routenya
  src --> di folder apa kita simpan 
  ** --> ngecek semua folder yang ada di dalamnya
  * --> semua file yang ada di dalemnya
  *.{html,js} --> selama dia extensinya html dan css*/ 
  theme: {
    extend: {},
  },
  plugins: [],
}

