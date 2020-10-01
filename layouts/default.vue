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
      <v-btn icon to="/blog/" nuxt title="Ideas" active-class="no-active">
        <v-icon>emoji_objects</v-icon>
      </v-btn>
      <v-btn icon title="Cambiar Tema" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>invert_colors</v-icon>
      </v-btn>
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
            href="https://youtube.com/c/Jes%C3%BAsVerduzco"
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
