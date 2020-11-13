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
        v-if="$vuetify.breakpoint.mdAndUp"
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">Seguridad informática</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Marketing digital</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="85"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Ciencia de datos e IA</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="83"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Internet de las cosas</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="84"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Negocios y emprendimiento</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Gestión de proyectos</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="92"
          striped
        />
        <v-spacer class="section-spacer" />
      </v-flex>
      <v-flex
        class="text-right"
        xs12
        sm12
        md6
        lg6
      >
        <h2 class="text-lg-h2 text-md-h2 text-h3 text-center text-md-right">
          Otras habilidades
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          Mi sed nata de conocimiento e internet son el complemento perfecto para nunca dejar de aprender.
        </p>
        <v-spacer class="elements-spacer" />
      </v-flex>
      <v-flex
        v-if="$vuetify.breakpoint.smAndDown"
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">Seguridad informática</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Marketing digital</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="85"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Ciencia de datos e IA</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="83"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Internet de las cosas</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="84"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Negocios y emprendimiento</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Gestión de proyectos</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="92"
          striped
        />
        <v-spacer class="section-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.elements-spacer {
  height: 25px;
}
.progress-spacer {
  height: 10px;
}
.section-spacer {
  height: 35px;
}
</style>
