<template>
  <div id="app">
    <h1 style="background: darkgreen; color: white; text-align: center; font-size: 55px; padding: 40px 0">Header: Hello World</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.SetWindowWidth()
    window.addEventListener('resize', this.SetWindowWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.SetWindowWidth)
  },
  methods: {
    SetWindowWidth() {
      this.$store.commit('General/SetWindowWidth', window.innerWidth)
    }
  }
}
</script>
