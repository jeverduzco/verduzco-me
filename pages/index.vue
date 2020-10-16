<template>
  <div id="index-page">
    <section
      id="welcome"
      :class="
        this.$vuetify.theme.dark
          ? 'primary-background-dark'
          : 'primary-background'
      "
    >
      <Welcome />
      <Waves />
    </section>
    <section id="business">
      <Ideas />
      <WavesSecondary />
    </section>
    <section id="consulting" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <Code />
      <Waves />
    </section>
    <section id="gamicharlas">
      <Gamicharlas />
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
      title: this.$t('index.title'),
      description: this.$t('index.description'),
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jesús Verduzco',
        url: 'https://verduzco.me/',
        image: 'https://storage.verduzco.dev/dotme/website/jesus-verduzco.jpg',
        sameAs: [
          'https://www.linkedin.com/in/jeverduzco/',
          'https://github.com/jeverduzco',
          'https://twitter.com/jeverduzco',
          'https://youtube.com/c/Jes%C3%BAsVerduzco'
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
        lang: this.$i18n.locale
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://www.verduzco.me/'
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
          content: this.$i18n.locale
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://www.verduzco.me/'
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
