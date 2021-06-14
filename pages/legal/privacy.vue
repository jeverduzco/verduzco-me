<template>
  <div>
    <section
      id="privacy-welcome"
      :class="
        $vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'
      "
    >
      <PolicyWelcome :title="policy.title" />
      <Waves />
    </section>
    <v-container grid-list-xl class="content-container">
      <v-layout wrap row align-center>
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
      en: '/legal/privacy/',
    },
  },
  async asyncData({ $content, app, params }) {
    const policy = await $content(`${app.i18n.locale}/legal`, 'privacy').fetch()

    return { policy }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX',
      },
      title: this.policy.title,
      link: [
        {
          rel: 'canonical',
          href:
            this.$i18n.locale === 'en'
              ? 'https://www.verduzco.me/en/'
              : 'https://www.verduzco.me/es/',
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'en' ? 'es-MX' : 'en-US',
          href:
            this.$i18n.locale === 'en'
              ? 'https://www.verduzco.me/es/'
              : 'https://www.verduzco.me/en/',
        },
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.policy.description,
        },
        {
          hid: 'meta',
          name: 'robots',
          content: 'noindex',
        },
        {
          property: 'og:title',
          content: this.policy.title,
        },
        {
          property: 'og:description',
          content: this.policy.description,
        },
        {
          property: 'og:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/blog_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/blog_es.png',
        },
        {
          property: 'og:locale',
          content: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content:
            this.$i18n.locale === 'en'
              ? 'https://www.verduzco.me/en/'
              : 'https://www.verduzco.me/es/',
        },
        {
          property: 'og:site_name',
          content: this.policy.title,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:width',
          content: '630',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:description',
          content: this.policy.description,
        },
        {
          name: 'twitter:title',
          content: this.policy.title,
        },
        {
          name: 'twitter:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/blog_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/blog_es.png',
        },
      ],
    }
  },
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
