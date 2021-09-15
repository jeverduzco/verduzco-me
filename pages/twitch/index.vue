<template>
  <div>
    <v-container id="content" grid-list-xl>
      <v-layout wrap row justify-center align-center min-width="100%">
        <client-only>
          <v-flex xs12 sm6 md6>
            <v-card flat outlined>
              <v-card-title class="text-center">
                #DeliriosMísticosLive - ¿Qué herencia quisieras dejar al mundo?
              </v-card-title>
              <v-divider></v-divider>
              <div class="text-center">
                <v-chip class="ma-2" label> 14 de agosto de 2021 </v-chip>
              </div>
              <vue-plyr :options="player">
                <video
                  preload="none"
                  src="https://storage.verduzco.me/twitch/delirios-herencia.mp4"
                  data-poster="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/21be47a05261ec806604_soy_jeshu_39885569835_1630102065//thumb/thumb0-640x360.jpg"
                ></video>
              </vue-plyr>
            </v-card>
          </v-flex>
        </client-only>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      player: {
        i18n: {
          speed: this.$i18n.locale === 'es' ? 'Velocidad' : 'Speed',
          quality: this.$i18n.locale === 'es' ? 'Calidad' : 'Quality',
        },
        speed: {
          selected: 1,
          // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
          options: [0.5, 0.75, 1, 1.25, 1.5],
        },
      },
    }
  },
}
</script>
