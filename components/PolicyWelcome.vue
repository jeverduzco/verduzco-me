<template>
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
      <v-flex xs12 sm12 md6 lg6>
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-left">
          {{ title }}
        </h1>
      </v-flex>
      <v-flex
        class="text-center text-md-right"
        xs12
        sm12
        md6
        lg6
      >
        <img class="section-image" src="https://storage.verduzco.me/dotme/website/landing/document.webp" :alt="title">
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
