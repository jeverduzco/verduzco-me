<template>
  <div>
    <section
      id="post-welcome"
      :class="
        this.$vuetify.theme.dark
          ? 'primary-background-dark'
          : 'primary-background'
      "
    >
      <ArticleWelcome :title="article.title" :img="article.img" :date="article.updatedAt" />
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
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: this.article.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://www.verduzco.me/blog/' + this.article.slug + '/'
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
          content: 'es'
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:url',
          content: 'https://www.verduzco.me/blog/' + this.article.slug + '/'
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
.primary-background {
  background-color: whitesmoke;
}
.primary-background-dark {
  background-color: #272727;
}
</style>
