<template>
  <div
    class="inline-block cursor-pointer"
    @click="onClick">
    <img :src="logoSrc" alt="Logo">
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  },

  data () {
    return {
      logoSrc: require('@/assets/images/logo.png')
    }
  },

  methods: {
    onClick (e) {
      if (this.to) {
        this.$router.push(this.to)
      }

      this.$emit('click', e)
    }
  }
}
</script>
