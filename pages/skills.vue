<template>
  <div id="skills-page">
    <!-- start page content -->
    <section id="skills-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <SkillsWelcome />
      <Waves />
    </section>
    <section id="skills-development">
      <Development />
      <WavesSecondary />
    </section>
    <section id="skills-devops" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <DevOps />
      <Waves />
    </section>
    <section id="skills-others">
      <Others />
      <WavesSecondary />
    </section>
    <!-- End page content -->
  </div>
</template>

<script>
export default {
  name: 'Skills',
  nuxtI18n: {
    paths: {
      es: '/habilidades/',
      en: '/skills/'
    }
  },
  data() {
    return {
      title: this.$t('skills.title'),
      description: this.$t('skills.description')
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX'
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href:
            this.$i18n.locale === 'en'
              ? 'https://verduzco.me/en/skills/'
              : 'https://verduzco.me/es/habilidades/'
        },
        {
          rel: 'alternate',
          hreflang: this.$i18n.locale === 'en' ? 'es-MX' : 'en-US',
          href:
            this.$i18n.locale === 'en'
              ? 'https://verduzco.me/es/habilidades/'
              : 'https://verduzco.me/en/skills/'
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:description',
          content: this.description
        },
        {
          property: 'og:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/skills_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/skills_es.png'
        },
        {
          property: 'og:locale',
          content: this.$i18n.locale === 'en' ? 'en-US' : 'es-MX'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content:
            this.$i18n.locale === 'en'
              ? 'https://verduzco.me/en/skills/'
              : 'https://verduzco.me/es/habilidades/'
        },
        {
          property: 'og:site_name',
          content: this.title
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:width',
          content: '630'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:description',
          content: this.description
        },
        {
          name: 'twitter:title',
          content: this.title
        },
        {
          name: 'twitter:image',
          content:
            this.$i18n.locale === 'en'
              ? 'https://storage.verduzco.me/dotme/website/seo/skills_en.png'
              : 'https://storage.verduzco.me/dotme/website/seo/skills_es.png'
        }
      ]
    }
  }
}
</script>
