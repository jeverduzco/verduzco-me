<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link to="/" title="Inicio">
        <img
          src="https://storage.verduzco.dev/dotme/website/landing/jesus.webp"
          alt="Jesús Verduzco"
          height="36"
        >
      </nuxt-link>
      <v-spacer />
      <v-btn icon title="Tema" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            title="Más"
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list
          width="250"
          shaped
          style="max-height: 95vh"
          class="overflow-y-auto"
        >
          <v-subheader>NAVEGACIÓN</v-subheader>
          <v-list-item
            title="Inicio"
            to="/"
            exact
          >
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Blog"
            to="/blog/"
          >
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Habilidades"
            to="/habilidades/"
          >
            <v-list-item-title>Habilidades</v-list-item-title>
          </v-list-item>
          <v-subheader>REDES SOCIALES</v-subheader>
          <v-list-item
            title="LinkedIn"
            href="https://www.linkedin.com/in/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>LinkedIn</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Twitter"
            href="https://twitter.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>Twitter</v-list-item-title>
          </v-list-item>
          <v-list-item
            title="Github"
            href="https://github.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>Github</v-list-item-title>
          </v-list-item>
          <v-subheader>CONTACTO</v-subheader>
          <v-list-item
            title="Telegram"
            href="ttps://t.me/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>Telegram</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <client-only>
      <v-footer absolute app height="auto">
        <v-card class="flex" flat tile color="transparent">
          <p id="copyright" class="text-center caption">
            &copy; {{ new Date().getFullYear() }} JESÚS VERDUZCO <br>
            <nuxt-link :class="this.$vuetify.theme.dark ? 'footerLinksD' : 'footerLinksL'" to="/legal/cookies/" title="Política de cookies">
              Política de cookies
            </nuxt-link>
          &nbsp;
            <nuxt-link :class="this.$vuetify.theme.dark ? 'footerLinksD' : 'footerLinksL'" title="Política de privacidad" to="/legal/privacidad/">
              Política de privacidad
            </nuxt-link>
          &nbsp;
            <nuxt-link :class="this.$vuetify.theme.dark ? 'footerLinksD' : 'footerLinksL'" title="Aviso Legal" to="/legal/aviso/">
              Aviso Legal
            </nuxt-link>
          </p>
        </v-card>
        <cookie-law
          theme="dark-lime"
          button-text="Aceptar"
        >
          <div slot="message">
            Este sitio usa 🍪 (cookies) de las que no se comen.
            <nuxt-link title="Política de cookies" to="/legal/cookies/">
              Política de cookies
            </nuxt-link>
          </div>
        </cookie-law>
      </v-footer>
    </client-only>
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
      '%cAlto!',
      'color: red; font-size: 30px; font-weight: bold;',
      'La consola del navegador está destinada únicamente a los desarrolladores, si no tienes claro lo que estás haciendo; no lo hagas. Alguien podría robar tu información.'
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
.footerLinksL {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}
.footerLinksD {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
