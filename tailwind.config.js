/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: { 
      backgroundImage: {
        heroPattern: "url('/src/images/hero.png')",
        ourStoryPattern: "url('/src/images/bg-OUR STORY.png')",
        servicePattern: "url('/src/images/bg-SERVICES.png')",
      },
      colors: {
        badgeContent1 : '#FF6633',
        badgeBgContent2 : 'rgba(41, 204, 57, 0.1)',
        badgeContent2 : '#29CC39',
        badgeContent3 : '#3361FF',
        badgeBgContent3 : 'rgba(51, 97, 255, 0.1)',
        badgeContent4 : '#FF6633',
        badgeBgContent4 : 'rgba(255, 102, 51, 0.1)',
      }
    },
  },
  plugins: [],
}
