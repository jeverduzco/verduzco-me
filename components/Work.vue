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
        v-if="$vuetify.breakpoint.mdAndUp"
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img class="section-image" src="https://storage.verduzco.dev/dotme/website/landing/work.png" :alt="$t('work.title')">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h2 class="text-lg-h2 text-md-h2 text-h3 text-center text-md-right">
          ¿De dónde soy?
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          Soy ciudadano del universo, mi oficina es internet, mi pasaporte es mexicano y mi infraestructura es la nube.
        </p>
        <div class="text-center text-md-right">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            href="https://www.verduzco.dev/"
            target="_blank"
            nuxt
            title="Conoce mi empresa"
          >
            Conoce mi empresa
          </v-btn>
        </div>
        <v-spacer class="elements-spacer" />
      </v-flex>
      <v-flex
        v-if="$vuetify.breakpoint.smAndDown"
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img class="section-image" src="https://storage.verduzco.dev/dotme/website/landing/work.png" alt="¿De dónde soy?">
      </v-flex>
    </v-layout>
  </v-container>
</template>
