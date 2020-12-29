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
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">{{ $t('development.front') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.back') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="97"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.auth') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.frameworks') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.api') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.dataBases') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="95"
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
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-right">
          {{ $t('development.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          {{ $t('development.text') }}
        </p>
        <div class="text-center text-md-right">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            href="https://t.me/jeverduzco"
            target="_blank"
            :title="$t('development.btn')"
          >
            {{ $t('development.btn') }}
          </v-btn>
        </div>
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
        <span class="overline">{{ $t('development.front') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.back') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="97"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.auth') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.frameworks') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.api') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('development.dataBases') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="section-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.elements-spacer {
  height: 25px;
}
.progress-spacer {
  height: 10px;
}
.section-spacer {
  height: 35px;
}
</style>
