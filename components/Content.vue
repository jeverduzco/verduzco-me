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
        <img id="tech-image" src="https://storage.verduzco.dev/website/main/blog.svg" alt="Contenido de Jesús Verduzco">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h1 class="text-lg-h1 text-md-h2 text-h3">
          Mis Ideas
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
          href="https://www.linkedin.com/in/verduzco-dev/detail/recent-activity/"
          title="Visitar LinkedIn"
        >
          Ver contenido en LinkedIn
        </v-btn>
        <v-spacer class="elements-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#tech-image {
  max-width: 95%;
  height: auto;
}
.elements-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
