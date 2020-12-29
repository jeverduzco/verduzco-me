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
          {{ $t('devOps.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          {{ $t('devOps.text') }}
        </p>
        <div class="text-center text-md-left">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            href="https://t.me/jeverduzco"
            target="_blank"
            :title="$t('devOps.btn')"
          >
            {{ $t('devOps.btn') }}
          </v-btn>
        </div>
        <v-spacer class="elements-spacer" />
      </v-flex>
      <v-flex
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">{{ $t('devOps.cicd') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.versionControl') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.agileDevelopment') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="90"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.ifraestructureAsACode') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="87"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.configurationManagment') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('devOps.continuousMonitoring') }}</span>
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
