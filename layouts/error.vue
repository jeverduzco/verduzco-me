<template>
  <v-app dark>
    <div v-if="error.statusCode === 404" class="text-center">
      <h1 class="text-h3 error-item">
        😱
      </h1>
      <img width="350" src="https://storage.verduzco.me/dotme/website/landing/error-404.png" alt="Error 404">
      <v-divider />
      <v-btn
        class="error-item"
        color="secondary"
        large
        rounded
        depressed
        :to="localePath('index')"
      >
        {{ $t('error.goToHome') }}
      </v-btn>
    </div>
    <div v-else class="text-center">
      <h1 class="text-h3 error-item">
        😱
      </h1>
      <p class="error-item">
        <b>{{ $t('error.error') }}</b>
      </p>
      <p class="error-item">
        {{ $t('error.text') }}
      </p>
      <img width="350" src="https://storage.verduzco.me/dotme/website/landing/error.png" alt="Error">
      <v-divider />
      <v-btn
        class="error-item"
        color="secondary"
        large
        rounded
        depressed
        :to="localePath('index')"
      >
        {{ $t('error.goToHome') }}
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound:
        this.$i18n.locale === 'en'
          ? '404 NOT FOUND'
          : '404 PÁGINA NO ENCONTRADA',
      otherError:
        this.$i18n.locale === 'en'
          ? 'AN ERROR OCCURRED'
          : 'HA OCURRIDO UN ERROR'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.error-item {
  margin-top: 35px;
}
</style>
