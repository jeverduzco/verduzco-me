<template>
  <div id="skills-page">
    <!-- start page content -->
    <section id="skills-welcome" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <SkillsWelcome />
      <Waves />
    </section>
    <section id="skills-devops">
      <DevOps />
      <WavesSecondary />
    </section>
    <section id="skills-development" :class="this.$vuetify.theme.dark ? 'primary-background-dark' : 'primary-background'">
      <Development />
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
  data() {
    return {
      title: 'Mis Habilidades',
      description:
        'Nunca parar de aprender me ha permitido saber de DevOps, Software, Marketing y otras cosas.'
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'es-MX'
      },
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://verduzco.me/habilidades/'
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
            'https://storage.verduzco.me/dotme/website/es/jesus-es-open-g.png'
        },
        {
          property: 'og:locale',
          content: 'es-MX'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://verduzco.me/habilidades/'
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
            'https://storage.verduzco.me/dotme/website/es/jesus-es-open-g.png'
        },
        {
          name: 'twitter:site',
          content: '@jeverduzco'
        }
      ]
    }
  }
}
</script>
