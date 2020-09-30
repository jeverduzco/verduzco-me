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
      title: 'Jesús Verduzco | Escritor y programador de ideas.',
      description:
        'Me fascina compartir mis ideas y mi conocimiento. ¿Por qué? Creo, firmemente, que así puedo ayudar a impulsar el desarrollo tecnológico y educativo de Latinoamérica.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jesús Verduzco',
        url: 'https://verduzco.me/',
        image: 'https://storage.verduzco.dev/dotme/website/jesus-verduzco.jpg',
        sameAs: [
          'https://www.linkedin.com/in/jeverduzco/',
          'https://github.com/jeverduzco',
          'https://twitter.com/jeverduzco'
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
            'https://storage.verduzco.dev/dotme/website/jesus-verduzco-open-gra.png'
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
            'https://storage.verduzco.dev/dotme/website/jesus-verduzco-open-gra.png'
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
