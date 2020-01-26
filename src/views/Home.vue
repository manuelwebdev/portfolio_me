<template>
  <div class="home white--text" id="myContainer">
    <v-row>
      <v-col cols="12">
        <v-img :src="require('../assets/hero.jpg')">
          <div ref="me">
            <h1 class="display-4 font-weight-thin ml-3">
              Manuel
              <br />Espinoza
            </h1>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <!-- <v-container fill-height fluid class="secondary myBanner">
      <v-layout align-center justify-start class="my-width mx-auto">
        <div ref="me">
          <h1 class="display-4 font-weight-thin ml-3">
            Manuel
            <br />Espinoza
          </h1>
        </div>
      </v-layout>
    </v-container>-->

    <!-- ---------TIMELINE------------ -->
    <v-row>
      <v-col cols="12">
        <h2 class="text-align display-3 black--text">About Me</h2>
      </v-col>
      <v-col xl="6">
        <v-avatar size="130" color="grey lighten-4">
            <img src="../assets/profile.jpg" alt="avatar" />
          </v-avatar>
          <h5 class="headline black--text my-4">Hi I'm Manuel</h5>
          <p
            class="black--text px-5 myDesc"
          >Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.</p>
      </v-col>
    </v-row>











    <v-container class="my-width mx-auto">
      <h2 class="text-align display-3 black--text">About Me</h2>
      <v-layout row>
        <v-layout column align-center class="pt-3 headShot">
          <v-avatar size="130" color="grey lighten-4">
            <img src="../assets/profile.jpg" alt="avatar" />
          </v-avatar>
          <h5 class="headline black--text my-4">Hi I'm Manuel</h5>
          <p
            class="black--text px-5 myDesc"
          >Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.</p>
        </v-layout>
        <!-- end headshot section -->
        <!-- --------------DIVIDER----------------- -->
        <v-layout xs6 class="mx-2 skillsBar">
          <div class="skillGroup">
            <h3 class="display-1 black--text skillHead">Coding</h3>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-html5 fa-2x mr-4"></i>
              HTML
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-css3 fa-2x mr-4"></i>
              CSS
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-sass fa-2x mr-4"></i>
              SCSS/SASS
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-vuejs fa-2x mr-4"></i>
              Javascript
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-html5 fa-2x mr-4"></i>
              VueJS
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-wordpress-simple fa-2x mr-4"></i>
              WordPress
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-git-alt fa-2x mr-4"></i>
              Git
            </v-chip>
          </div>

          <div class="skillGroup">
            <h3 class="display-1 black--text skillHead">Design</h3>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-adobe fa-2x mr-4"></i>
              Adobe Illustrator
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-adobe fa-2x mr-4"></i>
              Adobe Xd
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fab fa-adobe fa-2x mr-4"></i>
              Adobe InDesign
            </v-chip>
            <v-chip class="ma-2 skillItem" color="secondary" label text-color="white">
              <i class="fas fa-pen-nib fa-2x mr-4"></i>
              UI/UX Design
            </v-chip>
          </div>
        </v-layout>
      </v-layout>
      <v-timeline>
        <!-- ---------TIMELINE ITEM------------ -->
        <v-timeline-item color="white" large>
          <v-avatar slot="icon">
            <i class="fas fa-code fa-2x black--text"></i>
          </v-avatar>
          <v-card class="elevation-2">
            <v-card-title class="headline">My Start</v-card-title>
            <v-card-text>My journey as a developer starts during my last year in high school. I was so set on working my way through college to become a mechanical engineer. Taking my last elective in class, I took a course on the digital media, and different perspectives of the internet age that we live in today. That was my first taste with web design, and my first exposure to actually coding a website. While a very simple taste, I would eventually find myself giving up on engineering, and turning my career towards tech and being a developer.</v-card-text>
          </v-card>
        </v-timeline-item>
        <!-- ---------TIMELINE ITEM------------ -->
        <v-timeline-item color="white" large>
          <v-avatar slot="icon">
            <!-- <img src="http://i.pravatar.cc/64"> -->
            <i class="fas fa-dice-d20 fa-2x black--text"></i>
          </v-avatar>
          <!-- <span slot="opposite">Tus eu perfecto</span> -->
          <v-card class="elevation-2">
            <v-card-title class="headline">My Hobbies</v-card-title>
            <v-card-text>Apart from learning to code or working on my current projects, you might find me being a geek about other subjects. I keep myself up to date with a lot of Marvel comics through Marvel Unlimited or following up on what’s happening in the MCU (Marvel Cinematic Universe). If I’m ever feeling like playing video games I’ll usually play a few rounds of Rocket League, or practice being tactical in Battlefield. My new hobby has been dungeons & dragons. It’s opened up some new ways to interact with people through role-playing, and I’ve gotten creative with creating my own characters in the world. I’ve also taken up photography. I’m currently an amateur, but I enjoy the creative outlet of composing a shot to create something beautiful.</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <!-- -------- -->

    <v-hover v-slot:default="{ hover }">
      <v-card class="mx-auto" color="grey lighten-4" max-width="300">
        <v-img :aspect-ratio="4/3" :src="require('../assets/flexbox.png')">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out secondary darken-1 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              <a href class="white--text myLink">FLEXBOX</a>
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>

    <!-- -------- -->

    <!-- ---------MY WORK------------ -->
    <v-container fluid class="accent" id="test">
      <h2 class="my-width mx-auto text-align display-3 white--text">My Work</h2>
      <v-layout class="my-width mx-auto">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="350" max-width="350">
            <v-card-text class="my-4 text-center title">Hover over me!</v-card-text>
          </v-card>
        </v-hover>
        <!-- <v-hover v-slot:default="{ hover }" style="height: 400px;">
          <v-card class="mx-auto" color="grey lighten-4" max-width="300">
            <v-img :aspect-ratio="4/3" :src="require('../assets/flexbox.png')">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out secondary darken-1 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <a href class="white--text myLink">FLEXBOX</a>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>-->
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
  data: () => ({
    overlay: false
  }),
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
    var controller = new ScrollMagic.Controller({
      container: "#myContainer"
    });
    var test = tl.from("#test", 10, {
      x: 750,
      opacity: 0
    });

    //define scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#test"
    })
      .setTween(test)
      .addTo(controller);

    // timeline.to(box, 1, { x: 200, rotation: 90 });
  } //end mounted
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

.skillsBar,
.headShot {
  width: 50%;
}

.headShot {
  .myDesc {
  }
}

.skillsBar {
  .skillGroup {
    width: 50%;
    display: flex;
    flex-direction: column;

    .skillItem {
      width: 75%;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .skillText {
        align-self: center;
      }
    }
  }
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.myLink {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
