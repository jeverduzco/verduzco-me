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
      <v-flex xs12 sm12 md6 lg6>
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-left">
          {{ title }}
        </h1>
      </v-flex>
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img id="article-image" src="https://storage.verduzco.dev/dotme/website/agreement-animate.svg" :alt="title">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
#article-image {
  max-height: 500px;
  max-width: 100%;
}
#text-spacer {
  height: 25px;
}
</style>
