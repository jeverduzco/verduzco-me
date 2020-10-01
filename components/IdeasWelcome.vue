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
          Mis Ideas
        </h1>
        <v-spacer id="text-spacer" />
        <h2 class="text-lg-h5 text-md-h5 text-h5 text-center text-md-left">
          Te presento a mi baúl de ideas. Aquí encontrarás lo que decido compartir. Espero que lo disfrutes tanto como yo disfruto escribiéndolo y, además, que aprendas algo nuevo.
        </h2>
      </v-flex>
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img id="ideas-welcome-image" src="https://storage.verduzco.dev/dotme/website/blogging.svg" alt="Mi Ideas">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#ideas-welcome-image {
  max-height: 500px;
}
#text-spacer {
  height: 25px;
}
</style>
