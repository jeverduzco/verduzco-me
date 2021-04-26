<template>
  <div>
    <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    />
  </div>
</template>
<script>
export default {
  name: 'TwitchAnalitycs',
  beforeMount() {
    if (!this.$route.params.slug) {
      this.$router.push(this.$i18n.locale === 'en' ? '/en/' : '/es/')
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX'
      },
      title:
        this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...',
      link: [
        {
          rel: 'canonical',
          href:
            this.$i18n.locale === 'en'
              ? 'https://www.verduzco.me/en/'
              : 'https://www.verduzco.me/es/'
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'en' ? 'es-MX' : 'en-US',
          href:
            this.$i18n.locale === 'en'
              ? 'https://www.verduzco.me/es/'
              : 'https://www.verduzco.me/en/'
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...'
        },
        {
          hid: 'meta',
          name: 'robots',
          content: 'noindex'
        },
        {
          property: 'og:title',
          content:
            this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...'
        },
        {
          property: 'og:description',
          content:
            this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...'
        },
        {
          property: 'og:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/blog_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/blog_es.png'
        },
        {
          property: 'og:locale',
          content: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content:
            this.$i18n.locale === 'en'
              ? 'https://www.verduzco.me/en/'
              : 'https://www.verduzco.me/es/'
        },
        {
          property: 'og:site_name',
          content:
            this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...'
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:width',
          content: '630'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:description',
          content:
            this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...'
        },
        {
          name: 'twitter:title',
          content:
            this.$i18n.locale === 'en' ? 'Redirecting...' : 'Redireccionando...'
        },
        {
          name: 'twitter:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/blog_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/blog_es.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  padding-bottom: 50px;
}
</style>
