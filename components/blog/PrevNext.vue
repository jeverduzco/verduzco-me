<template>
  <v-container
    grid-list-xl
    class="content-container"
  >
    <v-layout
      wrap
      row
      align-center
    >
      <v-flex xs12 md6>
        <v-card
          v-if="prev"
          :to="localePath('blog') + prev.slug"
          nuxt
          exact
          outlined
          height="125"
        >
          <v-card-title primary-title>
            Más nuevo
          </v-card-title>
          <v-card-text>
            {{ prev.title }}
          </v-card-text>
        </v-card>
        <v-card
          v-if="!prev"
          outlined
          height="125"
        >
          <v-card-title primary-title>
            Más nuevo
          </v-card-title>
          <v-card-text>
            No hay artículos más nuevos.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card
          v-if="next"
          :to="localePath('blog') + next.slug"
          nuxt
          exact
          outlined
          height="125"
        >
          <v-card-title primary-title>
            Más antiguo
          </v-card-title>
          <v-card-text>
            {{ next.title }}
          </v-card-text>
        </v-card>
        <v-card
          v-if="!next"
          outlined
          height="125"
        >
          <v-card-title primary-title>
            Más antiguo
          </v-card-title>
          <v-card-text>
            No hay artículos más antiguos.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
