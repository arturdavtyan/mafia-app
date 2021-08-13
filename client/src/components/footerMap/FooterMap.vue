<template>
  <div class="flex flex-col items-center sm:items-start sm:flex-row justify-evenly lg:justify-between">
    <FooterMapItem
      v-for="(item, index) in footerMap"
      :key="`item-${index}`"
      :item="item" />
  </div>
</template>

<script>
import { footerMap } from './data'

export default {
  components: {
    FooterMapItem: () => import('./FooterMapItem.vue')
  },

  data () {
    return {
      footerMap
    }
  }
}
</script>
