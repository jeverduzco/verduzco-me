export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.14.0/css/all.css'
      },
      {
        rel: 'icon',
        type: 'shortcut icon',
        href: 'https://storage.verduzco.dev/dotme/website/icon-n-128.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: 'https://storage.verduzco.dev/dotme/website/icon-n-192.png'
      }
    ],
    script: [
      {
        innerHTML: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "3v7yxn0mro");`,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizers: ['script', 'innerHTML']
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/vuetify',
      {
        treeShake: true,
        theme: {
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
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'applicationinsightsfornuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Español',
            code: 'es',
            iso: 'es-MX',
            file: 'es.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'es',
        fallbackLocale: 'es',
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true
        }
      }
    ]
  ],
  appInsights: {
    instrumentationKey: 'd09a11fe-afd1-4fdb-8fbd-29b60e067caf'
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  sitemap: {
    hostname: 'https://www.verduzco.me',
    sitemaps: [
      {
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false,
        routes: [
          '/es/',
          '/en/',
          '/es/conoceme/',
          '/en/know-me/',
          '/es/blog/',
          '/en/blog/',
          '/es/blog/trabajo-remoto/',
          '/en/blog/remote-work/',
          '/es/blog/como-aumentar-la-productividad/',
          '/en/blog/how-to-increase-productivity/',
          '/es/blog/consejos-aprender-en-linea/',
          '/en/blog/tips-to-learn-online/',
          '/es/blog/hosting-gratuitos/',
          '/en/blog/free-hosting/',
          '/es/blog/que-es-la-telemetria/',
          '/en/blog/what-is-telemetry/',
          '/es/blog/la-mejor-campana-de-marketing/',
          '/en/blog/wthe-best-marketing-campaign/'
        ],
        exclude: ['/', '/blog', '/know-me']
      }
    ]
  },
  generate: {
    crawler: false,
    async routes() {
      const { $content } = require('@nuxt/content')
      const blog = await $content({ deep: true })
        .only(['path'])
        .fetch()

      return blog.map(file => (file.path === '/index' ? '/' : file.path + '/'))
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
