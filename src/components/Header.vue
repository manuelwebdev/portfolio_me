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
        <div ref="home">
          <v-btn ref="home" flat class="mx-0 white--text">
            <span>Home</span>
          </v-btn>
        </div>
      </router-link>

      <router-link tag="v-btn" to="/about">
        <div ref="about">
          <v-btn flat class="mx-0 white--text">
            <span>About</span>
          </v-btn>
        </div>
      </router-link>

      <div ref="git">
        <v-btn flat href="https://github.com/manoy96" target="_blank">
          <span class="mr-1 white--text">
            <i class="fab fa-github fa-lg"></i> GitHub
          </span>
        </v-btn>
      </div>
    </v-layout>
  </v-toolbar>
</template>

<script>
import { TweenLite, TimelineLite } from "gsap";

export default {
  mounted() {
    const { box } = this.$refs;
    const { home } = this.$refs;
    const { about } = this.$refs;
    const { git } = this.$refs;
    const { me } = this.$refs;
    const timeline = new TimelineLite();
    //  const tween = new TweenLite();

     timeline.from(box, 1.25, {
       y: -75,
       rotation: -360
     })
     .from(home, 0.3, {
       y: -75
     })
     .from(about, 0.3, {
       y: -75
     })
     .from(git, 0.3, {
       y: -75
     })

     timeline.timeScale(1.5);

    // TweenLite.from(box, 1.5, {
    //   y: -75,
    //   rotation: -360
    // });
    // TweenLite.from(home, 2.2, {
    //   y: -75
    //   // scaleX: -2,
    //   // scaleY: -1
    // },);
    // TweenLite.from(about, 2.2, {
    //   y: -75,
    //   delay: .1
    // });
    // TweenLite.from(git, 2.2, {
    //   y: -75,
    //   delay: .2
    // });
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
