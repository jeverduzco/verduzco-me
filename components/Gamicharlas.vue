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
        <img id="charlas-image" src="https://storage.verduzco.dev/dotme/website/gamer.svg" alt="Gamicharlas">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-right">
          Gamicharlas
        </h1>
        <v-spacer class="elements-spacer" />
        <h2 class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          ¿Te gusta aprender y jugar videojuegos? Acompáñame a las 09:00 PM UTC-5 en las Gamicharlas. Un <i>Streaming</i> donde aprendemos juntos sobre tecnología, crecimiento personal y mucho más.
        </h2>
        <div class="text-center text-md-right">
          <v-btn
            id="more-info"
            color="secondary"
            large
            rounded
            depressed
            href="https://www.twitch.tv/jeverduzco"
            target="_blank"
            title="Leer ideas"
          >
            Sígueme en Twitch
          </v-btn>
        </div>
        <v-spacer class="elements-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#charlas-image {
  max-height: 450px;
}
.elements-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
