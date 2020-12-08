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
          :to="'/blog/' + prev.slug + '/'"
          nuxt
          exact
          outlined
          height="150"
        >
          <v-card-title primary-title>
            Newer
          </v-card-title>
          <v-card-text>
            {{ prev.title }}
          </v-card-text>
        </v-card>
        <v-card
          v-if="!prev"
          outlined
          height="150"
        >
          <v-card-title primary-title>
            Newer
          </v-card-title>
          <v-card-text>
            There are no newer articles.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card
          v-if="next"
          :to="'/blog/' + next.slug + '/'"
          nuxt
          exact
          outlined
          height="150"
        >
          <v-card-title primary-title>
            Older
          </v-card-title>
          <v-card-text>
            {{ next.title }}
          </v-card-text>
        </v-card>
        <v-card
          v-if="!next"
          outlined
          height="150"
        >
          <v-card-title primary-title>
            Older
          </v-card-title>
          <v-card-text>
            There are no older articles.
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
