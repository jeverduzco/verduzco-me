<template>
  <div>
    <section id="policy-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <PolicyWelcome :title="policy.title" />
      <Waves />
    </section>
    <v-container
      grid-list-xl
      class="content-container"
    >
      <v-layout
        wrap
        row
        align-center
      >
        <v-flex>
          <article>
            <nuxt-content :document="policy" />
          </article>
        </v-flex>
      </v-layout>
    </v-container>
    <WavesSecondary />
  </div>
</template>
<script>
export default {
  name: 'PrivacyPolicy',
  nuxtI18n: {
    paths: {
      es: '/legal/privacidad/',
      en: '/legal/privacy/'
    }
  },
  async asyncData({ $content, app, params }) {
    const policy = await $content(`${app.i18n.locale}/legal`, 'privacy').fetch()

    return { policy }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'es' ? 'es-MX' : 'en-US'
      },
      title: this.policy.title,
      link: [
        {
          rel: 'canonical',
          href:
            this.$i18n.locale === 'es'
              ? 'https://www.verduzco.me/es/legal/privacidad/'
              : 'https://www.verduzco.me/en/legal/privacy/'
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'es' ? 'en-US' : 'es-MX',
          href:
            this.$i18n.locale === 'es'
              ? 'https://verduzco.me/en/legal/privacy/'
              : 'https://verduzco.me/es/legal/privacidad/'
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.policy.description
        },
        {
          hid: 'meta',
          name: 'robots',
          content: 'noindex'
        },
        {
          property: 'og:title',
          content: this.policy.title
        },
        {
          property: 'og:description',
          content: this.policy.description
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
            this.$i18n.locale === 'es'
              ? 'https://www.verduzco.me/es/legal/privacidad/'
              : 'https://www.verduzco.me/en/legal/privacy/'
        },
        {
          property: 'og:site_name',
          content: this.policy.title
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
          content: this.policy.description
        },
        {
          name: 'twitter:title',
          content: this.policy.title
        },
        {
          name: 'twitter:image',
          content:
            this.$i18n.locale === 'es'
              ? 'https://storage.verduzco.dev/dotme/website/es/jesus-es-open-g.png'
              : 'https://storage.verduzco.dev/dotme/website/en/jesus-en-open-g.png'
        },
        {
          name: 'twitter:creator',
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
.content-container {
  padding-bottom: 50px;
}
</style>
