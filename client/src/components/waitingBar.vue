<template>
  <div>
    <h2 class="room-number">{{ roomNumber }}</h2>
    <h3 class="player-count">{{ `${currentPlayerCount}/${maxPlayer}` }}</h3>
    <div
      v-if="isAdmin && isFullPlayer"
      @click="Start">
      <primary-button>Սկսել</primary-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socket: this.$store.getters['Game/GetSocket']
    }
  },
  computed: {
    roomNumber () {
      return this.$store.getters['Game/GetRoomNumber']
    },
    currentPlayerCount () {
      return this.$store.getters['Game/GetCurrentPlayerCount']
    },
    maxPlayer () {
      return this.$store.getters['Game/GetMaxPlayer']
    },
    isAdmin () {
      return this.$store.getters['Game/GetRole'] === 'admin'
    },
    isFullPlayer () {
      const currentPlayerCount = this.currentPlayerCount
      const totalPlayerCount = parseInt(this.$store.getters['Game/GetMaxPlayer'], 10)
      
      return totalPlayerCount === currentPlayerCount
    }
  },
  methods: {
    Start () {
      this.socket.emit('roomReady', {
        roomNumber: this.roomNumber
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.room-number {
  text-align: center;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 900;
  color: $red;
  text-shadow: 1px 1px 1px #66202099;
}
.player-count {
  padding: 20px 0;
  text-align: center;
  font-size: 26px;
}
</style>