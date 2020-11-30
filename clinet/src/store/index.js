import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import modules
import General from './General/'

export default new Vuex.Store({
  modules: {
    // modules
    General
  }
})