<template>
  <RouterLink
    :class="['text-sm text-white whitespace-nowrap', { 'text-xl': isBig }]"
    v-bind="$attrs"
    v-on="$listeners"><slot /></RouterLink>
</template>

<script>
export default {
  name: 'Link',

  props: {
    big: {
      type: [String, Boolean],
      default: false
    }
  },

  computed: {
    isBig () {
      return this.big === '' || this.big === true
    }
  }
}
</script>
