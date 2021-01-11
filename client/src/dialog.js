import Vue from 'vue'
Vue.prototype.$eventHub = new Vue()

Vue.prototype.$dialog = {
  alert (p) {
    const { text = '' } = p || {}
    Vue.prototype.$eventHub.$emit('alert', { text })

    // return new Promise((resolve, reject) => {
    //   Vue.prototype.$eventHub.$on('confirmResponce', s => {
    //     s ? resolve(s) : reject(s)
    //   })
    // }).catch(() =>  false)
  },
  confirm (p) {
    const { text = '' } = p || {}
    Vue.prototype.$eventHub.$emit('confirm', { text })

    return new Promise((resolve, reject) => {
      Vue.prototype.$eventHub.$on('confirmResponce', s => {
        s ? resolve(s) : reject(s)
      })
    }).catch(() =>  false)
  }
}
