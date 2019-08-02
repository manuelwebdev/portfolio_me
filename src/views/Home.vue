<template>
  <div class="home white--text">
    <v-container fill-height fluid class="secondary myBanner">
      <v-layout align-center justify-start class="my-width mx-auto">
        <div ref="me">
          <h1 class="display-4 font-weight-thin ml-3">
            Manuel
            <br />Espinoza
          </h1>
        </div>
      </v-layout>
    </v-container>
    <!-- ---------TIMELINE------------ -->
    <v-container class="my-width mx-auto" id="my-sticky-element">
      <h2 class="text-align display-3 black--text">About Me</h2>
      <v-timeline>
        <!-- ---------TIMELINE ITEM------------ -->
        <v-timeline-item color="white" large>
          <v-avatar slot="icon">
            <i class="fas fa-user fa-2x black--text"></i>
          </v-avatar>
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
    <!-- ---------SKILLS------------ -->
    <v-container class="my-width" id="test1">
      <h2 class="text-align display-3 black--text">What Do I Know</h2>
      <v-layout row>
        <v-layout column align-center class="pt-3">
          <v-avatar size="130" color="grey lighten-4">
            <img src="../assets/profile.jpg" alt="avatar" />
          </v-avatar>
          <h5 class="headline black--text">test</h5>
        </v-layout>
        <!-- --------------------- -->
        <v-flex xs6 class="mx-2">
          <h3 class="display-2 black--text">SKILLS</h3>

          <div class="skills">
            <div class="primary lighten-2 title">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent right">90%</div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- ---------MY WORK------------ -->
    <v-container fluid class="accent" id="test2">
      <h2 class="my-width mx-auto text-align display-3 white--text">My Work</h2>
      <v-layout class="my-width mx-auto">
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
                <br />
                <span>Whitehaven Beach</span>
                <br />
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
                <br />
                <span>Whitehaven Beach</span>
                <br />
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
                <br />
                <span>Whitehaven Beach</span>
                <br />
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
                <br />
                <span>Whitehaven Beach</span>
                <br />
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
  </div>
</template>

<script>
import { TweenLite, TimelineLite } from "gsap";
import ScrollMagic from "scrollmagic";
import gsap from "scrollmagic";

export default {
  components: {},
  mounted() {
    //------- GREENSOCK --------
    const { box } = this.$refs;
    const { me } = this.$refs;
    const tl = new TimelineLite();
    const tween = new tl.from(me, 0.75, {
      x: 600
    });

    //-------- SCROLL MAGIC ---------
    // const controller = new ScrollMagic.Controller();

    // define controller
    var controller = new ScrollMagic.Controller();

    // var test = tl.from("#test", 2, {
    //   x: 750
    // });

    //define scene
    var scene = new ScrollMagic.Scene({
        duration: 100,    // the scene should last for a scroll distance of 100px
        offset: 50    // start this scene after scrolling for 50px
    })
      .setTween("#my-sticky-element")
      .addTo(controller);

    // timeline.to(box, 1, { x: 200, rotation: 90 });
  }
};
</script>

<style lang="scss" scoped>
.my-width {
  max-width: 1200px;
}
.text-align {
  text-align: center;
  padding-bottom: 0.5rem;
}
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

.skills,
.skills2,
.skills3,
.skills4,
.skills5 {
  display: flex;
  height: 35px;
  width: 100%;
  margin: 0.75rem 0;
  // border: 1px solid gray;
  // background-color: #592529;

  .title {
    display: flex;
    width: 15%;
    height: 100%;
    // background-color: lighten(#592529, 15%);
    justify-content: center;
    align-items: center;
    // border-radius: 0 8px 8px 0;
  }
  .bar {
    display: flex;
    width: 85%;
    height: 100%;
    // background-color: #a1a6a5;
    .left {
      // background-color: #592529;
      height: 100%;
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      // background-color: #a1a6a5;
      padding-right: 2rem;
      font-size: 24px;
    }
  }
}

.skills {
  .bar {
    .left {
      width: 90%;
    }
    .right {
      width: 10%;
    }
  }
}
.skills2 {
  .bar {
    .left {
      width: 90%;
    }
    .right {
      width: 10%;
    }
  }
}
.skills3 {
  .bar {
    .left {
      width: 90%;
    }
    .right {
      width: 10%;
    }
  }
}
.skills4 {
  .bar {
    .left {
      width: 90%;
    }
    .right {
      width: 10%;
    }
  }
}
.skills5 {
  .bar {
    .left {
      width: 90%;
    }
    .right {
      width: 10%;
    }
  }
}
</style>
