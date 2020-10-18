<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link :to="localePath('/') + '/'" :title="$t('menu.home')">
        <img
          src="https://storage.verduzco.dev/dotme/website/icon-n-128.png"
          alt="Jesús Verduzco"
          height="36"
        >
      </nuxt-link>
      <v-spacer />
      <v-btn icon :to="localePath('/') + '/'" nuxt :title="$t('menu.home')" active-class="no-active">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon :to="localePath('blog') + '/'" nuxt :title="$t('menu.blog')" active-class="no-active">
        <v-icon>article</v-icon>
      </v-btn>
      <v-btn icon :title="$t('menu.theme')" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <!-- Start language button -->
      <v-menu
        bottom
        origin="center center"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            class="menu-button"
            :title="$t('menu.language')"
            icon
            v-on="on"
            @click="$appInsights.trackEvent({ name: 'change-language' })"
          >
            <v-icon>translate</v-icon>
          </v-btn>
        </template>
        <v-list v-if="!activeArticle">
          <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code) + '/'"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-if="activeArticle">
          <v-list-item
            :to="$i18n.locale === 'es' ? '/en/blog/' + relatedArticle + '/' : '/es/blog/' + relatedArticle + '/'"
          >
            <v-list-item-title>{{ $i18n.locale === 'es' ? 'Read in English' : 'Leer en Español' }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- End language button -->
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :title="$t('menu.more')"
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            :title="$t('menu.linkedin')"
            href="https://www.linkedin.com/in/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('menu.linkedin') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('menu.twitter')"
            href="https://twitter.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('menu.twitter') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('menu.github')"
            href="https://github.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('menu.github') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer absolute app height="auto">
      <v-card class="flex" flat tile color="transparent">
        <p id="copyright" class="text-center caption">
          &copy; {{ new Date().getFullYear() }} JESÚS VERDUZCO
        </p>
      </v-card>
    </v-footer>
    <Telegram />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Verduzco.Me',
      relatedArticle: ''
    }
  },
  computed: {
    activeArticle() {
      if (
        this.$route.matched.some(({ name }) => name === 'blog-slug___es') ||
        this.$route.matched.some(({ name }) => name === 'blog-slug___en')
      ) {
        return true
      } else {
        return false
      }
    }
  },
  // Listening events
  created() {
    this.$nuxt.$on('related-article', value => {
      this.relatedArticle = value
    })
  },
  mounted() {
    // Change theme automatically
    this.changeTheme()
    // eslint-disable-next-line no-console
    console.log(
      '%cStop!',
      'color: red; font-size: 30px; font-weight: bold;',
      'The browser console is intended only for developers, if you are not clear about what you are doing; do not do it. Someone might steal your information.'
    )
  },
  methods: {
    // Change theme automatically
    changeTheme() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.dark = true
      }
    }
  }
}
</script>
<style lang="css" scoped>
#copyright {
  padding-top: 10px;
}
</style>
