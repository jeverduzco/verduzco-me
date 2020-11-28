<template>
  <div>
    <section id="cookies-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
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
  name: 'CookiesPolicy',
  async asyncData({ $content, app, params }) {
    const policy = await $content(`legal`, 'cookies').fetch()

    return { policy }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'es-MX'
      },
      title: this.policy.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://www.verduzco.me/legal/cookies/'
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
            'https://storage.verduzco.me/dotme/website/es/jesus-es-open-g.png'
        },
        {
          property: 'og:locale',
          content: 'es-MX'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://www.verduzco.me/legal/cookies/'
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
            'https://storage.verduzco.me/dotme/website/es/jesus-es-open-g.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  padding-bottom: 50px;
}
</style>
