<template>
  <div id="app">
    <h1 style="width: 200px; background: lightgreen; word-break: break-all">Header: Hello World</h1>
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
