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
        class="text-left"
        xs12
        sm12
        md6
        lg6
      >
        <h2 class="text-lg-h2 text-md-h2 text-h3 text-center text-md-left">
          ¿Qué hago?
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          Me gusta el juego del emprendimiento, obviamente, hago lo que sea necesario hacer y cuando haya que hacerlo.
        </p>
        <div class="text-center text-md-left">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            to="/habilidades/"
            nuxt
            title="Conoce mis habilidades"
          >
            Conoce mis habilidades
          </v-btn>
        </div>
      </v-flex>
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img class="section-image" src="https://storage.verduzco.dev/dotme/website/landing/whatido.png" alt="¿Qué hago?">
      </v-flex>
    </v-layout>
  </v-container>
</template>
