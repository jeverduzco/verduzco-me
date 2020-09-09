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
    <!-- End page content -->
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      title: 'Jesús Verduzco | Ingeniero de DevOps',
      description: '',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jesús Verduzco',
        url: 'https://www.verduzco.me/',
        logo: 'https://storage.verduzco.dev/website/main/verduzco-dev-logo.png',
        foundingDate: '2019',
        sameAs: ['https://www.linkedin.com/in/verduzco-dev/']
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
        lang: 'es'
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
          content:
            'https://storage.verduzco.dev/website/main/verduzco-de-op-image.png'
        },
        {
          property: 'og:locale',
          content: 'es'
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
          content:
            'https://storage.verduzco.dev/website/main/verduzco-de-op-image.png'
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
