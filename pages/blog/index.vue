<template>
  <div id="blog-page">
    <section id="blog-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <BlogWelcome />
      <Waves />
    </section>
    <section id="blog-section">
      <v-container
        grid-list-xl
        class="content-container"
      >
        <AppSearchInput />
      </v-container>
      <v-container
        grid-list-xl
        class="content-container"
      >
        <v-chip-group
          id="article-filter"
          v-model="activeTag"
          color="secondary"
          show-arrows
        >
          <v-chip
            v-for="tag in tags"
            :key="tag.index"
            :value="tag.slug"
            filter
          >
            {{ $i18n.locale === 'en' ? tag.name : tag.name_es }}
          </v-chip>
        </v-chip-group>
      </v-container>
      <v-container grid-list-md>
        <v-layout
          wrap
          row
          align-center
        >
          <v-flex
            v-for="article of blogFiltered.slice(0, postsLoaded)"
            :key="article.slug"
            xs12
            sm12
            md6
            lg4
          >
            <v-card
              class="article-card text-center"
              nuxt
              :to="localePath('blog') + article.slug + '/'"
              flat
              :color="$vuetify.theme.dark ? 'grey darken-3' : 'blue-grey lighten-5'"
            >
              <h2 class="article-title">
                {{ article.title }}
              </h2>
              <v-spacer class="text-spacer" />
              <h2 class="text-subtitle-1">
                {{ article.description }}
              </h2>
              <v-spacer class="text-spacer" />
              <p class="text-caption text-uppercase">
                {{ formatDate(article.createdAt) }} <br>{{ article.category_name }}
              </p>
            
              <div>
                <img
                  class="article-image"
                  :src="article.img"
                  :alt="article.title"
                >
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <div class="text-center">
          <v-btn
            v-if="postsLoaded <= blogFiltered.length"
            color="secondary"
            rounded
            large
            depressed
            :title="$t('blogIndex.loadMore')"
            @click="loadMore"
          >
            {{ $t('blogIndex.loadMore') }}
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
  nuxtI18n: {
    paths: {
      es: '/blog/',
      en: '/blog/'
    }
  },
  data() {
    return {
      title: 'My Blog',
      postsLoaded: 6,
      description:
        'Here I write what I think, share what I know and give back to the internet a little bit of what it has given me.',
      activeTag: 'all',
      tags: [
        {
          name: 'VIEW ALL',
          name_es: 'VER TODO',
          slug: 'all'
        },
        {
          name: 'DEVOPS',
          name_es: 'DEVOPS',
          slug: 'dev-ops'
        },
        {
          name: 'WEB DEVELOPMENT',
          name_es: 'DESARROLLO WEB',
          slug: 'web-development'
        },
        {
          name: 'CLOUD COMPUTING',
          name_es: 'COMPUTACIÓN EN LA NUBE',
          slug: 'cloud-computing'
        },
        {
          name: 'TRENDS',
          name_es: 'TENDENCIAS',
          slug: 'trends'
        },
        {
          name: 'SOFTWARE',
          name_es: 'SOFTWARE',
          slug: 'software'
        },
        {
          name: 'EDUCATION',
          name_es: 'EDUCACIÓN',
          slug: 'education'
        },
        {
          name: 'OPINION',
          name_es: 'OPINIÓN',
          slug: 'opinion'
        },
        {
          name: 'BUSINESS',
          name_es: 'NEGOCIOS',
          slug: 'business'
        },
        {
          name: 'MARKETING',
          name_es: 'MARKETING',
          slug: 'marketing'
        },
        {
          name: 'BOOKS',
          name_es: 'LIBROS',
          slug: 'books'
        },
        {
          name: 'OTHER TOPICS',
          name_es: 'OTROS TEMAS',
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
          return item.category_id.includes(this.activeTag)
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
  async asyncData({ $content, app, params }) {
    const blog = await $content(`${app.i18n.locale}/blog`, params.slug)
      .only([
        'title',
        'description',
        'img',
        'slug',
        'category_id',
        'category_name',
        'createdAt'
      ])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      blog
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(this.$i18n.locale, options)
    },
    loadMore() {
      this.postsLoaded = this.postsLoaded + 3
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en-us'
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://verduzco.me/blog/'
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
          content: 'https://verduzco.me/blog/'
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
<style scoped>
.text-spacer {
  height: 25px;
}
.article-image {
  max-height: 200px;
}
.article-title {
  font-size: 1.6rem !important;
  font-weight: 300;
  line-height: 2rem;
  letter-spacing: -0.0083333333em !important;
  font-family: 'Roboto', sans-serif !important;
}
#blog-section {
  margin-bottom: 35px;
}
.article-card {
  padding: 15px 15px 25px 15px !important;
}
#article-filter {
  margin: 0px 15px 0px 15px !important;
  padding: 0px 0px 15px 0px;
}
</style>
