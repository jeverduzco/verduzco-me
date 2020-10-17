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
        <h2 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-left">
          {{ $t('whatido.title') }}
        </h2>
        <v-spacer id="text-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          {{ $t('whatido.description') }}
        </p>
        <div class="text-center text-md-left">
          <v-btn
            id="more-info"
            color="secondary"
            large
            rounded
            depressed
            href="https://www.verduzco.dev/"
            target="_blank"
            :title="$t('whatido.button')"
          >
            {{ $t('whatido.button') }}
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
        <img id="code-image" src="https://storage.verduzco.dev/dotme/website/programming-animate.svg" alt="Mi Trabajo">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#code-image {
  max-height: 500px;
  max-width: 100%;
}
#text-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
