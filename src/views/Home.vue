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
    <!-- --------------------- -->
    <v-container fluid>
      <h2 class="display-3 black--text">WHAT DO I KNOW</h2>
      <v-layout row>
        <v-layout column align-center class="pt-3">
          <v-avatar size="130" color="grey lighten-4">
            <img src="../assets/profile.jpg" alt="avatar">
          </v-avatar>
          
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
      <h2 class="display-3 black--text">MY WORK</h2>
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
    <v-container fluid>
      <h2 class="display-3 black--text">CONTACT</h2>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.myBanner {
  height: 95vh;
}
</style>
