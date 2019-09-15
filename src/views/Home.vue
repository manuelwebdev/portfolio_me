<template>
  <div class="home white--text" id="myContainer">
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
    <v-container class="my-width mx-auto">
      <h2 class="text-align display-3 black--text">About Me</h2>
      <v-layout row>
        <v-layout column align-center class="pt-3 headShot">
          <v-avatar size="130" color="grey lighten-4">
            <img src="../assets/profile.jpg" alt="avatar" />
          </v-avatar>
          <h5 class="headline black--text my-4">Hi I'm Manuel</h5>
          <p class="black--text px-5 myDesc">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.</p>
        </v-layout><!-- end headshot section -->
        <!-- --------------DIVIDER----------------- -->
        <v-flex xs6 class="mx-2 skillsBar">
          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 ">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>

          <div class="skills">
            <div class="primary lighten-2 body-1 font-weight-medium px-3 py-1">HTML</div>
            <div class="primary bar">
              <div class="left"></div>
              <div class="accent lighten-2 right black--text font-weight-light">90%</div>
            </div>
          </div>
        </v-flex>
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
    <!-- ---------MY WORK------------ -->
    <v-container fluid class="accent" id="test">
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

.skillsBar, .headShot {
  width: 50%;
}

.headShot {
  .myDesc {}
}

.skills {
  display: flex;
  height: 32px;
  width: 100%;
  margin: 1rem 0;
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
      padding-right: 0.75rem;
      font-size: 16px;
      font-weight: 300;
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
