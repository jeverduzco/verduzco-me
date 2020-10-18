<template>
  <div id="index-page">
    <!-- start page content -->
    <section id="welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <AboutWelcome />
      <Waves />
    </section>
    <section id="whoiam">
      <WhoIam />
      <WavesSecondary />
    </section>
    <section id="whatido" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <WhatIdo />
      <Waves />
    </section>
    <section id="why">
      <Why />
      <WavesSecondary />
    </section>
    <!-- End page content -->
  </div>
</template>

<script>
export default {
  name: 'About',
  nuxtI18n: {
    paths: {
      es: '/acerca-de-mi/',
      en: '/about-me/'
    }
  },
  data() {
    return {
      title: this.$t('aboutMe.title'),
      description: this.$t('aboutMe.description')
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'es' ? 'es-MX' : 'en-US'
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href:
            this.$i18n.locale === 'en'
              ? 'https://verduzco.me/en/about-me/'
              : 'https://verduzco.me/es/acerca-de-mi/'
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'es' ? 'en-US' : 'es-MX',
          href:
            this.$i18n.locale === 'es'
              ? 'https://verduzco.me/en/about-me/'
              : 'https://verduzco.me/es/acerca-de-mi/'
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
          content: 'https://storage.verduzco.dev/dotme/website/j-op.png'
        },
        {
          property: 'og:locale',
          content: this.$i18n.locale === 'es' ? 'es-MX' : 'en-US'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content:
            this.$i18n.locale === 'en'
              ? 'https://verduzco.me/en/about-me/'
              : 'https://verduzco.me/es/acerca-de-mi/'
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
          name: 'twitter:description',
          content: this.description
        },
        {
          name: 'twitter:title',
          content: this.title
        },
        {
          name: 'twitter:image',
          content: 'https://storage.verduzco.dev/dotme/website/j-op.png'
        },
        {
          name: 'twitter:site',
          content: '@jeverduzco'
        }
      ]
    }
  }
}
</script>
<style scoped>
.primary-background {
  background-color: whitesmoke;
}
.primary-background-dark {
  background-color: #272727;
}
</style>
