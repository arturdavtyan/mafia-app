import Vue from 'vue'

// Utils
import { Capitalize } from '@/utils/'

Vue.filter('uppercase', value => {
  if (!value) return ''

  return String(value).toUpperCase()
})

Vue.filter('capitalize', Capitalize)