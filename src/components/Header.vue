<template>
  <v-toolbar app class="primary">
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light white--text">Manuel Espinoza</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <router-link tag="v-btn" to="/">
      <v-btn flat class="mx-0">
        <span>Home</span>
      </v-btn>
    </router-link>

    <router-link tag="v-btn" to="/about">
      <v-btn flat>
        <span>About</span>
      </v-btn>
    </router-link>

    <v-btn flat href="https://github.com/manoy96" target="_blank">
      <span class="mr-1">GitHub</span>
    </v-btn>
    
  </v-toolbar>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>