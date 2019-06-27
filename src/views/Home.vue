<template>
  <div class="home white--text">
    <v-container fill-height fluid class="secondary myBanner">
      <v-layout align-center justify-start>
        <h1 class="display-4 font-weight-thin ml-3">
          Manuel
          <br>Espinoza
        </h1>
      </v-layout>
    </v-container>
    <!-- ---------TIMELINE------------ -->
    <v-container fluid>
      <h2 class="display-3 black--text">About Me</h2>
      <v-timeline>
        <!-- ---------TIMELINE ITEM------------ -->
        <v-timeline-item color="white" large>
          <v-avatar slot="icon">
            <!-- <img src="http://i.pravatar.cc/64"> -->
            <i class="fas fa-user fa-2x black--text"></i>
          </v-avatar>
          <!-- <span slot="opposite">Tus eu perfecto</span> -->
          <v-card class="elevation-2">
            <v-card-title class="headline">My Life</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
          </v-card>
        </v-timeline-item>
        <!-- ---------TIMELINE ITEM------------ -->
        <v-timeline-item color="white" large>
          <v-avatar slot="icon">
            <!-- <img src="http://i.pravatar.cc/64"> -->
            <i class="fas fa-gamepad fa-2x black--text"></i>
          </v-avatar>
          <!-- <span slot="opposite">Tus eu perfecto</span> -->
          <v-card class="elevation-2">
            <v-card-title class="headline">My Hobbies</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
          </v-card>
        </v-timeline-item>
        <!-- ---------TIMELINE ITEM------------ -->
        <v-timeline-item color="white" large>
          <v-avatar slot="icon">
            <!-- <img src="http://i.pravatar.cc/64"> -->
            <i class="fas fa-code fa-2x black--text"></i>
          </v-avatar>
          <!-- <span slot="opposite">Tus eu perfecto</span> -->
          <v-card class="elevation-2">
            <v-card-title class="headline">Why Web Development?</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <!-- --------------------- -->
    <v-container fluid>
      <h2 class="display-3 black--text">What Do I Know</h2>
      <v-layout row>
        <v-layout column align-center class="pt-3">
          <v-avatar size="130" color="grey lighten-4">
            <img src="../assets/profile.jpg" alt="avatar">
          </v-avatar>
          <h5 class="headline black--text">test</h5>
        </v-layout>
        <!-- --------------------- -->
        <v-flex xs6 class="mx-2">
          <h3 class="display-2 black--text">SKILLS</h3>
          <v-card dark color="accent">
            <!-- <v-card-text class="px-0">6</v-card-text> -->
            <v-progress-linear color="white" height="20" value="75"></v-progress-linear>
            <v-progress-linear color="white" height="20" value="75"></v-progress-linear>
            <v-progress-linear color="white" height="20" value="75"></v-progress-linear>
            <v-progress-linear color="white" height="20" value="75"></v-progress-linear>
            <v-progress-linear color="white" height="20" value="75"></v-progress-linear>
            <v-progress-linear color="white" height="20" value="75"></v-progress-linear>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- --------------------- -->
    <v-container fluid class="accent">
      <h2 class="display-3 black--text">My Work</h2>
      <v-layout>
        <v-flex xs12 sm6 md4 lg3 ma-2>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-layout column align-content-end>
                <v-btn flat color="orange">Explore</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-2>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-2>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 ma-2>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <v-container fluid>
      <h2 class="display-3 black--text">CONTACT</h2>
    </v-container>-->
    <div ref="box" class="box"></div>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

export default {
  components: {},
  mounted() {
    const { box } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(box, 1, { x: 200, rotation: 90 });
  }
};
</script>

<style lang="scss" scoped>
.myBanner {
  height: 95vh;
}
.logo {
  background-color: yellow;
  height: 100px;
  width: 100px;
}
.box {
  height: 60px;
  width: 60px;
  background: red;
}
</style>
