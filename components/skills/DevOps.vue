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
        <span class="overline">Continuous integration and delivery</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Version control</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Agile software development</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="90"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Infrastructure as code</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="87"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Configuration management</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Continuous monitoring</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
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
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-right">
          DevOps
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          DevOps is my favorite role, I enjoy connecting development with operations.
        </p>
        <div class="text-center text-md-right">
          <v-btn
            class="more-info-btn"
            color="secondary"
            large
            rounded
            depressed
            href="https://t.me/jeverduzco"
            target="_blank"
            title="Send me a message"
          >
            Send me a message
          </v-btn>
        </div>
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
        <span class="overline">Continuous integration and delivery</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Version control</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Agile software development</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="90"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Infrastructure as code</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="87"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Configuration management</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Continuous monitoring</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="98"
          striped
        />
        <v-spacer class="section-spacer" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.progress-spacer {
  height: 10px;
}
.section-spacer {
  height: 35px;
}
</style>
