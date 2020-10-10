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
        <img id="charlas-image" src="https://storage.verduzco.dev/dotme/website/developer-activity-animate.svg" alt="¿Por qué lo hago?">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-right">
          ¿Por qué?
        </h1>
        <v-spacer class="elements-spacer" />
        <h2 class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          Mi propósito en la vida es ayudar al crecimiento de México. Ofreciendo software adaptado a la región y enseñando a usar la tecnología para crecer en los ámbitos personal y profesional.
        </h2>
        <div class="text-center text-md-right">
          <v-btn
            id="more-info"
            color="secondary"
            large
            rounded
            depressed
            href="https://youtube.com/c/Jes%C3%BAsVerduzco"
            target="_blank"
            title="Suscríbete en Youtube"
          >
            Suscríbete en YouTube
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
  max-width: 100%;
}
.elements-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
