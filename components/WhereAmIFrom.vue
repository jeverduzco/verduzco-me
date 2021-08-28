<template>
  <v-container grid-list-xl class="content-container">
    <v-layout class="section-content" wrap row align-center>
      <v-flex
        v-if="$vuetify.breakpoint.mdAndUp"
        class="text-center text-md-left"
        xs12
        sm12
        md6
        lg6
      >
        <img
          class="section-image"
          src="https://storage.verduzco.me/dotme/website/landing/work.webp"
          :alt="$t('whereAmIFrom.title')"
        />
      </v-flex>
      <v-flex class="text-right" xs12 sm12 md6 lg6>
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-right">
          {{ $t('whereAmIFrom.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          {{ $t('whereAmIFrom.text') }}
        </p>
        <div class="text-center text-md-right">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            :to="localePath('twitch')"
            :title="$t('default.twitch')"
            @click="$appInsights.trackEvent({ name: 'open-twitch-from-home' })"
          >
            {{ $t('whereAmIFrom.btn') }}
          </v-btn>
        </div>
        <v-spacer class="elements-spacer" />
      </v-flex>
      <v-flex
        v-if="$vuetify.breakpoint.smAndDown"
        class="text-center text-md-left"
        xs12
        sm12
        md6
        lg6
      >
        <img
          class="section-image"
          src="https://storage.verduzco.me/dotme/website/landing/work.webp"
          :alt="$t('whereAmIFrom.title')"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
