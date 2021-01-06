import Vue from 'vue'
Vue.prototype.$eventHub = new Vue()

Vue.prototype.$dialog = {
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
