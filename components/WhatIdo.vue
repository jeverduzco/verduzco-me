<template>
  <v-container
    grid-list-xl
    class="content-container"
  >
    <v-layout
      class="section-content"
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
          {{ $t('whatIDo.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          {{ $t('whatIDo.text') }}
        </p>
        <div class="text-center text-md-left">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            :to="localePath('skills')"
            nuxt
            :title="$t('whatIDo.btn')"
          >
            {{ $t('whatIDo.btn') }}
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
        <img class="section-image" src="https://storage.verduzco.me/dotme/website/landing/whatido.webp" :alt="$t('whatIDo.title')">
      </v-flex>
    </v-layout>
  </v-container>
</template>
