<template>
  <div>
    <section id="article-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <ArticleWelcome :title="article.title" :img="article.img" :date="article.createdAt" />
      <Waves />
    </section>
    <v-container
      grid-list-xl
      class="content-container"
    >
      <v-layout
        class="section-content"
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
  async asyncData({ $content, params }) {
    const article = await $content(`blog`, params.slug).fetch()
    const [prev, next] = await $content(`blog`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en-us'
      },
      title: this.article.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://verduzco.me/es/blog/' + this.article.slug + '/'
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
          content: 'en-us'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:url',
          content: 'https://verduzco.me/blog/' + this.article.slug + '/'
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
