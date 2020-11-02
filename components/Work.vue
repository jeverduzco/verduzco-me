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
        <h2 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-right">
          {{ $t('work.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          {{ $t('work.description') }}
        </p>
        <div class="text-center text-md-right">
          <v-btn
            id="more-info"
            color="secondary"
            large
            rounded
            depressed
            href="https://www.verduzco.dev/"
            target="_blank"
            nuxt
            :title="$t('work.button')"
          >
            {{ $t('work.button') }}
          </v-btn>
        </div>
        <v-spacer class="elements-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
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
