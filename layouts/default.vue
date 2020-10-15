<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link to="/">
        <img
          src="https://storage.verduzco.dev/dotme/website/icon-n-128.png"
          alt="Jesús Verduzco"
          height="36"
        >
      </nuxt-link>
      <v-spacer />
      <v-btn icon to="/" nuxt title="Inicio" active-class="no-active">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon to="/blog/" nuxt title="Blog" active-class="no-active">
        <v-icon>article</v-icon>
      </v-btn>
      <v-btn icon title="Cambiar Tema" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
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
        <v-list>
          <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
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
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            title="Mi Linkedin"
            href="https://www.linkedin.com/in/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>Mi Linkedin</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Mi Twitter"
            href="https://twitter.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>Mi Twitter</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Mi Twitch"
            href="https://www.youtube.com/channel/UCLS-IeTV50b7yBYytRcsi2Q"
            target="_blank"
          >
            <v-list-item-title>Mi YouTube</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Mi Github"
            href="https://github.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>Mi Github</v-list-item-title>
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
      title: 'Verduzco.Me'
    }
  },
  mounted() {
    // Change theme automatically
    this.changeTheme()
    // eslint-disable-next-line no-console
    console.log(
      '%cEspera!',
      'color: red; font-size: 30px; font-weight: bold;',
      'La consola del navegador está pensada solo para desarrolladores, si no tienes claro lo que estás haciendo; no lo hagas. Alguien podría robar tu información.'
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
