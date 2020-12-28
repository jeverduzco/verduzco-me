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
      <Work />
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
      description:
        'I am Jesús Verduzco, a Geek enthusiastic about code and creating great things with it.',
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Jesús Verduzco',
        url: 'https://verduzco.me/',
        image: 'https://storage.verduzco.me/dotme/website/jesus-verduzco.jpg',
        sameAs: [
          'https://www.linkedin.com/in/jeverduzco/',
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
        lang: 'en-us'
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://verduzco.me/'
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
            'https://storage.verduzco.me/dotme/website/en/jesus-en-open-g.png'
        },
        {
          property: 'og:locale',
          content: 'en-us'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://verduzco.me/'
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
            'https://storage.verduzco.me/dotme/website/en/jesus-en-open-g.png'
        }
      ]
    }
  }
}
</script>
