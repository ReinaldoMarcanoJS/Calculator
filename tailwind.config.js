/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "defaultFamily" : 'League Spartan',
    },
    backgroundColor: {
      /* Theme 1 */
      'White': 'hsl(0, 0%, 100%)',
      'blue-main-background': 'hsl(222, 26%, 31%)',
      'blue-toggle-background': 'hsl(223, 31%, 20%)',
      'blue-screen-background': 'hsl(224, 36%, 15%)',
      'dark-blue-key-background': 'hsl(225, 21%, 49%)',
      'Red-key-background-toggle': 'hsl(6, 63%, 50%)',
      'Light-grayish-orange-key-background': ' hsl(30, 25%, 89%)',

      /* Theme 2 */

      'Light-gray-main-background': 'hsl(0, 0%, 90%)',
      'Grayish-red-toggle-background-keypad-background': 'hsl(0, 5%, 81%)',
      'Very-light-gray-screen-background': 'hsl(0, 0%, 93%)',

      /* Keys 2 */

      'Dark-moderate-cyan-key-background': 'hsl(185, 42%, 37%)',
      'Orange-key-background-toggle': 'hsl(25, 98%, 40%)',
      'Light-grayish-yellow-key-background': 'hsl(45, 7%, 89%)',

    },
    colors: {
    },
    textColor: {
      /* Theme 1 */

      'White': 'hsl(0, 0%, 100%)',
      'Very-dark-grayish-blue': 'hsl(221, 14%, 31%)',

      /* Theme 2 */
      'Very-dark-grayish-yellow': 'hsl(60, 10%, 19%)',
      'White-text': 'hsl(0, 0%, 100%)',
    },
    fontSize: {
      "size-input": "40px",
      "size-h1": "35px",
      "size-sm": "13px",
      "sm-max": "13px",
      "md": "22px",
      "size-number": "32px"
    },
    borderColor: {
      'dark-blue-key-shadow': 'hsl(224, 28%, 35%)',
      'Dark-red-key-shadow': 'hsl(6, 70%, 34%)',
      'Grayish-orange-key-shadow': 'hsl(28, 16%, 65%)',

      /* Keys 2 */

      'Very-dark-cyan-key-shadow': 'hsl(185, 58%, 25%)',
      'Dark-orange-key-shadow': ' hsl(25, 99%, 27%)',
      'Dark-grayish-orange-key-shadow': ' hsl(35, 11%, 61%)',


    },
    letterSpacing: {
      "letter-spacing": "15px",
      "letter-lg": "2px",
    },
    screens: {
      xs: { 'min': '400px', 'max': '550px' },
      sm: { 'min': '551px', 'max': '767px' },
      md: { 'min': '768px', 'max': '991px' },
      lg: { 'min': '992px' },
      xl: { 'min': '1200px' },
    }

  },
  darkMode: {

  },

  plugins: [],
}

