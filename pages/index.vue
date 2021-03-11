<template>
  <div id="index-page">
    <!-- start page content -->
    <section id="welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <Welcome />
      <Waves />
    </section>
    <section id="whoami">
      <WhoAmI />
      <WavesSecondary />
    </section>
    <section id="whatido" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <WhatIdo />
      <Waves />
    </section>
    <section id="from">
      <WhereAmIFrom />
      <WavesSecondary />
    </section>
    <!-- End page content -->
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      title: this.$t('global.name') + ' - ' + this.$t('global.slogan'),
      description: this.$t('index.description'),
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jesús Verduzco',
        url: 'https://www.verduzco.me/',
        image: 'https://storage.verduzco.me/dotme/website/jesus-verduzco.jpg',
        sameAs: [
          'https://www.linkedin.com/in/verduzcodotme/',
          'https://github.com/jeverduzco',
          'https://twitter.com/verduzcodotme',
          'https://www.twitch.tv/verduzcodotme',
          'https://www.instagram.com/verduzcodotme/'
        ]
      }
    }
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: 'application/ld+json'
        }
      ],
      htmlAttrs: {
        lang: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX'
      },
      title: this.title,
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
          content: this.description
        },
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:description',
          content: this.description
        },
        {
          property: 'og:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/inicio_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/inicio_es.png'
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
          content: this.title
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
          name: 'twitter:creator',
          content: '@jeverduzco'
        },
        {
          name: 'twitter:description',
          content: this.description
        },
        {
          name: 'twitter:title',
          content: this.title
        },
        {
          name: 'twitter:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/inicio_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/inicio_es.png'
        }
      ]
    }
  }
}
</script>
