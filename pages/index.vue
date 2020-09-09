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
      <Business />
      <WavesSecondary />
    </section>
    <section id="consulting" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <Consulting />
      <Waves />
    </section>
    <section id="content">
      <Content />
    </section>
    <!-- End page content -->
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      title: 'Jesús Verduzco | Azure Solutions Architect Expert',
      description:
        'Arquitecto de soluciones con tecnología de Microsoft Azure, apasionado por el código, la inteligencia artificial y con una sed nata de conocimiento.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jesús Verduzco',
        url: 'https://verduzco.me/',
        image:
          'https://storage.verduzco.dev/dotme/website/jesus-verduzco-open.png',
        sameAs: [
          'https://www.linkedin.com/in/verduzco-dev/',
          'https://github.com/jeverduzco'
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
            'https://storage.verduzco.dev/dotme/website/jesus-verduzco-open.png'
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
            'https://storage.verduzco.dev/dotme/website/jesus-verduzco-open.png'
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
