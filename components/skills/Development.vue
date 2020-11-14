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
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-left">
          Desarrollo Web
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-left">
          Después de DevOps el desarrollo de aplicaciones web es algo que disfruto y se me van las horas codificando.
        </p>
        <v-spacer class="elements-spacer" />
      </v-flex>
      <v-flex
        xs12
        sm12
        md6
        lg6
      >
        <v-spacer class="section-spacer" />
        <span class="overline">Frontend (HTML, CSS, JS, UX)</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Backend (JS, PYTHON)</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="90"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Autenticación (OAuth, SSO, JWT)</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Frameworks (Vue, Express, Django)</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">API's (REST, GraphQL)</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="89"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Bases de datos (Mongo DB, Cosmos DB)</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="95"
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
