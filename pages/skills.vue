<template>
  <div id="index-page">
    <!-- start page content -->
    <section id="welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <SkillsWelcome />
      <Waves />
    </section>
    <section id="whoiam">
      <DevOps />
      <WavesSecondary />
    </section>
    <section id="whatido" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <Development />
      <Waves />
    </section>
    <section id="why">
      <Others />
      <WavesSecondary />
    </section>
    <!-- End page content -->
  </div>
</template>

<script>
export default {
  name: 'Skills',
  nuxtI18n: {
    paths: {
      es: '/habilidades/',
      en: '/skills/'
    }
  },
  data() {
    return {
      title: this.$t('skills.title'),
      description: this.$t('skills.description')
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
              ? 'https://verduzco.me/en/know-me/'
              : 'https://verduzco.me/es/conoceme/'
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'es' ? 'en-US' : 'es-MX',
          href:
            this.$i18n.locale === 'es'
              ? 'https://verduzco.me/en/know-me/'
              : 'https://verduzco.me/es/conoceme/'
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
            this.$i18n.locale === 'es'
              ? 'https://storage.verduzco.dev/dotme/website/es/jesus-es-open-g.png'
              : 'https://storage.verduzco.dev/dotme/website/en/jesus-en-open-g.png'
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
              ? 'https://verduzco.me/en/know-me/'
              : 'https://verduzco.me/es/conoceme/'
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
          content:
            this.$i18n.locale === 'es'
              ? 'https://storage.verduzco.dev/dotme/website/es/jesus-es-open-g.png'
              : 'https://storage.verduzco.dev/dotme/website/en/jesus-en-open-g.png'
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
