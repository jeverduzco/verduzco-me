// vuetify.options.js
import minifyTheme from 'minify-css-string'
import LRU from 'lru-cache'
const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})
export default {
  theme: {
    options: { minifyTheme, themeCache },
    dark: false,
    themes: {
      dark: {
        primary: '#03a9f4',
        secondary: '#00bcd4',
        accent: '#009688',
        error: '#f44336',
        warning: '#ff5722',
        info: '#ffc107',
        success: '#4caf50'
      },
      light: {
        primary: '#03a9f4',
        secondary: '#00bcd4',
        accent: '#009688',
        error: '#f44336',
        warning: '#ff5722',
        info: '#ffc107',
        success: '#4caf50'
      }
    }
  }
}
