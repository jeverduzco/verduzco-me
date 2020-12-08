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
        <span class="overline">Computer security</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Digital marketing</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="85"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Data science and AI</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="83"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Internet of Things</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="84"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Business and entrepreneurship</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Project management</span>
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
        <h2 class="text-lg-h2 text-md-h2 text-h4 text-center text-md-right">
          Other skills
        </h2>
        <v-spacer class="elements-spacer" />
        <p class="text-lg-h5 text-md-h5 text-body-1 text-center text-md-right">
          My natural curiosity for knowledge and the Internet are the perfect complement to never stop learning.
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
        <span class="overline">Computer security</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="95"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Digital marketing</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="85"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Data science and AI</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="83"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Internet of Things</span>
        <v-progress-linear
          color="secondary"
          height="10"
          value="84"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Business and entrepreneurship</span>
        <v-progress-linear
          color="primary"
          height="10"
          value="91"
          striped
        />
        <v-spacer class="progress-spacer" />
        <span class="overline">Project management</span>
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
