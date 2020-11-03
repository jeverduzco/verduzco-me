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
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">{{ $t('devOps.elementOne') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementTwo') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementThree') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="90"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementFour') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="87"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementFive') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementSix') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="section-spacer" />
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h2 class="text-lg-h2 text-md-h2 text-h3 text-center text-md-right">
          {{ $t('devOps.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          {{ $t('devOps.description') }}
        </p>
        <v-spacer class="elements-spacer" />
      </v-flex>
      <v-flex
        v-if="$vuetify.breakpoint.smAndDown"
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">{{ $t('devOps.elementOne') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementTwo') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementThree') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="90"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementFour') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="87"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementFive') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.elementSix') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="section-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.progress-spacer {
  height: 10px;
}
.section-spacer {
  height: 35px;
}
</style>
