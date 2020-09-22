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
        <h1 class="text-h4 text-center text-md-left">
          {{ title }}
        </h1>
        <p class="text-overline text-center text-md-left">
          {{ formatDate(date) }}
        </p>
        <v-spacer id="text-spacer" />
      </v-flex>
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img id="welcome-image" :src="img" alt="Jesús Verduzco">
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
    },
    img: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    }
  }
}
</script>
<style>
#welcome-image {
  max-width: 95%;
  height: auto;
}
#text-spacer {
  height: 25px;
}
</style>
