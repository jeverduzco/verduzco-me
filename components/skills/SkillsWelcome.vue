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
      <v-flex xs12 sm12 md6 lg6>
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-left">
          {{ $t('skillsWelcome.title') }}
        </h1>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h4 text-md-h4 text-h5 text-center text-md-left">
          {{ $t('skillsWelcome.text') }}
        </p>
      </v-flex>
      <v-flex
        class="text-center text-md-right"
        xs12
        sm12
        md6
        lg6
      >
        <img class="section-image" src="https://storage.verduzco.me/dotme/website/landing/whoiam.webp" :alt="$t('skillsWelcome.title')">
      </v-flex>
    </v-layout>
  </v-container>
</template>
