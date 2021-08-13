<template>
  <button
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',

  props: {
    big: {
      default: false
    }
  },

  computed: {
    isBig () {
      return this.big === '' || this.big === true
    },
    classes () {
      const staticClasses = 'bg-primary text-white font-bold outline-none rounded-md px-3'
      return [
        staticClasses,
        this.isBig ? 'h-14 min-w-button--big' : 'h-10 text-sm min-w-button'
      ]
    }
  }
}
</script>
