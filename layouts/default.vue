<template>
  <v-app>
    <v-app-bar flat fixed app>
      <nuxt-link :to="localePath('index')" :title="$t('default.home')">
        <img
          src="https://storage.verduzco.me/dotme/website/favicon-128.png"
          alt="Jesús Verduzco"
          height="36"
        />
      </nuxt-link>
      <v-spacer />
      <v-btn
        icon
        :title="$t('default.theme')"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <!-- Start language button -->
      <v-menu bottom origin="center center" transition="scale-transition">
        <template #activator="{ on }">
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
      <v-menu bottom left>
        <template #activator="{ on, attrs }">
          <v-btn
            :title="$t('default.menu')"
            icon
            v-bind="attrs"
            v-on="on"
            @click="$appInsights.trackEvent({ name: 'open-navigation' })"
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
          <v-subheader>{{ $t('default.social') }}</v-subheader>
          <v-list-item
            :title="$t('default.twitter')"
            href="https://twitter.com/soy_jeshu"
            target="_blank"
            @click="$appInsights.trackEvent({ name: 'go-to-twitter' })"
          >
            <v-list-item-title>{{ $t('default.twitter') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.linkedin')"
            href="https://www.linkedin.com/in/soy-jeshu"
            target="_blank"
            @click="$appInsights.trackEvent({ name: 'go-to-linkedin' })"
          >
            <v-list-item-title>{{ $t('default.linkedin') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.twitch')"
            href="https://www.twitch.tv/soy_jeshu"
            target="_blank"
            @click="$appInsights.trackEvent({ name: 'go-to-twitch' })"
          >
            <v-list-item-title>{{ $t('default.twitch') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.github')"
            href="https://github.com/jeverduzco"
            target="_blank"
            @click="$appInsights.trackEvent({ name: 'go-to-github' })"
          >
            <v-list-item-title>{{ $t('default.github') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            :title="$t('default.youtube')"
            href="https://www.youtube.com/channel/UCLS-IeTV50b7yBYytRcsi2Q"
            target="_blank"
            @click="$appInsights.trackEvent({ name: 'go-to-youtube' })"
          >
            <v-list-item-title>{{ $t('default.youtube') }}</v-list-item-title>
          </v-list-item>
          <v-subheader>{{ $t('default.contact') }}</v-subheader>
          <v-list-item
            :title="$t('default.telegram')"
            href="https://t.me/soy_jeshu"
            target="_blank"
            @click="$appInsights.trackEvent({ name: 'go-to-telegram' })"
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
            &copy; {{ new Date().getFullYear() }} JESÚS VERDUZCO <br />
            <nuxt-link
              :class="
                $vuetify.theme.dark ? 'footer-links-dark' : 'footer-links-light'
              "
              :to="localePath('legal-cookies')"
              :title="$t('default.cookies')"
            >
              {{ $t('default.cookies') }}
            </nuxt-link>
            &nbsp;
            <nuxt-link
              :class="
                $vuetify.theme.dark ? 'footer-links-dark' : 'footer-links-light'
              "
              :title="$t('default.privacy')"
              :to="localePath('legal-privacy')"
            >
              {{ $t('default.privacy') }}
            </nuxt-link>
            &nbsp;
            <nuxt-link
              :class="
                $vuetify.theme.dark ? 'footer-links-dark' : 'footer-links-light'
              "
              :title="$t('default.notice')"
              :to="localePath('legal-notice')"
            >
              {{ $t('default.notice') }}
            </nuxt-link>
          </p>
        </v-card>
        <cookie-law theme="dark-lime" button-text="Ok">
          <div slot="message">
            {{ $t('default.cookiesMessage') }}
            <nuxt-link
              :title="$t('default.cookies')"
              :to="localePath('legal-cookies')"
            >
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
      relatedArticle: '',
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
    },
  },
  // Listening events
  created() {
    this.$nuxt.$on('related-article', (value) => {
      this.relatedArticle = value
    })
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(
      '%cStop!',
      'color: red; font-size: 30px; font-weight: bold;',
      "The browser console is only for developers, if you are not clear about what you are doing; don't do it. Someone might steal your information."
    )
  },
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
