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
        <img id="ideas-image" src="https://storage.verduzco.dev/dotme/website/blogging.svg" alt="Blog">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-right">
          ¿Quién soy?
        </h1>
        <v-spacer class="elements-spacer" />
        <h2 class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          Soy Jesús Verduzco, un ingeniero de DevOps que nunca para de aprender. Me gusta compartir lo que pienso y lo que sé: para ayudar a convertir este mundo en uno mejor para todas y todos.
        </h2>
        <div class="text-center text-md-right">
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
            Navega por mi blog
          </v-btn>
        </div>
        <v-spacer class="elements-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#ideas-image {
  max-height: 500px;
  max-width: 100%;
}
.elements-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
