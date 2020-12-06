import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import modules
import General from './General/'
import Game from './Game/'

export default new Vuex.Store({
  modules: {
    // modules
    General,
    Game
  }
})