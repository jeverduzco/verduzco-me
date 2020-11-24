<template>
  <div id="blog-page">
    <section id="blog-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <BlogWelcome />
      <Waves />
    </section>
    <section id="blog-section">
      <AppSearchInput />
      <v-container
        grid-list-xl
        class="content-container"
      >
        <v-chip-group
          id="article-filter"
          v-model="activeTag"
          color="secondary"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag.index"
            :value="tag.slug"
            filter
          >
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
        <v-card
          v-for="article of blogFiltered.slice(0, postsLoaded)"
          :key="article.slug"
          class="article-card"
          nuxt
          :to="'/blog/' + article.slug + '/'"
          flat
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'blue-grey lighten-5'"
        >
          <v-layout
            id="article-content"
            wrap
            row
            align-center
          >
            <v-flex xs12 sm12 md8 lg8>
              <h2 class="text-h5 text-center text-md-left">
                {{ article.title }}
              </h2>
              <v-spacer class="text-spacer" />
              <h2 class="text-subtitle-1 text-center text-md-left">
                {{ article.description }}
              </h2>
              <v-spacer class="text-spacer" />
              <p class="text-overline text-center text-md-left">
                {{ formatDate(article.createdAt) }}
              </p>
            </v-flex>
            <v-flex
              class="text-center"
              xs12
              sm12
              md4
              lg4
            >
              <img class="article-image" :src="article.img" :alt="article.title">
            </v-flex>
          </v-layout>
        </v-card>
        <div class="text-center">
          <v-btn
            v-if="postsLoaded <= blogFiltered.length"
            color="secondary"
            rounded
            large
            depressed
            title="Cargar Más"
            @click="loadMore"
          >
            Cargar Más
          </v-btn>
        </div>
      </v-container>
    </section>
    <WavesSecondary />
  </div>
</template>
<script>
export default {
  name: 'Blog',
  data() {
    return {
      title: 'Mi Blog',
      postsLoaded: 3,
      description:
        'Aquí escribo lo que pienso, comparto lo que sé y devuelvo a internet un poco de lo que me ha dado.',
      activeTag: 'all',
      tags: [
        {
          name: 'VER TODO',
          slug: 'all'
        },
        {
          name: 'DEVOPS',
          slug: 'dev-ops'
        },
        {
          name: 'DESARROLLO WEB',
          slug: 'web-development'
        },
        {
          name: 'COMPUTACIÓN EN LA NUBE',
          slug: 'cloud-computing'
        },
        {
          name: 'TENDENCIAS',
          slug: 'trends'
        },
        {
          name: 'SOFTWARE',
          slug: 'software'
        },
        {
          name: 'EDUCACIÓN',
          slug: 'education'
        },
        {
          name: 'OPINIÓN',
          slug: 'opinion'
        },
        {
          name: 'NEGOCIOS',
          slug: 'business'
        },
        {
          name: 'MARKETING',
          slug: 'marketing'
        },
        {
          name: 'LIBROS',
          slug: 'books'
        },
        {
          name: 'OTROS TEMAS',
          slug: 'other-topics'
        }
      ]
    }
  },
  computed: {
    // return posts filtered
    blogFiltered() {
      if (this.activeTag !== 'all') {
        return this.blog.filter(item => {
          return item.category.includes(this.activeTag)
        })
      } else {
        return this.blog
      }
    }
  },
  watch: {
    activeTag(oldVal, newVal) {
      if (!oldVal) {
        this.activeTag = 'all'
      }
    }
  },
  async asyncData({ $content, params }) {
    const blog = await $content(`blog`, params.slug)
      .only(['title', 'description', 'img', 'slug', 'category', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      blog
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    },
    loadMore() {
      this.postsLoaded = this.postsLoaded + 3
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'es-MX'
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://www.verduzco.me/blog/'
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
            'https://storage.verduzco.dev/dotme/website/es/jesus-es-open-g.png'
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
          content: 'https://www.verduzco.me/blog/'
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
            'https://storage.verduzco.dev/dotme/website/es/jesus-es-open-g.png'
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
#article-content {
  padding: 20px;
}
.text-spacer {
  height: 25px;
}
.article-image {
  max-height: 200px;
}
#blog-section {
  margin-bottom: 35px;
}
.article-card {
  margin: 15px 15px 25px 15px !important;
}
#article-filter {
  margin: 0px 15px 0px 15px !important;
}
</style>
