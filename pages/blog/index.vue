<template>
  <div>
    Ideas
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
