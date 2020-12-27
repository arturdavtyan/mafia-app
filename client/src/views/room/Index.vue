<template>
  <div class="new-room">
    Room
  </div>
</template>

<script>
export default {
  data () {
    return {
      socket: this.$store.getters['Game/GetSocket'],
    }
  },
  created () {
    // this.$store.commit('Game/SetBackRoute', { name: 'main' })
  },
  methods: {
    // NewRoom () {
    //   this.socket.emit('newRoom', this.payload)
    // }
  }
}
</script>

<style lang="scss" scoped>
.new-room {
  padding: 10px 0;
  
  & > div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>