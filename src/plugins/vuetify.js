import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#592529',
    secondary: '#353F40',
    accent: '#A1A6A5',
    error: '#BA1B1A',
    success: '#468966',
    warning: '#FFB03B'
  }
})
