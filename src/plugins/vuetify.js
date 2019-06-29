import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'fa',

  theme: {
    primary: '#730710',
    secondary: '#353F40',
    accent: '#A1A6A5',
    error: '#BA1B1A',
    success: '#468966',
    warning: '#FFB03B'
  }
  // theme: {
  //   primary: '#730710',
  //   secondary: '#0D0000',
  //   accent: '#BEBABF',
  //   error: '#BA1B1A',
  //   success: '#468966',
  //   warning: '#FFB03B'
  // }
})
