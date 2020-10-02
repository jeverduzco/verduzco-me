<template>
  <v-container
    grid-list-xl
    class="content-container"
  >
    <v-layout
      wrap
      row
      align-center
    >
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          v-model="searchQuery"
          label="Búscar artículos"
          color="secondary"
          outlined
          class="article-list"
        />
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-list v-if="blog.length" :color="$vuetify.theme.dark ? 'grey darken-3' : 'blue-grey lighten-5'" rounded class="article-list">
          <template
            v-for="(article, index) of blog"
          >
            <v-list-item :key="article.slug" two-line :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <v-list-item-avatar>
                <v-icon
                  :class="$vuetify.theme.dark ? 'blue-grey white--text' : 'grey darken-3 white--text'"
                >
                  article
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="article.title" />
              </v-list-item-content>
            </v-list-item>
            <v-divider
              v-if="index + 1 < blog.length"
              :key="`divider-${index}`"
            />
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      blog: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.blog = []
        return
      }
      this.blog = await this.$content('blog')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
<style lang="css" scoped>
.article-list {
  margin: 0px 15px 0px 15px !important;
} 
</style>
