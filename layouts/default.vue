<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link :to="localePath('index')" :title="$t('default.home')">
        <img
          src="https://storage.verduzco.me/dotme/website/landing/jesus.webp"
          alt="Jesús Verduzco"
          height="36"
        >
      </nuxt-link>
      <v-spacer />
      <v-btn icon :title="$t('default.theme')" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
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
            :title="$t('default.language')"
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
            :to="switchLocalePath(locale.code)"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-if="activeArticle">
          <v-list-item
            :to="$i18n.locale === 'es' ? '/en/blog/' + relatedArticle + '/' : '/es/blog/' + relatedArticle + '/'"
          >
            <v-list-item-title>{{ $i18n.locale === 'es' ? $t('default.read_en') : $t('default.read_es') }}</v-list-item-title>
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
            :title="$t('default.menu')"
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
          <v-subheader>{{ $t('default.navigation') }}</v-subheader>
          <v-list-item
            :title="$t('default.home_menu')"
            :to="localePath('index')"
            exact
          >
            <v-list-item-title>{{ $t('default.home_menu') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.blog')"
            :to="localePath('blog')"
          >
            <v-list-item-title>{{ $t('default.blog') }}</v-list-item-title>
          </v-list-item>
          <v-subheader>{{ $t('default.social') }}</v-subheader>
          <v-list-item
            :title="$t('default.twitter')"
            href="https://twitter.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('default.twitter') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.linkedin')"
            href="https://www.linkedin.com/in/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('default.linkedin') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.github')"
            href="https://github.com/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('default.github') }}</v-list-item-title>
          </v-list-item>
          <v-subheader>{{ $t('default.contact') }}</v-subheader>
          <v-list-item
            :title="$t('default.telegram')"
            href="ttps://t.me/jeverduzco"
            target="_blank"
          >
            <v-list-item-title>{{ $t('default.telegram') }}</v-list-item-title>
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
            <nuxt-link :class="this.$vuetify.theme.dark ? 'footer-links-dark' : 'footer-links-light'" :to="localePath('legal-cookies')" :title="$t('default.cookies')">
              {{ $t('default.cookies') }}
            </nuxt-link>
          &nbsp;
            <nuxt-link :class="this.$vuetify.theme.dark ? 'footer-links-dark' : 'footer-links-light'" :title="$t('default.privacy')" :to="localePath('legal-privacy')">
              {{ $t('default.privacy') }}
            </nuxt-link>
          &nbsp;
            <nuxt-link :class="this.$vuetify.theme.dark ? 'footer-links-dark' : 'footer-links-light'" :title="$t('default.notice')" :to="localePath('legal-notice')">
              {{ $t('default.notice') }}
            </nuxt-link>
          </p>
        </v-card>
        <cookie-law
          theme="dark-lime"
          button-text="Ok"
        >
          <div slot="message">
            {{ $t('default.cookiesMessage') }}
            <nuxt-link :title="$t('default.cookies')" :to="localePath('legal-cookies')">
              {{ $t('default.cookies') }}
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
      "The browser console is only for developers, if you are not clear about what you are doing; don't do it. Someone might steal your information."
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
.footer-links-light {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}
.footer-links-dark {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
