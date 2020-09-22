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
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img id="saas-image" src="https://storage.verduzco.dev/dotme/website/blogging.svg" alt="Blog">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h1 class="text-lg-h1 text-md-h2 text-h3">
          Mi Ideas
        </h1>
        <v-spacer class="elements-spacer" />
        <h2 class="text-lg-h5 text-md-h5 text-body-1">
          Escribir y compartir mis ideas es mi pasatiempo, en mi blog hablo desde cómo codificar algo hasta un libro interesante, es así de diverso.
        </h2>
        <v-btn
          id="more-info"
          color="secondary"
          large
          rounded
          depressed
          to="/blog/"
          nuxt
          title="Leer ideas"
        >
          Ver mis ideas
        </v-btn>
        <v-spacer class="elements-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#saas-image {
  max-width: 100%;
  height: auto;
}
.elements-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
