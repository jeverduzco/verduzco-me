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
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-left">
          ¿Qué hago?
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          Consultoría independiente en Desarrollo Web, Computación en la Nube, DevOps y otras cosas geniales.
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
        <img class="section-image" src="https://storage.verduzco.me/dotme/website/landing/whatido.webp" alt="¿Qué hago?">
      </v-flex>
    </v-layout>
  </v-container>
</template>
