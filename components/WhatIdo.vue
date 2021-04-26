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
            href="https://treintaytres.uno/"
            target="_blank"
            :title="$t('whatIDo.btn')"
            @click="$appInsights.trackEvent({ name: 'open-33.1-website' })"
          >
            {{ $t('whatIDo.btn') }}
          </v-btn>
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            href="https://prenlu.com/"
            target="_blank"
            :title="$t('whatIDo.btnPrenlu')"
            @click="$appInsights.trackEvent({ name: 'open-prenlu-website' })"
          >
            {{ $t('whatIDo.btnPrenlu') }}
          </v-btn>
        </div>
      </v-flex>
      <v-flex
        class="text-center text-md-right"
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
