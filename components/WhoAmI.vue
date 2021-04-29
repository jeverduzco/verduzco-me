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
        v-if="$vuetify.breakpoint.mdAndUp"
        class="text-center text-md-left"
        xs12
        sm12
        md6
        lg6
      >
        <img class="section-image" src="https://storage.verduzco.me/dotme/website/landing/whoiam.webp" :alt="$t('whoAmI.title')">
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-right">
          {{ $t('whoAmI.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          {{ $t('whoAmI.text') }}
        </p>
        <div class="text-center text-md-right">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            href="http://linkedin.verduzco.me/"
            target="_blank"
            :title="$t('whoAmI.btn')"
            @click="$appInsights.trackEvent({ name: 'open-linkedin-from-home' })"
          >
            {{ $t('whoAmI.btn') }}
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
        <img class="section-image" src="https://storage.verduzco.me/dotme/website/landing/whoiam.webp" :alt="$t('whoAmI.title')">
      </v-flex>
    </v-layout>
  </v-container>
</template>
