<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="secondary">
        <strong class="subheading">Find me on my socials!</strong>
        <v-spacer></v-spacer>
        <v-btn large icon flat href="https://www.instagram.com/mespinut/" target="_blank">
            <i class="fab fa-instagram fa-2x"></i>
        </v-btn>
        <v-btn large icon flat href="https://twitter.com/mespinUT" target="_blank">
            <i class="fab fa-twitter fa-2x"></i>
        </v-btn>
        <v-btn large icon flat href="https://www.linkedin.com/in/mespinut/" target="_blank">
            <i class="fab fa-linkedin-in fa-2x"></i>
        </v-btn>
        <v-btn large icon flat href="https://github.com/manoy96" target="_blank">
            <i class="fab fa-github"></i>
        </v-btn>
      </v-card-title>

      <v-card-actions class="primary justify-center">
        &copy;2018 —
        <strong>Manuel Espinoza</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
     data: () => ({
      icons: [
        'fab fa-twitter',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
};
</script>

<style lang="scss" scoped>
</style>