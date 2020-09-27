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
      <v-flex
        class="text-left"
        xs12
        sm12
        md6
        lg6
      >
        <h1 class="text-lg-h1 text-md-h2 text-h3 text-center text-md-left">
          Mi Código
        </h1>
        <v-spacer id="text-spacer" />
        <h2 class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          Algunas de mis ideas las convierto en código para ganarme la vida. Puedo decir que, además, de escribir mis ideas en mi blog lo que más me apasiona en la vida es codificar.
        </h2>
        <div class="text-center text-md-left">
          <v-btn
            id="more-info"
            color="secondary"
            large
            rounded
            depressed
            href="https://www.verduzco.dev/"
            target="_blank"
            title="Verduzco.Dev"
          >
            Visitar Verduzco.Dev
          </v-btn>
        </div>
      </v-flex>
      <v-flex
        class="text-center"
        xs12
        sm12
        md6
        lg6
      >
        <img id="saas-image" src="https://storage.verduzco.dev/dotme/website/programming.svg" alt="Mi Código">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
#saas-image {
  max-width: 100%;
  height: auto;
}
#text-spacer {
  height: 25px;
}
#more-info {
  margin-top: 25px;
}
</style>
