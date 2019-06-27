<template>
  <v-toolbar app fixed class="primary">
    <!-- <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light white--text">Manuel Espinoza</span>
    </v-toolbar-title>-->
    <v-avatar slot="icon">
      <!-- <img src="http://i.pravatar.cc/64"> -->
      <i class="fas fa-code fa-2x black--text"></i>
    </v-avatar>
    <v-spacer></v-spacer>

    <router-link tag="v-btn" to="/">
      <v-btn flat class="mx-0 white--text">
        <span>Home</span>
      </v-btn>
    </router-link>

    <router-link tag="v-btn" to="/about">
      <v-btn flat class="mx-0 white--text">
        <span>About</span>
      </v-btn>
    </router-link>

    <v-btn flat href="https://github.com/manoy96" target="_blank">
      <span class="mr-1 white--text">
        <i class="fab fa-github fa-lg"></i> GitHub
      </span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>