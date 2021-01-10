// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  telemetry: true,
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  },
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
        href: 'https://storage.verduzco.me/dotme/website/icon-n-128.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: 'https://storage.verduzco.me/dotme/website/icon-n-192.png'
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
  plugins: [
    { src: '~plugins/vue-cookie-law.js', ssr: false },
    { src: '~/plugins/vue-plyr', mode: 'client' }
  ],
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
    'nuxt-helmet',
    '@nuxtjs/redirect-module',
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
  redirect: [
    {
      from: '^.*(?<!/)$',
      to: (from, req) => req.url + '/',
      statusCode: 301
    }
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
        routes: ['/en/', '/en/blog/'],
        exclude: [
          '/',
          '/blog/',
          '/legal/cookies/',
          '/legal/privacy/',
          '/legal/notice/'
        ]
      },
      {
        path: '/pages_es.xml',
        hostname: 'https://www.verduzco.me',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false,
        trailingSlash: true,
        routes: ['/es/', '/es/blog/'],
        exclude: [
          '/',
          '/blog/',
          '/legal/cookies/',
          '/legal/privacy/',
          '/legal/notice/'
        ]
      },
      {
        path: '/articles_en.xml',
        hostname: 'https://www.verduzco.me',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false,
        trailingSlash: true,
        routes: [
          '/en/blog/free-hosting-services/',
          '/en/blog/gaming-as-a-service/',
          '/en/blog/infrastructure-as-code/',
          '/en/blog/remote-work-tips/',
          '/en/blog/tips-for-learning-online/',
          '/en/blog/web-site-vs-web-app/',
          '/en/blog/what-is-telemetry/',
          '/en/blog/wsl2-windows-terminal-zsh/'
        ],
        exclude: [
          '/',
          '/blog/',
          '/legal/cookies/',
          '/legal/privacy/',
          '/legal/notice/'
        ]
      },
      {
        path: '/articles_es.xml',
        hostname: 'https://www.verduzco.me',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: false,
        trailingSlash: true,
        routes: [
          '/es/blog/consejos-aprender-en-linea/',
          '/es/blog/gaming-as-a-service/',
          '/es/blog/hosting-gratuitos/',
          '/es/blog/infraestructura-como-codigo/',
          '/es/blog/que-es-la-telemetria/',
          '/es/blog/sitio-web-vs-aplicacion-web/',
          '/es/blog/trabajo-remoto/',
          '/es/blog/wsl2-windows-terminal-zsh/'
        ],
        exclude: [
          '/',
          '/blog/',
          '/legal/cookies/',
          '/legal/privacy/',
          '/legal/notice/'
        ]
      }
    ]
  },
  router: {
    trailingSlash: true
  },
  build: {
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
