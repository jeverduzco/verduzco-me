// vuetify.options.js
import minifyTheme from 'minify-css-string'
export default {
  theme: {
    options: { minifyTheme },
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
