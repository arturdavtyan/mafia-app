<template>
  <div :class="['flex items-center', { 'flex-col': isVertical }]">
    <Link
      v-for="({ title, to }, index) in links"
      :key="`link-${index}`"
      :to="to"
      :big="isBig"
      :class="{ 'ml-9': (index !== 0 && !isVertical), 'mb-4': isVertical }">{{ title }}</Link>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
    vertical: {
      type: [String, Boolean],
      default: false
    },
    big: {
      type: [String, Boolean],
      default: false
    }
  },

  computed: {
    isVertical () {
      return this.vertical === '' || this.vertical === true
    },
    isBig () {
      return this.big === '' || this.big === true
    }
  }
}
</script>
