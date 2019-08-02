<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content>
        <router-view />
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
.my-width {
  max-width: 1200px;
}
.text-align {
  text-align: center;
  padding-bottom: 0.5rem;
}
</style>

