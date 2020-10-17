<template>
  <div>
    <section id="post-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <ArticleWelcome :title="article.title" :img="article.img" :date="article.createdAt" />
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
            <nuxt-content :document="article" />
          </article>
        </v-flex>
      </v-layout>
    </v-container>
    <prev-next :prev="prev" :next="next" />
    <WavesSecondary />
  </div>
</template>
<script>
export default {
  name: 'Article',
  async asyncData({ $content, app, params }) {
    const article = await $content(
      `${app.i18n.locale}/blog`,
      params.slug
    ).fetch()
    const [prev, next] = await $content(`${app.i18n.locale}/blog`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  beforeMount() {
    this.$nuxt.$emit('related-article', this.article.related)
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'es' ? 'es-MX' : 'en-US'
      },
      title: this.article.title,
      link: [
        {
          rel: 'canonical',
          href:
            this.$i18n.locale === 'es'
              ? 'https://www.verduzco.me/es/blog/' + this.article.slug + '/'
              : 'https://www.verduzco.me/en/blog/' + this.article.slug + '/'
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'es' ? 'en-US' : 'es-MX',
          href:
            this.$i18n.locale === 'es'
              ? 'https://verduzco.me/en/blog/' + this.article.slug + '/'
              : 'https://verduzco.me/es/blog/' + this.article.slug + '/'
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          property: 'og:title',
          content: this.article.title
        },
        {
          property: 'og:description',
          content: this.article.description
        },
        {
          property: 'og:image',
          content: this.article.opimg
        },
        {
          property: 'og:locale',
          content: this.$i18n.locale === 'es' ? 'es-MX' : 'en-US'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:url',
          content:
            this.$i18n.locale === 'es'
              ? 'https://www.verduzco.me/es/blog/' + this.article.slug + '/'
              : 'https://www.verduzco.me/en/blog/' + this.article.slug + '/'
        },
        {
          property: 'og:site_name',
          content: this.article.title
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
          content: this.article.description
        },
        {
          name: 'twitter:title',
          content: this.article.title
        },
        {
          name: 'twitter:image',
          content: this.article.opimg
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
