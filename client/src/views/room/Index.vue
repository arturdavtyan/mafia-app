<template>
  <div class="new-room">
    <player-list :players="players" />
    <template v-if="!isReady">
      <waiting-bar />
    </template>
    <template v-else>
      <template v-if="role === 'admin'">
        <!-- Admin -->
        <!-- <player-list :players="players" /> -->
      </template>
      <template v-else>
        <card :role="role" />
      </template>
      <!-- <div @click="Start">
        <primary-button>Open</primary-button>
      </div> -->
    </template>
  </div>
</template>

<script>
export default {
  components: {
    waitingBar: () => import('@/components/waitingBar'),
    card: () => import('@/components/card'),
    playerList: () => import('@/components/playerList/Index')
  },
  data () {
    return {
      socket: this.$store.getters['Game/GetSocket'],
    }
  },
  computed: {
    isReady () {
      return this.$store.getters['Game/IsReadyRoom']
    },
    role () {
      return this.$store.getters['Game/GetRole']
    },
    players () {
      return [
        {
          id: 12,
          nickname: 'Tigranuhi Yeghyazaryan',
          reprimand: 0
        },
        {
          id: 13,
          nickname: 'Hovhannes Sirekanyan',
          reprimand: 2
        },
        {
          id: 14,
          nickname: 'Tigranuhi Yeghyazaryan',
          reprimand: 3
        },
        {
          id: 15,
          nickname: 'Hovhannes Sirekanyan',
          reprimand: 2
        },
      ]
    }
  },
  created () {
    this.$store.commit('Game/SetBackRoute', { name: 'main' })
  },
  beforeRouteLeave (to, from, next) {
    this.$dialog.confirm({ text: 'Ցանկանու՞մ եք դուրս գալ խաղից' })
    .then(res => {
      if (res) {
        this.socket.emit('leaveRoom')
        this.$store.commit('Game/ResetGame')
        next()
      }
    })
  },
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