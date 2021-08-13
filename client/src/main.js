import Vue from 'vue'
import App from './App.vue'

// Styles: SCSS
import './assets/scss/main.scss'

// Globally Registered Components
import './utils/globalComponents'

// Vue Router
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
