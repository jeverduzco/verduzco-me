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
          Jesús Verduzco
        </h1>
        <v-spacer id="text-spacer" />
        <p class="text-lg-h4 text-md-h4 text-h5 text-center text-md-left">
          {{ $t('welcome.slogan') }}
        </p>
      </v-flex>
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img id="welcome-image-profile" src="https://storage.verduzco.dev/dotme/website/jesus-verduzco-p.png" alt="Jesús Verduzco">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#welcome-image-profile {
  max-height: 450px;
  max-width: 100%;
}
#text-spacer {
  height: 25px;
}
</style>
