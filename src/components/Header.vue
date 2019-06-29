<template>
  <v-toolbar app fixed class="primary">
    <v-layout align-center class="my-width mx-auto">
      <v-toolbar-title class="my-toolbar">
        <v-avatar size="60" class>
          <div ref="box" class="box">
            <img src="../assets/My_Logo.png" />
          </div>
        </v-avatar>
      </v-toolbar-title>




      <v-spacer></v-spacer>




      <router-link tag="v-btn" to="/">
        <v-btn ref="home" flat class="mx-0 white--text">
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
    </v-layout>
  </v-toolbar>
</template>

<script>
import { TimelineLite } from "gsap";

export default {
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(box, 2, {
      y: -75,
      rotation: -360
    });
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 60px;
  width: 60px;
}
.my-toolbar {
  width: 500px;
}
</style>
