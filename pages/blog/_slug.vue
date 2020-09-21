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
      <v-flex>
        <article>
          <nuxt-content :document="article" />
        </article>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>
