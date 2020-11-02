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
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">{{ $t('others.elementOne') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('others.elementTwo') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="85"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('others.elementThree') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="83"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('others.elementFour') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="84"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('others.elementFive') }}</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">{{ $t('others.elementSix') }}</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="92"
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
        <h2 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-right">
          {{ $t('others.title') }}
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          {{ $t('others.description') }}
        </p>
        <v-spacer class="elements-spacer" />
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
