<template>
  <v-app>
    <v-app-bar flat fixed app>
      <img
        src="https://storage.verduzco.dev/dotme/website/perfil-menu.png"
        alt="Jesús Verduzco"
      >
      <v-spacer />
      <v-btn
        class="menu-button"
        icon
        title="Mi LinkedIn"
        href="https://www.linkedin.com/in/verduzco-dev"
        target="_blank"
      >
        <v-icon>fab fa-linkedin-in</v-icon>
      </v-btn>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>invert_colors</v-icon>
      </v-btn>
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
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Verduzco.Me'
    }
  }
}
</script>
<style lang="css" scoped>
#copyright {
  padding-top: 10px;
}
</style>
