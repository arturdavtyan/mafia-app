import Vue from 'vue'
import App from './App.vue'

// Globally Registered Components
import './GlobalComponents.js'

// Styles: SCSS
import './assets/scss/main.scss'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/'

// Getting data from local storage
import { GetDataFromLocalStorage } from './utils/'
const { nick_name } = GetDataFromLocalStorage()

// Set data in vuex store
store.commit('Game/SetNickName', nick_name)

// Vue filters
import filters from './filters/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters,
  render: h => h(App),
}).$mount('#app')
