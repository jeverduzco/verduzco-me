// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  telemetry: true,
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
        href: 'https://storage.verduzco.me/dotme/website/favicon-128.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: 'https://storage.verduzco.me/dotme/website/favicon-192.png'
      }
    ],
    script: [
      {
        innerHTML: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "4x7tnhv7eu");`,
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
  plugins: [{ src: '~plugins/vue-cookie-law.js', ssr: false }],
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
        optionsPath: './vuetify.options.js'
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
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    retry: true
  },
  sitemap: {
    sitemaps: [
      {
        path: '/pages_en.xml',
        hostname: 'https://www.verduzco.me',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false,
        trailingSlash: true,
        routes: ['/en/'],
        exclude: ['/', '/legal/cookies/', '/legal/privacy/', '/legal/notice/']
      },
      {
        path: '/pages_es.xml',
        hostname: 'https://www.verduzco.me',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false,
        trailingSlash: true,
        routes: ['/es/'],
        exclude: ['/', '/legal/cookies/', '/legal/privacy/', '/legal/notice/']
      }
    ]
  },
  router: {
    trailingSlash: true
  },
  build: {}
}
